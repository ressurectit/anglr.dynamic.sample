import {ComponentStylingModel, ComponentStylingPropertiesControlComponent, LayoutEditorMetadataDescriptor, LayoutEditorMetadataInfo} from '@anglr/dynamic/layout-editor';

import {GridTableComponentOptions} from '../gridTable.options';

/**
 * Grid table layout metadata
 */
export class GridTableLayoutEditorMetadata implements LayoutEditorMetadataDescriptor<GridTableComponentOptions>
{
    //######################### public properties - implementation of LayoutEditorMetadataDescriptor #########################

    /**
     * @inheritdoc
     */
    public metaInfo?: LayoutEditorMetadataInfo<GridTableComponentOptions> =
    {
        name: 'Grid table',
        description: 'Grid table for displaying data',
        group: 'Data',
        optionsMetadata:
        {
            propertiesMetadata:
            [
                {
                    modelType: ComponentStylingModel,
                    propertiesControls: 
                    [
                        ComponentStylingPropertiesControlComponent,
                    ],
                },
            ]
        },
    };

    //######################### constructor #########################
    constructor()
    {
        Object.freeze(this);
    }
}