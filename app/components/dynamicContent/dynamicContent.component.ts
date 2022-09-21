import {Component, ChangeDetectionStrategy, FactoryProvider} from '@angular/core';
import {RouterModule} from '@angular/router';
import {provideLayoutRelationsCustomComponents} from '@anglr/dynamic/layout-relations';
import {provideCssLayoutRelations} from '@anglr/dynamic/css-components';
import {provideTinyMceLayoutRelations} from '@anglr/dynamic/tinymce-components';
import {provideHandlebarsLayoutRelations} from '@anglr/dynamic/handlebars-components';
import {provideRestLayoutRelations} from '@anglr/dynamic/rest-components';
import {LayoutComponentMetadata, LAYOUT_METADATA_STORAGE} from '@anglr/dynamic/layout';
import {RELATIONS_METADATA_STORAGE} from '@anglr/dynamic/relations';
import {MetadataStorage} from '@anglr/dynamic';
import {RelationsNodeMetadata} from '@anglr/dynamic/relations-editor';

import {LayoutRelationsMetadata} from '../../misc/interfaces';
import {StoreDataService} from '../../services/storeData';
import {createStoreDataServiceFactory} from '../../misc/factories';

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
export class DynamicContentSAComponent
{
}