import {Component, ChangeDetectionStrategy} from '@angular/core';
import {RelationsNode, RelationsNodeBase, RelationNodeOutputSAComponent, RelationsNodeHeaderSAComponent} from '@anglr/dynamic/relations-editor';

import {FilterParameterRelationsOptions} from '../filterParameter.options';

/**
 * Relations node component for filter parameter
 */
@Component(
{
    selector: 'filter-parameter-node',
    templateUrl: 'filterParameterNode.component.html',
    standalone: true,
    imports:
    [
        RelationsNodeHeaderSAComponent,
        RelationNodeOutputSAComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterParameterNodeSAComponent extends RelationsNodeBase<FilterParameterRelationsOptions> implements RelationsNode<FilterParameterRelationsOptions>
{
}