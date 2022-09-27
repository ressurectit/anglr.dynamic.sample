import {LayoutComponentMetadata} from '@anglr/dynamic/layout';
import {mapValuesToThis} from '@jscrpt/common';

import {FormBlockComponentOptions} from '../formBlock.options';

/**
 * Grid table model for properties editor
 */
export class FormBlockModel implements FormBlockComponentOptions
{
    //######################### public properties #########################

    /**
     * @inheritdoc
     */
    public content: LayoutComponentMetadata|undefined|null;
    
    //######################### constructor #########################
    constructor(value: FormBlockComponentOptions|undefined|null)
    {
        mapValuesToThis.bind(this)(value);
    }
}