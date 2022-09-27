import {Component, ChangeDetectionStrategy, OnInit, Inject, FactoryProvider, ClassProvider, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ComponentRouteAuthorized, Authorize} from '@anglr/authentication';
import {CodeEditorContent, CodeEditorDialogComponent, CodeEditorDialogData, EditorHotkeys, JsonLanguageModel, MetadataStateManager, MetadataStorage, METADATA_STATE_MANAGER, PackageManager} from '@anglr/dynamic';
import {RELATIONS_METADATA_STORAGE} from '@anglr/dynamic/relations';
import {RelationsNodeMetadata} from '@anglr/dynamic/relations-editor';
import {provideHandlebarsLayoutRelationsEditor} from '@anglr/dynamic/handlebars-components';
import {provideRestLayoutRelationsEditor} from '@anglr/dynamic/rest-components';
import {provideTinyMceLayoutRelationsEditor} from '@anglr/dynamic/tinymce-components';
import {provideCssLayoutRelationsEditor} from '@anglr/dynamic/css-components';
import {TitledDialogService} from '@anglr/common/material';
import {GlobalNotificationsService} from '@anglr/notifications';
import {LayoutManager, provideEditorRelationsCustomComponents, provideLayoutRelationsEditorWithStatic} from '@anglr/dynamic/layout-relations';
import {isPresent} from '@jscrpt/common';
import {lastValueFrom} from 'rxjs';

import {StoreDataService} from '../../../services/storeData';
import {LayoutRelationsMetadata} from '../../../misc/interfaces';
import {DemoCustomComponentsRegister} from '../../../services/demoCustomComponentsRegister';
import {DemoRelationsPackageManager} from '../../../services/demoRelationsPackageManager/demoRelationsPackageManager.service';
import {createStoreDataServiceFactory} from '../../../misc/factories';
import {provideSampleLayoutRelationsEditor} from '../../../dynamicItems/utils';
import {ComplexStaticRegister} from '../misc';

/**
 * Component used for displaying relations editor
 */
@Component(
{
    selector: 'relations-editor-view',
    templateUrl: 'relations.component.html',
    styleUrls: ['relations.component.scss'],
    providers:
    [
        EditorHotkeys,
        <FactoryProvider>
        {
            provide: RELATIONS_METADATA_STORAGE,
            useFactory: (store: StoreDataService<LayoutRelationsMetadata>) => new MetadataStorage<RelationsNodeMetadata[]>(id => store.getData(id)?.relations ?? []),
            deps: [StoreDataService]
        },
        provideHandlebarsLayoutRelationsEditor(),
        provideRestLayoutRelationsEditor(),
        provideTinyMceLayoutRelationsEditor(),
        provideCssLayoutRelationsEditor(),
        provideSampleLayoutRelationsEditor(),
        provideEditorRelationsCustomComponents(provideLayoutRelationsEditorWithStatic(ComplexStaticRegister), DemoCustomComponentsRegister),
        <ClassProvider>
        {
            provide: PackageManager,
            useClass: DemoRelationsPackageManager,
        },
        createStoreDataServiceFactory('DYNAMIC_CONTENT_DATA'),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRouteAuthorized({path: 'relations/:id'})
@Authorize('relationsEditor-page')
export class RelationsComponent implements OnInit
{
    //######################### private fields #########################

    /**
     * Id of relations template
     */
    private _id: string = '';

    //######################### protected properties - template bindings #########################

    /**
     * Current metadata
     */
    protected metadata: RelationsNodeMetadata[] = [];

    //######################### constructor #########################
    constructor(private _route: ActivatedRoute,
                private _store: StoreDataService<LayoutRelationsMetadata>,
                @Inject(METADATA_STATE_MANAGER) private _metaManager: MetadataStateManager<RelationsNodeMetadata[]>,
                private layoutManager: LayoutManager,
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

            const metadata = this._store.getData(this._id);
            this.metadata = metadata?.relations ?? [];

            if(metadata?.layout)
            {
                this.layoutManager.setLayout(metadata?.layout);
            }
        });
    }

    //######################### protected methods - template bindings #########################

    /**
     * Saves current template
     */
    protected save(): void
    {
        const metadata = this._store.getData(this._id) ?? {};
        metadata.relations = this._metaManager.getMetadata() ?? undefined;
        
        this._store.setData(this._id, metadata);
    }

    /**
     * Imports metadata from json string
     */
    protected async import(): Promise<void>
    {
        const result = await lastValueFrom(this.dialog.open<CodeEditorDialogComponent, CodeEditorDialogData, CodeEditorContent|null>(CodeEditorDialogComponent,
        {
            title: 'Import relations metadata',
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
