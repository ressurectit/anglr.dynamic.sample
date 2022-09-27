import {Component, ChangeDetectionStrategy, FactoryProvider, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {provideLayoutRelationsCustomComponents} from '@anglr/dynamic/layout-relations';
import {provideCssLayoutRelations} from '@anglr/dynamic/css-components';
import {provideTinyMceLayoutRelations} from '@anglr/dynamic/tinymce-components';
import {provideHandlebarsLayoutRelations} from '@anglr/dynamic/handlebars-components';
import {provideRestLayoutRelations} from '@anglr/dynamic/rest-components';
import {LayoutComponentMetadata, LAYOUT_METADATA_STORAGE, LayoutComponentRendererSADirective} from '@anglr/dynamic/layout';
import {RelationsManager, RELATIONS_METADATA_STORAGE} from '@anglr/dynamic/relations';
import {MetadataStorage} from '@anglr/dynamic';
import {RelationsNodeMetadata} from '@anglr/dynamic/relations-editor';
import {AuthorizationModule} from '@anglr/authentication';
import {nameof} from '@jscrpt/common';

import {LayoutRelationsMetadata} from '../../misc/interfaces';
import {StoreDataService} from '../../services/storeData';
import {createStoreDataServiceFactory} from '../../misc/factories';
import {DynamicRouteData} from '../../services/dynamicRoutes';

/**
 * Component used displaying dynamic content pages
 */
@Component(
{
    selector: 'dynamic-content-view',
    templateUrl: 'dynamicContent.component.html',
    // styleUrls: ['dynamicContent.component.scss'],
    standalone: true,
    imports:
    [
        RouterModule,
        AuthorizationModule,
        LayoutComponentRendererSADirective,
    ],
    providers:
    [
        <FactoryProvider>
        {
            provide: LAYOUT_METADATA_STORAGE,
            useFactory: (store: StoreDataService<LayoutRelationsMetadata>) => new MetadataStorage<LayoutComponentMetadata>(id => store.getData(id)?.layout ?? null),
            deps: [StoreDataService]
        },
        <FactoryProvider>
        {
            provide: RELATIONS_METADATA_STORAGE,
            useFactory: (store: StoreDataService<LayoutRelationsMetadata>) => new MetadataStorage<RelationsNodeMetadata[]>(id => store.getData(id)?.relations ?? null),
            deps: [StoreDataService]
        },
        provideLayoutRelationsCustomComponents(),
        provideCssLayoutRelations(),
        provideTinyMceLayoutRelations(),
        provideHandlebarsLayoutRelations(),
        provideRestLayoutRelations(),
        createStoreDataServiceFactory('DYNAMIC_CONTENT_DATA'),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicContentSAComponent implements OnInit
{
    //######################### protected properties - template bindings #########################

    /**
     * Current template that is being displayed
     */
    protected template: string|undefined|null;

    /**
     * Current metadata
     */
    protected metadata: LayoutComponentMetadata|null = null;

    //######################### constructor #########################
    constructor(private _route: ActivatedRoute,
                private _store: StoreDataService<LayoutRelationsMetadata>,
                private _relationsManager: RelationsManager,)
    {
    }

    //######################### public methods - implementation of OnInit #########################
    
    /**
     * Initialize component
     */
    public ngOnInit(): void
    {
        this._route.data.subscribe(data =>
        {
            this.template = data[nameof<DynamicRouteData>('template')];

            if(this.template)
            {
                const metadata = this._store.getData(this.template); 
                this.metadata = metadata?.layout ?? null;
                this._relationsManager.setRelations(metadata?.relations ?? []);
            }
        });
    }
}