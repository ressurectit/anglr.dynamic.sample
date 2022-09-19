import {inject, Injectable} from '@angular/core';
import {PermanentStorage, PERMANENT_STORAGE} from '@anglr/common';
import {UserIdentity, AccessToken} from '@anglr/authentication';
import {Dictionary} from '@jscrpt/common';
import {Observable} from 'rxjs';

import permissions from '../../../../config/permissions.json';

const USER_DATA = 'USER_DATA';

/**
 * Service used to access user account information
 */
@Injectable({providedIn: 'root'})
export class AccountService
{
    //######################### private fields #########################

    /**
     * Computed permissions for roles
     */
    private _permissions: Dictionary<string[]>|undefined;

    /**
     * Storage to be used for storing user data
     */
    private _storage: PermanentStorage = inject(PERMANENT_STORAGE);

    /**
     * Current user identity
     */
    private _identity: UserIdentity|null = null;

    //######################### private properties #########################

    /**
     * Gets computed permissions for roles
     */
    private get permissions(): Dictionary<string[]>
    {
        return this._permissions ?? (this._permissions = this._computePermissionsForRoles());
    }

    //######################### public methods - implementation of AuthenticationServiceOptions #########################

    /**
     * Method logs user into system
     * @param  {AccessToken} accessToken Access token used for authentication
     */
    public login(accessToken: AccessToken): Observable<void>
    {
        return new Observable(observer =>
        {
            if(accessToken.userName == 'admin' && accessToken.password == 'admin')
            {
                const privileges = this._roles2privileges(['ADMIN']);

                this._identity =
                {
                    isAuthenticated: true,
                    userName: 'admin',
                    firstName: 'admin',
                    surname: '',
                    permissions: privileges.concat(['authenticated']),
                    additionalInfo: null,
                };
            }
            else if(accessToken.userName == 'test' && accessToken.password == 'test')
            {
                const privileges = this._roles2privileges(['USER']);

                this._identity =
                {
                    isAuthenticated: true,
                    userName: 'user',
                    firstName: 'user',
                    surname: '',
                    permissions: privileges.concat(['authenticated']),
                    additionalInfo: null,
                };
            }
            else
            {
                this._identity = null;

                observer.error(() => new Error('Failed to login'));
                observer.complete();

                return;
            }

            if(accessToken.rememberMe && this._identity)
            {
                this._storage.set(USER_DATA, this._identity);
            }

            observer.next();
            observer.complete();
        });
    }

    /**
     * Methods logs out user out of system
     */
    public logout(): Observable<void>
    {
        return new Observable(observer =>
        {
            this._storage.remove(USER_DATA);
            this._identity = null;

            observer.next();
            observer.complete();
        });
    }

    /**
     * Gets information about user
     */
    public getUserIdentity(): Observable<UserIdentity>
    {
        return new Observable(observer =>
        {
            this._identity ??= this._storage.get<UserIdentity>(USER_DATA);

            observer.next(this._identity ??
            {
                isAuthenticated: false,
                userName: '',
                permissions: [],
                firstName: '',
                surname: ''
            });

            observer.complete();
        });
    }

    //######################### private methods #########################

    /**
     * Gets array of permissions for provided roles
     * @param roles Array of roles to be transformed to permissions
     */
    private _roles2privileges(roles: string[]): string[]
    {
        const perms: {[permission: string]: boolean} = {};

        (roles ?? []).forEach(role => (this.permissions[role] ?? []).forEach(permission => perms[permission] = true));

        return Object.keys(perms);
    }

    /**
     * Computes permissions for roles
     */
    private _computePermissionsForRoles(): Dictionary<string[]>
    {
        const computedPermissions: Dictionary<string[]> = {};
        const permissionsDict = permissions as unknown as Dictionary<string[]>;

        Object.keys(permissionsDict).forEach(permission =>
        {
            const roles = permissionsDict[permission];

            if(Array.isArray(roles))
            {
                roles.forEach(role =>
                {
                    computedPermissions[role] ??= [];
                    computedPermissions[role].push(permission);
                });
            }
        });

        return computedPermissions;
    }
}