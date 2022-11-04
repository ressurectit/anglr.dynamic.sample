import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ModuleRoutes} from '@anglr/common/router';
import {DynamicLayoutRelationsEditorModule} from '@anglr/dynamic/layout-relations';
import {GridModule} from '@anglr/grid';

import {components} from './customComponents.routes';
import {EditorControlsSAComponent} from '../../components';

/**
 * Module for dynamic custom components
 */
@NgModule(
{
    imports:
    [
        DynamicLayoutRelationsEditorModule,
        EditorControlsSAComponent,
        GridModule,
        RouterModule,
    ],
    declarations:
    [
        ...components
    ]
})
@ModuleRoutes(components)
export class CustomComponentsModule
{
}