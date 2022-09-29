import {ComponentStylingModel, ComponentStylingPropertiesControlComponent, LayoutEditorMetadataDescriptor, LayoutEditorMetadataInfo} from '@anglr/dynamic/layout-editor';

import {SampleRootBlockComponentOptions} from '../sampleRootBlock.options';

/**
 * Sample root block layout metadata
 */
export class SampleRootBlockLayoutEditorMetadata implements LayoutEditorMetadataDescriptor<SampleRootBlockComponentOptions>
{
    //######################### public properties - implementation of LayoutEditorMetadataDescriptor #########################

    /**
     * @inheritdoc
     */
    public metaInfo?: LayoutEditorMetadataInfo<SampleRootBlockComponentOptions> =
    {
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
            ],
        },
    };

    //######################### constructor #########################
    constructor()
    {
        Object.freeze(this);
    }
}