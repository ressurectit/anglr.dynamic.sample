import {Type} from '@angular/core';
import {RelationsEditorMetadataDescriptor, RelationsEditorMetadataInfo, RelationsNode} from '@anglr/dynamic/relations-editor';

import {DropEmptyNodeSAComponent} from '../node/dropEmptyNode.component';

/**
 * Drop empty relations metadata
 */
export class DropEmptyRelationsEditorMetadata implements RelationsEditorMetadataDescriptor
{
    //######################### public properties - implementation of RelationsEditorMetadataDescriptor #########################

    /**
     * @inheritdoc
     */
    public metaInfo?: RelationsEditorMetadataInfo =
    {
        name: 'Drop empty',
        description: 'Drops empty properties',
        group: 'Data',
    };

    /**
     * @inheritdoc
     */
    public nodeDefinition: Type<RelationsNode> = DropEmptyNodeSAComponent;

    //######################### constructor #########################
    constructor()
    {
        Object.freeze(this);
    }
}