import {mapValuesToThis} from '@jscrpt/common';

import {DynamicRoute} from './dynamicRoutes.interface';

/**
 * Form model for dynamic route
 */
export class DynamicRouteModel implements DynamicRoute
{
    //######################### public properties #########################

    /**
     * @inheritdoc
     */
    public module: string = '';

    /**
     * @inheritdoc
     */
    public path: string = '';

    /**
     * @inheritdoc
     */
    public permission: string|undefined|null = null;

    /**
     * @inheritdoc
     */
    public withResolver: boolean = false;

    /**
     * @inheritdoc
     */
    public resolverRelations: string|undefined|null = null;

    /**
     * @inheritdoc
     */
    public template: string = '';

    //######################### constructor #########################
    constructor(value: DynamicRoute|undefined|null)
    {
        mapValuesToThis.bind(this)(value);
    }
}