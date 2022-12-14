import {Inject, Injectable} from '@angular/core';
import {CustomComponentsRegister} from '@anglr/dynamic/layout-relations';
import {PermanentStorage, PERMANENT_STORAGE} from '@anglr/common';
import {Observable, Subject} from 'rxjs';

const CUSTOM_COMPONENTS = 'CUSTOM_COMPONENTS';

/**
 * Sample custom components register
 */
@Injectable()
export class SampleCustomComponentsRegister extends CustomComponentsRegister
{
    //######################### private fields #########################
    
    /**
     * Used for emitting registered changes
     */
    private _registeredChange: Subject<void> = new Subject<void>();
    
    //######################### public properties #########################
    
    /**
     * Occurs when registered changes
     */
    public get registeredChange(): Observable<void>
    {
        return this._registeredChange.asObservable();
    }
    
    //######################### constructor #########################
    constructor(@Inject(PERMANENT_STORAGE) private _store: PermanentStorage)
    {
        super();
    }

    //######################### public methods #########################

    /**
     * Adds custom component by its template name
     * @param name - Name of template to be added
     */
    public addCustomComponent(name: string): void
    {
        const customComponents = this.getRegisteredComponents();
        const index = customComponents.indexOf(name);

        if(index >= 0)
        {
            return;
        }
            
        customComponents.push(name);

        this._store.set(CUSTOM_COMPONENTS, customComponents);
        this._registeredChange.next();
    }

    /**
     * Removes custom component by its template name
     * @param name - Name of template to be removed
     */
    public removeCustomComponent(name: string): void
    {
        const customComponents = this.getRegisteredComponents();
        const index = customComponents.indexOf(name);

        if(index < 0)
        {
            return;
        }
        
        customComponents.splice(index, 1);
        this._store.set(CUSTOM_COMPONENTS, customComponents);
        this._registeredChange.next();
    }

    //######################### public methods - overrides #########################

    /**
     * Gets registered components
     */
    public override getRegisteredComponents(): string[]
    {
        return this._store.get<string[]|null>(CUSTOM_COMPONENTS) ?? [];
    }
}