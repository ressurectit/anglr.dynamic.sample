import {Dictionary} from '@jscrpt/common';

import {Configuration, config as cfg} from './config';

/**
 * Overrides config
 * @param override Configuration that is used for overriding
 */
function overrideConfig(override: Configuration)
{
    const isPresent = function isPresent(obj: any): boolean
    {
        return obj !== undefined && obj !== null;
    };

    if(isPresent(override?.configuration?.debug))
    {
        let debug: boolean = override?.configuration?.debug;

        if(typeof override.configuration.debug == 'string')
        {
            debug = (<string>override.configuration.debug).toLowerCase() == 'true';
        }

        cfg.configuration.debug = debug;
    }

    if(isPresent(override?.configuration?.apiBaseUrl))
    {
        cfg.configuration.apiBaseUrl = override.configuration.apiBaseUrl;
    }

    if(isPresent(override?.general?.theme))
    {
        cfg.general.theme = override.general.theme;
    }

    if(isPresent(override?.general?.language))
    {
        cfg.general.language = override.general.language;
    }
}

/**
 * Function used for loading configuration
 */
export async function loadConfig(): Promise<void>
{
    const loadJson = async (path: string) =>
    {
        const response = await fetch(new Request(path));

        return await response.json();
    };
    
    try
    {
        //default configuration
        const config: Configuration = await loadJson('local/config');
    
        Object.keys(config).forEach(key =>
        {
            const cfgDictionary = cfg as unknown as Dictionary<unknown>;
            const configDictionary = config as unknown as Dictionary<unknown>;

            cfgDictionary[key] = configDictionary[key];
        });
    }
    catch(e)
    {
        console.log('failed to load default configuration');
    }

    try
    {
        //config override from env variables
        const configOverride = await loadJson('local/configEnv');
    
        overrideConfig(configOverride);
    }
    catch(e)
    {
        console.log('failed to load environment configuration');
    }
}