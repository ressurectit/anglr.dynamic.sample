import {LayoutComponentMetadata} from '@anglr/dynamic/layout';
import {ComponentStylingModel, ComponentStylingPropertiesControlComponent, LayoutEditorMetadataDescriptor, LayoutEditorMetadataInfo} from '@anglr/dynamic/layout-editor';
import {Action, Func} from '@jscrpt/common';

import {FormBlockComponentOptions} from '../formBlock.options';

/**
 * Form block layout metadata
 */
export class FormBlockLayoutEditorMetadata implements LayoutEditorMetadataDescriptor<FormBlockComponentOptions>
{
    //######################### public properties - implementation of LayoutEditorMetadataDescriptor #########################

    /**
     * @inheritdoc
     */
    public metaInfo?: LayoutEditorMetadataInfo<FormBlockComponentOptions> =
    {
        name: 'Form block',
        description: 'Represents form with its inputs outputs',
        group: 'Layout',
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

    /**
     * @inheritdoc
     */
    public addDescendant?: Action<[LayoutComponentMetadata, FormBlockComponentOptions, number]> = (metadata, options) =>
    {
        options.content = metadata;
    };

    /**
     * @inheritdoc
     */
    public canDropMetadata?: Func<boolean, [FormBlockComponentOptions|undefined|null]> = options => !options?.content;

    /**
     * @inheritdoc
     */
    public getChildrenContainer?: Func<Element|null, [Element]> = element => element.querySelector('form');

    /**
     * @inheritdoc
     */
    public removeDescendant?: Action<[string, FormBlockComponentOptions]> = (_, options) =>
    {
        options.content = null;
    }

    //######################### constructor #########################
    constructor()
    {
        Object.freeze(this);
    }
}