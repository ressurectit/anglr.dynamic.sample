import {Component, ChangeDetectionStrategy} from '@angular/core';
import {RelationsNode, RelationsNodeBase, RelationNodeOutputSAComponent, RelationsNodeHeaderSAComponent, RelationNodeInputSAComponent} from '@anglr/dynamic/relations-editor';

import {DropEmptyRelationsOptions} from '../dropEmpty.options';

/**
 * Relations node component for drop empty
 */
@Component(
{
    selector: 'drop-empty-node',
    templateUrl: 'dropEmptyNode.component.html',
    standalone: true,
    imports:
    [
        RelationsNodeHeaderSAComponent,
        RelationNodeInputSAComponent,
        RelationNodeOutputSAComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropEmptyNodeSAComponent extends RelationsNodeBase<DropEmptyRelationsOptions> implements RelationsNode<DropEmptyRelationsOptions>
{
}