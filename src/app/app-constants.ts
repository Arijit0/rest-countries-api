import {InjectionToken} from '@angular/core';

export let APP_CONFIG = new InjectionToken("app.config");

export class AppConstants {

    // public static get key(): string {return  '2eab592caaaf9014b8b1c8ad42024283';}
    public static get baseUrl(): string {return  'https://restcountries.com/v3.1/';}
}
