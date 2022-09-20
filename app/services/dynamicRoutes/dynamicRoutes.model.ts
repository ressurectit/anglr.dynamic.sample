import {mapValuesToThis} from '@jscrpt/common';

import {DynamicRoute} from './dynamicRoutes.interface';

/**
 * Form model for dynamic route
 */
export class DynamicRouteModel implements DynamicRoute
{
    //######################### public properties #########################

    /**
     * Path that is being used for route
     */
    public path: string = '';

    /**
     * Name of permission that is required for displaying page
     */
    public permission: string|undefined|null = null;

    /**
     * Indication whether use data resolver
     */
    public withResolver: boolean = false;

    /**
     * Name of relations that are used for obtaining data in relations
     */
    public resolverRelations: string|undefined|null = null;

    /**
     * Name of layout relations template that represents page contents
     */
    public template: string = '';

    //######################### constructor #########################
    constructor(value: DynamicRoute|undefined|null)
    {
        mapValuesToThis.bind(this)(value);
    }
}