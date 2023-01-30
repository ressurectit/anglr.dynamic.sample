import {Type} from '@angular/core';
import {RelationsEditorMetadataDescriptor, RelationsEditorMetadataInfo, RelationsNode} from '@anglr/dynamic/relations-editor';

import {FilterActionsNodeSAComponent} from '../node/filterActionsNode.component';

/**
 * Filter actions relations metadata
 */
export class FilterActionsRelationsEditorMetadata implements RelationsEditorMetadataDescriptor
{
    //######################### public properties - implementation of RelationsEditorMetadataDescriptor #########################

    /**
     * @inheritdoc
     */
    public metaInfo?: RelationsEditorMetadataInfo =
    {
        name: 'Filter actions',
        description: 'Basic actions for filter form',
        group: 'Form',
    };

    /**
     * @inheritdoc
     */
    public nodeDefinition: Type<RelationsNode> = FilterActionsNodeSAComponent;

    //######################### constructor #########################
    constructor()
    {
        Object.freeze(this);
    }
}