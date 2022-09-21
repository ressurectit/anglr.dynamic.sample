import {Component, ChangeDetectionStrategy, FactoryProvider, ClassProvider, ExistingProvider} from '@angular/core';
import {ComponentRouteAuthorized, Authorize} from '@anglr/authentication';
import {EditorHotkeys, MetadataStorage, PackageManager} from '@anglr/dynamic';
import {LayoutComponentMetadata, LAYOUT_METADATA_STORAGE} from '@anglr/dynamic/layout';
import {provideLayoutEditor, REFRESH_PALETTE_OBSERVABLES} from '@anglr/dynamic/layout-editor';
import {provideFormLayoutEditor} from '@anglr/dynamic/form';
import {provideCssLayoutEditor} from '@anglr/dynamic/css-components';
import {provideTinyMceLayoutEditor} from '@anglr/dynamic/tinymce-components';
import {provideHandlebarsLayoutEditor} from '@anglr/dynamic/handlebars-components';
import {CustomComponentsRegister, provideEditorLayoutCustomComponents} from '@anglr/dynamic/layout-relations';

import {StoreDataService} from '../../../services/storeData';
import {LayoutRelationsMetadata} from '../../../misc/interfaces';
import {DemoCustomComponentsRegister} from '../../../services/demoCustomComponentsRegister';
import {DemoLayoutPackageManager} from '../../../services/demoLayoutPackageManager/demoLayoutPackageManager.service';

/**
 * Component used for displaying layout editor
 */
@Component(
{
    selector: 'layout-editor-view',
    templateUrl: 'layout.component.html',
    // styleUrls: ['layout.component.scss'],
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
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRouteAuthorized({path: 'layout'})
@Authorize('layoutEditor-page')
export class LayoutComponent
{
}