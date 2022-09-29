import {Component, ChangeDetectionStrategy} from '@angular/core';
import {RelationsNode, RelationsNodeBase, RelationNodeInputSAComponent, RelationsNodeHeaderSAComponent} from '@anglr/dynamic/relations-editor';

import {DynamicDataResolverRelationsOptions} from '../dynamicDataResolver.options';

/**
 * Relations node component for dynamic data resolver
 */
@Component(
{
    selector: 'dynamic-data-resolver-node',
    templateUrl: 'dynamicDataResolverNode.component.html',
    standalone: true,
    imports:
    [
        RelationsNodeHeaderSAComponent,
        RelationNodeInputSAComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicDataResolverNodeSAComponent extends RelationsNodeBase<DynamicDataResolverRelationsOptions> implements RelationsNode<DynamicDataResolverRelationsOptions>
{
}