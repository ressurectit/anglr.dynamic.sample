import {Component, ChangeDetectionStrategy} from '@angular/core';
import {RelationsNode, RelationsNodeBase, RelationsNodeHeaderSAComponent, RelationNodeOutputSAComponent, RelationNodeInputSAComponent} from '@anglr/dynamic/relations-editor';

/**
 * Relations node component for form block
 */
@Component(
{
    selector: 'form-block-node',
    templateUrl: 'formBlockNode.component.html',
    standalone: true,
    imports:
    [
        RelationsNodeHeaderSAComponent,
        RelationNodeOutputSAComponent,
        RelationNodeInputSAComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormBlockNodeSAComponent extends RelationsNodeBase implements RelationsNode
{
}