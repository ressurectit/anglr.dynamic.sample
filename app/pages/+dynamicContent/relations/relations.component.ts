import {Component, ChangeDetectionStrategy, OnInit, Inject, FactoryProvider, ClassProvider} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ComponentRouteAuthorized, Authorize} from '@anglr/authentication';
import {EditorHotkeys, MetadataStateManager, MetadataStorage, METADATA_STATE_MANAGER, PackageManager} from '@anglr/dynamic';
import {RELATIONS_METADATA_STORAGE} from '@anglr/dynamic/relations';
import {RelationsNodeMetadata} from '@anglr/dynamic/relations-editor';
import {provideHandlebarsLayoutRelationsEditor} from '@anglr/dynamic/handlebars-components';
import {provideRestLayoutRelationsEditor} from '@anglr/dynamic/rest-components';
import {provideTinyMceLayoutRelationsEditor} from '@anglr/dynamic/tinymce-components';
import {provideCssLayoutRelationsEditor} from '@anglr/dynamic/css-components';
import {LayoutManager, provideEditorRelationsCustomComponents, provideLayoutRelationsEditorWithStatic} from '@anglr/dynamic/layout-relations';

import {StoreDataService} from '../../../services/storeData';
import {LayoutRelationsMetadata} from '../../../misc/interfaces';
import {DemoCustomComponentsRegister} from '../../../services/demoCustomComponentsRegister';
import {DemoRelationsPackageManager} from '../../../services/demoRelationsPackageManager/demoRelationsPackageManager.service';
import {createStoreDataServiceFactory} from '../../../misc/factories';
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
                private layoutManager: LayoutManager,)
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
