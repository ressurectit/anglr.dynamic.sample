import {Component, ChangeDetectionStrategy, OnInit, Inject, ClassProvider} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ComponentRouteAuthorized, Authorize} from '@anglr/authentication';
import {EditorHotkeys, MetadataHistoryManager, MetadataStateManager, METADATA_STATE_MANAGER, PackageManager} from '@anglr/dynamic';
import {provideRelationsEditorWithStatic, RelationsNodeMetadata, RELATIONS_HISTORY_MANAGER} from '@anglr/dynamic/relations-editor';
import {provideHandlebarsRelationsEditor} from '@anglr/dynamic/handlebars-components';
import {provideRestRelationsEditor} from '@anglr/dynamic/rest-components';
import {provideTinyMceRelationsEditor} from '@anglr/dynamic/tinymce-components';

import {StoreDataService} from '../../../services/storeData';
import {DemoRelationsPackageManager} from '../../../services/demoRelationsPackageManager/demoRelationsPackageManager.service';
import {createStoreDataServiceFactory} from '../../../misc/factories';
import {provideSampleRelationsEditor} from '../../../dynamicItems/utils';
import {ResolverStaticRegister} from '../misc';

/**
 * Component used for displaying resolver relations editor
 */
@Component(
{
    selector: 'resolver-relations-editor-view',
    templateUrl: 'resolverRelations.component.html',
    styleUrls: ['resolverRelations.component.scss'],
    providers:
    [
        EditorHotkeys,
        provideHandlebarsRelationsEditor(),
        provideRestRelationsEditor(),
        provideTinyMceRelationsEditor(),
        provideSampleRelationsEditor(),
        provideRelationsEditorWithStatic(ResolverStaticRegister),
        <ClassProvider>
        {
            provide: PackageManager,
            useClass: DemoRelationsPackageManager,
        },
        createStoreDataServiceFactory('RESOLVER_RELATIONS_DATA'),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRouteAuthorized({path: 'resolverRelations/:id'})
@Authorize('resolverRelationsEditor-page')
export class ResolverRelationsComponent implements OnInit
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
                private _store: StoreDataService<RelationsNodeMetadata[]>,
                @Inject(METADATA_STATE_MANAGER) private _metaManager: MetadataStateManager<RelationsNodeMetadata[]>,
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

            this.metadata = this._store.getData(this._id) ?? [];
        });
    }

    //######################### protected methods - template bindings #########################

    /**
     * Saves current template
     */
    protected save(): void
    {
        const metadata = this._metaManager.getMetadata();
        
        if(metadata)
        {
            this._store.setData(this._id, metadata);
        }
    }
}
