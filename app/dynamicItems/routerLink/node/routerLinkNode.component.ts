import {Component, ChangeDetectionStrategy} from '@angular/core';
import {RelationsNode, RelationsNodeBase, RelationNodeInputSAComponent, RelationsNodeHeaderSAComponent} from '@anglr/dynamic/relations-editor';

import {RouterLinkRelationsOptions} from '../routerLink.options';

/**
 * Relations node component for submit button
 */
@Component(
{
    selector: 'router-link-node',
    templateUrl: 'routerLinkNode.component.html',
    standalone: true,
    imports:
    [
        RelationsNodeHeaderSAComponent,
        RelationNodeInputSAComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouterLinkNodeSAComponent extends RelationsNodeBase<RouterLinkRelationsOptions> implements RelationsNode<RouterLinkRelationsOptions>
{
}