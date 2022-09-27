import {Type} from '@angular/core';
import {RelationsEditorMetadataDescriptor, RelationsEditorMetadataInfo, RelationsNode} from '@anglr/dynamic/relations-editor';

import {FormBlockNodeSAComponent} from '../node/formBlockNode.component';

/**
 * Form block relations metadata
 */
export class FormBlockRelationsEditorMetadata implements RelationsEditorMetadataDescriptor
{
    //######################### public properties - implementation of RelationsEditorMetadataDescriptor #########################

    /**
     * @inheritdoc
     */
    public metaInfo?: RelationsEditorMetadataInfo =
    {
        name: 'Form block',
        description: 'Represents form with its inputs outputs',
        group: 'Layout',
    };

    /**
     * @inheritdoc
     */
    public nodeDefinition: Type<RelationsNode> = FormBlockNodeSAComponent;

    //######################### constructor #########################
    constructor()
    {
        Object.freeze(this);
    }
}