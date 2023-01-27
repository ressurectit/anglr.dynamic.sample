import {Inject, Injectable} from '@angular/core';
import {CustomComponentConfiguration, CustomComponentsRegister} from '@anglr/dynamic/layout-relations';
import {PermanentStorage, PERMANENT_STORAGE} from '@anglr/common';
import {Dictionary} from '@jscrpt/common';
import {Observable, Subject} from 'rxjs';

export const CUSTOM_COMPONENTS = 'CUSTOM_COMPONENTS';

/**
 * Sample custom components register
 */
@Injectable()
export class SampleCustomComponentsRegister<TConfig extends CustomComponentConfiguration = CustomComponentConfiguration> extends CustomComponentsRegister
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
        const customComponentsNames = this.getRegisteredComponents();
        const index = customComponentsNames.indexOf(name);

        if(index >= 0)
        {
            return;
        }

        const customComponents = this._store.get<Dictionary<TConfig>|null>(CUSTOM_COMPONENTS) ?? {};
        customComponents[name] = {} as TConfig;

        this._store.set(CUSTOM_COMPONENTS, customComponents);
        this._registeredChange.next();
    }

    /**
     * Removes custom component by its template name
     * @param name - Name of template to be removed
     */
    public removeCustomComponent(name: string): void
    {
        const customComponentsNames = this.getRegisteredComponents();
        const index = customComponentsNames.indexOf(name);

        if(index < 0)
        {
            return;
        }

        const customComponents = this._store.get<Dictionary<TConfig>|null>(CUSTOM_COMPONENTS) ?? {};
        delete customComponents[name];

        this._store.set(CUSTOM_COMPONENTS, customComponentsNames);
        this._registeredChange.next();
    }

    //######################### public methods - overrides #########################

    /**
     * @inheritdoc
     */
    public override getRegisteredComponents(): string[]
    {
        return Object.keys(this._store.get<Dictionary<TConfig>|null>(CUSTOM_COMPONENTS) ?? {});
    }

    /**
     * @inheritdoc
     */
    public override getConfigurationForComponent(name: string): TConfig|undefined|null
    {
        const customComponents = this._store.get<Dictionary<TConfig>|null>(CUSTOM_COMPONENTS) ?? {};

        if(!customComponents[name])
        {
            return null;
        }

        return customComponents[name];
    }

    /**
     * @inheritdoc
     */
    public override setConfigurationForComponent(name: string, config: TConfig): void
    {
        const customComponents = this._store.get<Dictionary<TConfig>|null>(CUSTOM_COMPONENTS) ?? {};

        if(!customComponents[name])
        {
            return;
        }

        customComponents[name] = config;

        this._store.set(CUSTOM_COMPONENTS, customComponents);
        this._registeredChange.next();
    }
}