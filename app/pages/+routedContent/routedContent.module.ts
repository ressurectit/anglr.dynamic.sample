import {NgModule} from '@angular/core';
import {ModuleRoutes} from '@anglr/common/router';

import {components} from './routedContent.routes';

/**
 * Module for routed content application pages
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
export class RoutedContentModule
{
}