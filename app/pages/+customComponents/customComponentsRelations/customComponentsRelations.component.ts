import {Component, ChangeDetectionStrategy, OnInit, Inject, FactoryProvider, ClassProvider} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ComponentRouteAuthorized, Authorize} from '@anglr/authentication';
import {EditorHotkeys, MetadataHistoryManager, MetadataStateManager, MetadataStorage, METADATA_STATE_MANAGER, PackageManager} from '@anglr/dynamic';
import {RELATIONS_METADATA_STORAGE} from '@anglr/dynamic/relations';
import {RelationsNodeMetadata, RELATIONS_HISTORY_MANAGER} from '@anglr/dynamic/relations-editor';
import {provideHandlebarsLayoutRelationsEditor} from '@anglr/dynamic/handlebars-components';
import {provideRestLayoutRelationsEditor} from '@anglr/dynamic/rest-components';
import {provideTinyMceLayoutRelationsEditor} from '@anglr/dynamic/tinymce-components';
import {provideCssLayoutRelationsEditor} from '@anglr/dynamic/css-components';
import {provideBasicLayoutRelationsEditor} from '@anglr/dynamic/basic-components';
import {provideMaterialLayoutRelationsEditor} from '@anglr/dynamic/material-components';
import {LayoutManager, provideEditorRelationsCustomComponents, provideLayoutRelationsEditor} from '@anglr/dynamic/layout-relations';

import {StoreDataService} from '../../../services/storeData';
import {LayoutRelationsMetadata} from '../../../misc/interfaces';
import {SampleCustomComponentsRegister} from '../../../services/sampleCustomComponentsRegister';
import {SampleRelationsPackageManager} from '../../../services/sampleRelationsPackageManager/sampleRelationsPackageManager.service';
import {createStoreDataServiceFactory} from '../../../misc/factories';
import {provideSampleLayoutRelationsEditor} from '../../../dynamicItems/utils';
import {DYNAMIC_CONTENT_DATA} from '../../../misc/constants';

/**
 * Component used for displaying relations editor for custom components
 */
@Component(
{
    selector: 'custom-components-relations-editor-view',
    templateUrl: 'customComponentsRelations.component.html',
    styleUrls: ['customComponentsRelations.component.scss'],
    providers:
    [
        EditorHotkeys,
        <FactoryProvider>
        {
            provide: RELATIONS_METADATA_STORAGE,
            useFactory: (store: StoreDataService<LayoutRelationsMetadata>) => new MetadataStorage<RelationsNodeMetadata[]>(id => store.getData(id)?.relations ?? []),
            deps: [StoreDataService]
        },
        provideBasicLayoutRelationsEditor(),
        provideMaterialLayoutRelationsEditor(),
        provideHandlebarsLayoutRelationsEditor(),
        provideRestLayoutRelationsEditor(),
        provideTinyMceLayoutRelationsEditor(),
        provideCssLayoutRelationsEditor(),
        provideSampleLayoutRelationsEditor(),
        provideEditorRelationsCustomComponents(provideLayoutRelationsEditor(), SampleCustomComponentsRegister),
        <ClassProvider>
        {
            provide: PackageManager,
            useClass: SampleRelationsPackageManager,
        },
        createStoreDataServiceFactory(DYNAMIC_CONTENT_DATA),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRouteAuthorized({path: 'customComponents/relations/:id'})
@Authorize('customComponentsRelationsEditor-page')
export class CustomComponentsRelationsComponent implements OnInit
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
                @Inject(RELATIONS_HISTORY_MANAGER) protected history: MetadataHistoryManager,)
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
}
