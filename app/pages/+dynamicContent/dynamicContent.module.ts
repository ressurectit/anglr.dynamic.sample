import {NgModule} from '@angular/core';
import {GoBackModule} from '@anglr/common';
import {ModuleRoutes} from '@anglr/common/router';
import {DebugDataCopyClickModule} from '@anglr/common/material';
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
        DebugDataCopyClickModule,
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