import {Type} from '@angular/core';
import {RelationsEditorMetadataDescriptor, RelationsEditorMetadataInfo, RelationsNode} from '@anglr/dynamic/relations-editor';

import {FilterParameterNodeSAComponent} from '../node/filterParameterNode.component';

/**
 * Filter parameter relations metadata
 */
export class FilterParameterRelationsEditorMetadata implements RelationsEditorMetadataDescriptor
{
    //######################### public properties - implementation of RelationsEditorMetadataDescriptor #########################

    /**
     * @inheritdoc
     */
    public metaInfo?: RelationsEditorMetadataInfo =
    {
        name: 'Filter parameter',
        description: 'Allows obtaining filter parameter from url',
        group: 'Navigation',
    };

    /**
     * @inheritdoc
     */
    public nodeDefinition: Type<RelationsNode> = FilterParameterNodeSAComponent;

    //######################### constructor #########################
    constructor()
    {
        Object.freeze(this);
    }
}