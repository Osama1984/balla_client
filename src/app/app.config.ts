import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { AuthEffects } from './store/effects/auth.effects';
import { environment } from '../environments/environment';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { metaReducers, reducers } from './store/reducers';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(reducers, { metaReducers }),
    provideEffects([AuthEffects]),
    ...(environment.production ? [] : [provideStoreDevtools()]),
    provideHttpClient()
  ]
};
