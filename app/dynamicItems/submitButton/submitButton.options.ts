/**
 * Options for submit button component
 */
export interface SubmitButtonComponentOptions
{
    //######################### properties #########################

    /**
     * Text to be displayed in button
     */
    text: string|undefined|null;

    /**
     * Indication whether is button disabled
     */
    disabled: boolean|undefined|null;

    /**
     * Css class applied to button element itself
     */
    buttonCssClass: string|undefined|null;
}