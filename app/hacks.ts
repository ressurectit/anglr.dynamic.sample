import {isFunction, isBlank, globalDefine} from '@jscrpt/common';
import {Observable} from 'rxjs';

import {config} from './config';

globalDefine(global =>
{
    if(!global.Document)
    {
        global.Document = function(){};
    }
});

//HACK - prevents application crash if no error handler provided
const observableSubscribe = Observable.prototype.subscribe;

Observable.prototype.subscribe = <any>function(this: any, next: any, error: any, complete: any)
{
    if(isBlank(error) || !isFunction(error))
    {
        error = (err: any) => 
        {
            if(config.configuration.debug)
            {
                console.log(err);
            }
        };
    }

    return observableSubscribe.call(this, next, error, complete);
};