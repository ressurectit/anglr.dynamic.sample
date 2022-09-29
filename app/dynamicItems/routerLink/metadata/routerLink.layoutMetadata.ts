import {ComponentStylingModel, ComponentStylingPropertiesControlComponent, genericPropertiesControlFor, LayoutEditorMetadataDescriptor, LayoutEditorMetadataInfo} from '@anglr/dynamic/layout-editor';

import {RouterLinkComponentOptions} from '../routerLink.options';
import {RouterLinkModel} from './routerLink.model';

/**
 * Router link layout metadata
 */
export class RouterLinkLayoutEditorMetadata implements LayoutEditorMetadataDescriptor<RouterLinkComponentOptions>
{
    //######################### public properties - implementation of LayoutEditorMetadataDescriptor #########################

    /**
     * @inheritdoc
     */
    public metaInfo?: LayoutEditorMetadataInfo<RouterLinkComponentOptions> =
    {
        name: 'Router link',
        description: 'Represents navigation link in application',
        group: 'Navigation',
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
                    modelType: RouterLinkModel,
                    propertiesControls: 
                    [
                        genericPropertiesControlFor<RouterLinkModel>(['linkCssClass', 'text', 'disabled']),
                    ],
                },
            ],
        },
        defaultOptions:
        {
            text: 'Link',
            disabled: false,
        }
    };

    //######################### constructor #########################
    constructor()
    {
        Object.freeze(this);
    }
}