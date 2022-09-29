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
     * Css class applied to link (anchor) element itself
     */
    linkCssClass: string|undefined|null;

    /**
     * Link address to be routed to
     */
    link: string|undefined|null;
}

/**
 * Options for router link relations
 */
export interface RouterLinkRelationsOptions
{
}