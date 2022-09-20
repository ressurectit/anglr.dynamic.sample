import {NgModule} from '@angular/core';
import {ModuleRoutes} from '@anglr/common/router';

import {components} from './routedContent.routes';
import {DisplayingFeatureModule, FormsFeatureModule, GridFeatureModule} from '../../modules';

/**
 * Module for routed content application pages
 */
@NgModule(
{
    imports:
    [
        DisplayingFeatureModule,
        FormsFeatureModule,
        GridFeatureModule,
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