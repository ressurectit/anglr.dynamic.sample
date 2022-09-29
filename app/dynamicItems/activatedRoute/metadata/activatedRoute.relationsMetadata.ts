import {Type} from '@angular/core';
import {RelationsEditorMetadataDescriptor, RelationsEditorMetadataInfo, RelationsNode} from '@anglr/dynamic/relations-editor';

import {ActivatedRouteNodeSAComponent} from '../node/activatedRouteNode.component';

/**
 * Activated route relations metadata
 */
export class ActivatedRouteRelationsEditorMetadata implements RelationsEditorMetadataDescriptor
{
    //######################### public properties - implementation of RelationsEditorMetadataDescriptor #########################

    /**
     * @inheritdoc
     */
    public metaInfo?: RelationsEditorMetadataInfo =
    {
        name: 'Activated route',
        description: 'Information about current route',
        group: 'Navigation',
    };

    /**
     * @inheritdoc
     */
    public nodeDefinition: Type<RelationsNode> = ActivatedRouteNodeSAComponent;

    //######################### constructor #########################
    constructor()
    {
        Object.freeze(this);
    }
}