import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent, LayoutComponentBase} from '@anglr/dynamic/layout';
import {LayoutEditorMetadata} from '@anglr/dynamic/layout-editor';
import {DynamicOutput, RelationsComponent} from '@anglr/dynamic/relations';
import {RelationsEditorMetadata, VoidObject} from '@anglr/dynamic/relations-editor';
import {HostDisplayBlockStyle} from '@anglr/common';
import {PromiseOr} from '@jscrpt/common';

import {RouterLinkComponentOptions} from './routerLink.options';
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
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@RelationsEditorMetadata(RouterLinkRelationsMetadataLoader)
@LayoutEditorMetadata(RouterLinkLayoutMetadataLoader)
export class RouterLinkSAComponent extends LayoutComponentBase<RouterLinkComponentOptions> implements LayoutComponent<RouterLinkComponentOptions>, RelationsComponent
{
    //######################### public properties - implementation of RelationsComponent #########################

    /**
     * @inheritdoc
     */
    public relationsOptions: any;

    //######################### public properties - inputs #########################

    /**
     * Indication whether is button disabled
     */
    @Input()
    public disabled: boolean = false;

    //######################### public properties - dynamic outputs #########################

    /**
     * Output used for emitting new void object value when clicked
     */
    @DynamicOutput()
    public click: VoidObject = {};

    //######################### protected - overrides #########################

    /**
     * @inheritdoc
     */
    protected override onOptionsSet(): PromiseOr<void>
    {
        this.disabled = this.options?.disabled ?? false;
    }
}