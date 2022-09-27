import {Component, ChangeDetectionStrategy, FactoryProvider, ClassProvider, ExistingProvider, OnInit, Inject, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ComponentRouteAuthorized, Authorize} from '@anglr/authentication';
import {CodeEditorContent, CodeEditorDialogComponent, CodeEditorDialogData, EditorHotkeys, JsonLanguageModel, MetadataStateManager, MetadataStorage, METADATA_STATE_MANAGER, PackageManager} from '@anglr/dynamic';
import {LayoutComponentMetadata, LAYOUT_METADATA_STORAGE} from '@anglr/dynamic/layout';
import {provideLayoutEditor, REFRESH_PALETTE_OBSERVABLES} from '@anglr/dynamic/layout-editor';
import {provideFormLayoutEditor} from '@anglr/dynamic/form';
import {provideCssLayoutEditor} from '@anglr/dynamic/css-components';
import {provideTinyMceLayoutEditor} from '@anglr/dynamic/tinymce-components';
import {provideHandlebarsLayoutEditor} from '@anglr/dynamic/handlebars-components';
import {CustomComponentsRegister, provideEditorLayoutCustomComponents} from '@anglr/dynamic/layout-relations';
import {StackPanelComponentOptions} from '@anglr/dynamic/basic-components';
import {TitledDialogService} from '@anglr/common/material';
import {GlobalNotificationsService} from '@anglr/notifications';
import {generateId, isPresent} from '@jscrpt/common';
import {lastValueFrom} from 'rxjs';

import {StoreDataService} from '../../../services/storeData';
import {LayoutRelationsMetadata} from '../../../misc/interfaces';
import {DemoCustomComponentsRegister} from '../../../services/demoCustomComponentsRegister';
import {DemoLayoutPackageManager} from '../../../services/demoLayoutPackageManager/demoLayoutPackageManager.service';
import {createStoreDataServiceFactory} from '../../../misc/factories';
import {provideSampleLayoutEditor} from '../../../dynamicItems/utils';

/**
 * Component used for displaying layout editor
 */
@Component(
{
    selector: 'layout-editor-view',
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.component.scss'],
    providers:
    [
        EditorHotkeys,
        <FactoryProvider>
        {
            provide: LAYOUT_METADATA_STORAGE,
            useFactory: (store: StoreDataService<LayoutRelationsMetadata>) => new MetadataStorage<LayoutComponentMetadata>(id => store.getData(id)?.layout ?? null),
            deps: [StoreDataService]
        },
        provideLayoutEditor(),
        provideFormLayoutEditor(),
        provideCssLayoutEditor(),
        provideTinyMceLayoutEditor(),
        provideHandlebarsLayoutEditor(),
        provideSampleLayoutEditor(),
        provideEditorLayoutCustomComponents([], DemoCustomComponentsRegister),
        <ClassProvider>
        {
            provide: PackageManager,
            useClass: DemoLayoutPackageManager,
        },
        <ExistingProvider>
        {
            provide: DemoCustomComponentsRegister,
            useExisting: CustomComponentsRegister,
        },
        <FactoryProvider>
        {
            provide: REFRESH_PALETTE_OBSERVABLES,
            useFactory: (register: DemoCustomComponentsRegister) => register.registeredChange,
            deps: [DemoCustomComponentsRegister],
            multi: true,
        },
        createStoreDataServiceFactory('DYNAMIC_CONTENT_DATA'),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRouteAuthorized({path: 'layout/:id'})
@Authorize('layoutEditor-page')
export class LayoutComponent implements OnInit
{
    //######################### private fields #########################

    /**
     * Id of layout template
     */
    private _id: string = '';

    //######################### protected properties - template bindings #########################

    /**
     * Current metadata
     */
    protected metadata: LayoutComponentMetadata|null = this.emptyMetadata;

    /**
     * Gets empty metadata
     */
    protected get emptyMetadata(): LayoutComponentMetadata
    {
        return {
            id: `stackPanel-${generateId(10)}`,
            displayName: 'root',
            package: 'basic-components',
            name: 'stackPanel',
            options: <StackPanelComponentOptions>
            {
                children: [] as LayoutComponentMetadata[],
            },
        };
    }

    //######################### constructor #########################
    constructor(private _route: ActivatedRoute,
                private _store: StoreDataService<LayoutRelationsMetadata>,
                @Inject(METADATA_STATE_MANAGER) private _metaManager: MetadataStateManager<LayoutComponentMetadata>,
                private dialog: TitledDialogService,
                private _notifications: GlobalNotificationsService,
                private _changeDetector: ChangeDetectorRef,)
    {
    }

    //######################### public methods - implementation of OnInit #########################
    
    /**
     * Initialize component
     */
    public ngOnInit(): void
    {
        this._route.params.subscribe(({id}) =>
        {
            this._id = id;

            this.metadata = this._store.getData(this._id)?.layout ?? this.emptyMetadata;
        });
    }

    //######################### protected methods - template bindings #########################

    /**
     * Saves current template
     */
    protected save(): void
    {
        const metadata = this._store.getData(this._id) ?? {};
        metadata.layout = this._metaManager.getMetadata() ?? undefined;
        
        this._store.setData(this._id, metadata);
    }

    /**
     * Imports metadata from json string
     */
    protected async import(): Promise<void>
    {
        const result = await lastValueFrom(this.dialog.open<CodeEditorDialogComponent, CodeEditorDialogData, CodeEditorContent|null>(CodeEditorDialogComponent,
        {
            title: 'Import layout metadata',
            width: '75vw',
            height: '75vh',
            data: 
            {
                content: '',
                languageModel: JsonLanguageModel,

            }
        }).afterClosed());

        if(isPresent(result))
        {
            try
            {
                this.metadata = JSON.parse(result.content);

                this._changeDetector.detectChanges();
            }
            catch(e)
            {
                this._notifications.error(`Failed to parse json ${e}`);
            }
        }
    }
}