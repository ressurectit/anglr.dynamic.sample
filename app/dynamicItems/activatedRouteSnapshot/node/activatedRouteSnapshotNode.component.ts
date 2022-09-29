import {Component, ChangeDetectionStrategy} from '@angular/core';
import {RelationsNode, RelationsNodeBase, RelationsNodeHeaderSAComponent, RelationNodeOutputSAComponent} from '@anglr/dynamic/relations-editor';

import {ActivatedRouteSnapshotRelationsOptions} from '../activatedRouteSnapshot.options';

/**
 * Relations node component for activated route snapshot
 */
@Component(
{
    selector: 'activated-route-snapshot-node',
    templateUrl: 'activatedRouteSnapshotNode.component.html',
    standalone: true,
    imports:
    [
        RelationsNodeHeaderSAComponent,
        RelationNodeOutputSAComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivatedRouteSnapshotNodeSAComponent extends RelationsNodeBase<ActivatedRouteSnapshotRelationsOptions> implements RelationsNode<ActivatedRouteSnapshotRelationsOptions>
{
}