import {mapValuesToThis} from '@jscrpt/common';

import {GridTableComponentOptions} from '../gridTable.options';

/**
 * Grid table model for properties editor
 */
export class GridTableModel implements GridTableComponentOptions
{
    //######################### constructor #########################
    constructor(value: GridTableComponentOptions|undefined|null)
    {
        mapValuesToThis.bind(this)(value);
    }
}