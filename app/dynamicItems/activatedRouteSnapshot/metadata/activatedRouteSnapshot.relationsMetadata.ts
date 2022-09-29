import {Type} from '@angular/core';
import {RelationsEditorMetadataDescriptor, RelationsEditorMetadataInfo, RelationsNode} from '@anglr/dynamic/relations-editor';

import {ActivatedRouteSnapshotNodeSAComponent} from '../node/activatedRouteSnapshotNode.component';

/**
 * Activated route snapshot relations metadata
 */
export class ActivatedRouteSnapshotRelationsEditorMetadata implements RelationsEditorMetadataDescriptor
{
    //######################### public properties - implementation of RelationsEditorMetadataDescriptor #########################

    /**
     * @inheritdoc
     */
    public metaInfo?: RelationsEditorMetadataInfo =
    {
        name: 'Activated route snapshot',
        description: 'Information about current route in data resolver',
        group: 'Navigation',
    };

    /**
     * @inheritdoc
     */
    public nodeDefinition: Type<RelationsNode> = ActivatedRouteSnapshotNodeSAComponent;

    //######################### constructor #########################
    constructor()
    {
        Object.freeze(this);
    }
}