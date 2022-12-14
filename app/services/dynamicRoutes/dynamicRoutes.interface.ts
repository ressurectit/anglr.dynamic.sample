/**
 * Dynamic route data
 */
export interface DynamicRouteData
{
    /**
     * Name of layout relations template that represents page contents
     */
    template: string;

    /**
     * Name of relations that are used for obtaining data in relations
     */
    resolverRelations: string|undefined|null;

    /**
     * Name of permission that is required for displaying page
     */
    permission: string|undefined|null;
}

/**
 * Dynamic route definition
 */
export interface DynamicRoute
{
    /**
     * Path to module containing route
     */
    module: string;

    /**
     * Path that is being used for route
     */
    path: string;

    /**
     * Name of permission that is required for displaying page
     */
    permission: string|undefined|null;

    /**
     * Indication whether use data resolver
     */
    withResolver: boolean;

    /**
     * Name of relations that are used for obtaining data in relations
     */
    resolverRelations: string|undefined|null;

    /**
     * Name of layout relations template that represents page contents
     */
    template: string;
}