import {Component, ChangeDetectionStrategy, FactoryProvider, ClassProvider, ExistingProvider, OnInit, Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ComponentRouteAuthorized, Authorize} from '@anglr/authentication';
import {EditorHotkeys, MetadataHistoryManager, MetadataStateManager, MetadataStorage, METADATA_STATE_MANAGER, PackageManager} from '@anglr/dynamic';
import {LayoutComponentMetadata, LAYOUT_METADATA_STORAGE} from '@anglr/dynamic/layout';
import {LAYOUT_HISTORY_MANAGER, provideLayoutEditor, REFRESH_PALETTE_OBSERVABLES} from '@anglr/dynamic/layout-editor';
import {provideFormLayoutEditor} from '@anglr/dynamic/form';
import {provideCssLayoutEditor} from '@anglr/dynamic/css-components';
import {provideTinyMceLayoutEditor} from '@anglr/dynamic/tinymce-components';
import {provideHandlebarsLayoutEditor} from '@anglr/dynamic/handlebars-components';
import {CustomComponentsRegister, provideEditorLayoutCustomComponents} from '@anglr/dynamic/layout-relations';
import {StackPanelComponentOptions} from '@anglr/dynamic/basic-components';
import {generateId} from '@jscrpt/common';

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
                @Inject(LAYOUT_HISTORY_MANAGER) protected history: MetadataHistoryManager,)
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
}