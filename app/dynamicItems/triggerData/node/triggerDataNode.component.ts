import {Component, ChangeDetectionStrategy} from '@angular/core';
import {RelationsNode, RelationsNodeBase, RelationNodeInputSAComponent, RelationNodeOutputSAComponent, RelationsNodeHeaderSAComponent} from '@anglr/dynamic/relations-editor';

import {TriggerDataRelationsOptions} from '../triggerData.options';

/**
 * Relations node component for trigger data
 */
@Component(
{
    selector: 'trigger-data-node',
    templateUrl: 'triggerDataNode.component.html',
    standalone: true,
    imports:
    [
        RelationsNodeHeaderSAComponent,
        RelationNodeInputSAComponent,
        RelationNodeOutputSAComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TriggerDataNodeSAComponent extends RelationsNodeBase<TriggerDataRelationsOptions> implements RelationsNode<TriggerDataRelationsOptions>
{
}