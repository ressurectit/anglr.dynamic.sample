import {DefaultKnownPropertyTypes, LayoutPropertyDescription, LayoutPropertyName, LayoutPropertyType} from '@anglr/dynamic/layout-editor';
import {mapValuesToThis} from '@jscrpt/common';

import {RouterLinkComponentOptions} from '../routerLink.options';

/**
 * Router link model for properties editor
 */
export class RouterLinkModel implements RouterLinkComponentOptions
{
    //######################### public properties #########################

    /**
     * @inheritdoc
     */
    @LayoutPropertyName('Text')
    @LayoutPropertyDescription('Text to be displayed in link')
    @LayoutPropertyType<DefaultKnownPropertyTypes>('inputString')
    public text: string|undefined|null = null;

    /**
     * @inheritdoc
     */
    @LayoutPropertyName('Disabled')
    @LayoutPropertyDescription('Indication whether is link disabled')
    @LayoutPropertyType<DefaultKnownPropertyTypes>('inputBoolean')
    public disabled: boolean|undefined|null = false;

    /**
     * @inheritdoc
     */
    @LayoutPropertyName('Link css class')
    @LayoutPropertyDescription('Css class applied to link (anchor) element itself')
    @LayoutPropertyType<DefaultKnownPropertyTypes>('inputString')
    public linkCssClass: string|undefined|null = null;
    
    //######################### constructor #########################
    constructor(value: RouterLinkComponentOptions|undefined|null)
    {
        mapValuesToThis.bind(this)(value);
    }
}