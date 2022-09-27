import {Type} from '@angular/core';
import {RelationsEditorMetadataDescriptor, RelationsEditorMetadataInfo, RelationsNode} from '@anglr/dynamic/relations-editor';

import {SubmitButtonNodeSAComponent} from '../node/submitButtonNode.component';

/**
 * Submit button relations metadata
 */
export class SubmitButtonRelationsEditorMetadata implements RelationsEditorMetadataDescriptor
{
    //######################### public properties - implementation of RelationsEditorMetadataDescriptor #########################

    /**
     * @inheritdoc
     */
    public metaInfo?: RelationsEditorMetadataInfo =
    {
        name: 'Submit button',
        description: 'Form submit button',
        group: 'Buttons',
    };

    /**
     * @inheritdoc
     */
    public nodeDefinition: Type<RelationsNode> = SubmitButtonNodeSAComponent;

    //######################### constructor #########################
    constructor()
    {
        Object.freeze(this);
    }
}