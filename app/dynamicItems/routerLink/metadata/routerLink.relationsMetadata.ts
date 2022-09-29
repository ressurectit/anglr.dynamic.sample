import {Type} from '@angular/core';
import {RelationsEditorMetadataDescriptor, RelationsEditorMetadataInfo, RelationsNode} from '@anglr/dynamic/relations-editor';

import {RouterLinkNodeSAComponent} from '../node/routerLinkNode.component';

/**
 * Router link relations metadata
 */
export class RouterLinkRelationsEditorMetadata implements RelationsEditorMetadataDescriptor
{
    //######################### public properties - implementation of RelationsEditorMetadataDescriptor #########################

    /**
     * @inheritdoc
     */
    public metaInfo?: RelationsEditorMetadataInfo =
    {
        name: 'Router link',
        description: 'Represents navigation link in application',
        group: 'Navigation',
    };

    /**
     * @inheritdoc
     */
    public nodeDefinition: Type<RelationsNode> = RouterLinkNodeSAComponent;

    //######################### constructor #########################
    constructor()
    {
        Object.freeze(this);
    }
}