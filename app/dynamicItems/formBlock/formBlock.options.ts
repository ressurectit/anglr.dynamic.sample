import {LayoutComponentMetadata} from '@anglr/dynamic/layout';

/**
 * Options for form block component
 */
export interface FormBlockComponentOptions
{
    /**
     * Metadata for component displayed as content of form block
     */
    content: LayoutComponentMetadata|undefined|null;
}