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
    @LayoutPropertyName('Link css class')
    @LayoutPropertyDescription('Css class applied to link (anchor) element itself')
    @LayoutPropertyType<DefaultKnownPropertyTypes>('inputString')
    public linkCssClass: string|undefined|null = null;

    /**
     * @inheritdoc
     */
    @LayoutPropertyName('Router link')
    @LayoutPropertyDescription('Link address to be routed to')
    @LayoutPropertyType<DefaultKnownPropertyTypes>('inputString')
    public link: string|undefined|null = null;
    
    //######################### constructor #########################
    constructor(value: RouterLinkComponentOptions|undefined|null)
    {
        mapValuesToThis.bind(this)(value);
    }
}