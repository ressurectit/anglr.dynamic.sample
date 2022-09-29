import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {LayoutComponent, LayoutComponentBase} from '@anglr/dynamic/layout';
import {LayoutEditorMetadata} from '@anglr/dynamic/layout-editor';
import {RelationsComponent} from '@anglr/dynamic/relations';
import {RelationsEditorMetadata} from '@anglr/dynamic/relations-editor';
import {HostDisplayBlockStyle} from '@anglr/common';

import {RouterLinkComponentOptions, RouterLinkRelationsOptions} from './routerLink.options';
import {RouterLinkLayoutMetadataLoader, RouterLinkRelationsMetadataLoader} from './routerLink.metadata';

/**
 * Component used for displaying router link
 */
@Component(
{
    selector: 'router-link',
    templateUrl: 'routerLink.component.html',
    styles: [HostDisplayBlockStyle],
    standalone: true,
    imports:
    [
        CommonModule,
        RouterModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@RelationsEditorMetadata(RouterLinkRelationsMetadataLoader)
@LayoutEditorMetadata(RouterLinkLayoutMetadataLoader)
export class RouterLinkSAComponent extends LayoutComponentBase<RouterLinkComponentOptions> implements LayoutComponent<RouterLinkComponentOptions>, RelationsComponent<RouterLinkRelationsOptions>
{
    //######################### public properties - implementation of RelationsComponent #########################

    /**
     * @inheritdoc
     */
    public relationsOptions: RouterLinkRelationsOptions|undefined|null;

    //######################### public properties - inputs #########################

    /**
     * Argument that is passed to route
     */
    @Input()
    public argument: any;
}