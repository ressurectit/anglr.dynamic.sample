import {Component, ChangeDetectionStrategy} from '@angular/core';
import {RelationsNode, RelationsNodeBase, RelationNodeInputSAComponent, RelationsNodeHeaderSAComponent} from '@anglr/dynamic/relations-editor';

/**
 * Relations node component for grid table
 */
@Component(
{
    selector: 'grid-table-node',
    templateUrl: 'gridTableNode.component.html',
    standalone: true,
    imports:
    [
        RelationsNodeHeaderSAComponent,
        RelationNodeInputSAComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridTableNodeSAComponent extends RelationsNodeBase implements RelationsNode
{
}