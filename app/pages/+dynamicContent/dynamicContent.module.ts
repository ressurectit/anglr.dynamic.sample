import {NgModule} from '@angular/core';
import {GoBackModule} from '@anglr/common';
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
        GoBackModule,
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