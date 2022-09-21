import {NgModule} from '@angular/core';
import {ModuleRoutes} from '@anglr/common/router';
import {DynamicLayoutRelationsEditorModule} from '@anglr/dynamic/layout-relations';

import {components} from './dynamicContent.routes';

/**
 * Module for dynamic content application pages
 */
@NgModule(
{
    imports:
    [
        DynamicLayoutRelationsEditorModule,
    ],
    declarations:
    [
        ...components
    ]
})
@ModuleRoutes(components)
export class DynamicContentModule
{
}