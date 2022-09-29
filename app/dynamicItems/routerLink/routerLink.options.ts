/**
 * Options for router link component
 */
export interface RouterLinkComponentOptions
{
    //######################### properties #########################

    /**
     * Text to be displayed in link
     */
    text: string|undefined|null;

    /**
     * Indication whether is link disabled
     */
    disabled: boolean|undefined|null;

    /**
     * Css class applied to link (anchor) element itself
     */
    linkCssClass: string|undefined|null;
}

/**
 * Options for router link relations
 */
export interface RouterLinkRelationsOptions
{
}