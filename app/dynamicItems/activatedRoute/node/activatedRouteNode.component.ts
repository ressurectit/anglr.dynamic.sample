import {Component, ChangeDetectionStrategy} from '@angular/core';
import {RelationsNode, RelationsNodeBase, RelationNodeInputSAComponent, RelationNodeOutputSAComponent, RelationsNodeHeaderSAComponent} from '@anglr/dynamic/relations-editor';

import {ActivatedRouteRelationsOptions} from '../activatedRoute.options';

/**
 * Relations node component for activated route
 */
@Component(
{
    selector: 'activated-route-node',
    templateUrl: 'activatedRouteNode.component.html',
    standalone: true,
    imports:
    [
        RelationsNodeHeaderSAComponent,
        RelationNodeInputSAComponent,
        RelationNodeOutputSAComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivatedRouteNodeSAComponent extends RelationsNodeBase<ActivatedRouteRelationsOptions> implements RelationsNode<ActivatedRouteRelationsOptions>
{
}