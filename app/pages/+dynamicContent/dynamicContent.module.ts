import {NgModule} from '@angular/core';
import {ModuleRoutes} from '@anglr/common/router';

import {components} from './dynamicContent.routes';

/**
 * Module for dynamic content application pages
 */
@NgModule(
{
    imports:
    [
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