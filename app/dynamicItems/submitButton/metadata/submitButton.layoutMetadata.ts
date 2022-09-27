import {ComponentStylingModel, ComponentStylingPropertiesControlComponent, genericPropertiesControlFor, LayoutEditorMetadataDescriptor, LayoutEditorMetadataInfo} from '@anglr/dynamic/layout-editor';

import {SubmitButtonComponentOptions} from '../submitButton.options';
import {SubmitButtonModel} from './submitButton.model';

/**
 * Submit button layout metadata
 */
export class SubmitButtonLayoutEditorMetadata implements LayoutEditorMetadataDescriptor<SubmitButtonComponentOptions>
{
    //######################### public properties - implementation of LayoutEditorMetadataDescriptor #########################

    /**
     * @inheritdoc
     */
    public metaInfo?: LayoutEditorMetadataInfo<SubmitButtonComponentOptions> =
    {
        name: 'Submit button',
        description: 'Form submit button',
        group: 'Buttons',
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
                {
                    modelType: SubmitButtonModel,
                    propertiesControls: 
                    [
                        genericPropertiesControlFor<SubmitButtonModel>(['buttonCssClass', 'text', 'disabled']),
                    ],
                },
            ],
        },
        defaultOptions:
        {
            text: 'Submit',
            disabled: false,
            buttonCssClass: 'btn btn-primary',
        }
    };

    //######################### constructor #########################
    constructor()
    {
        Object.freeze(this);
    }
}