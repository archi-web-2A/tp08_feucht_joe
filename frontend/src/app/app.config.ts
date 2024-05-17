import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { routes } from './app.routes';
import { NgxsModule } from "@ngxs/store";
import { ProductsState } from "./shared/states/products-state";
import { BrowserModule } from '@angular/platform-browser';
import { ApiHttpInterceptor } from './core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    HttpClientModule,
    provideHttpClient(withInterceptorsFromDi()),
    BrowserModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiHttpInterceptor,
      multi: true,
    },
    importProvidersFrom(NgxsModule.forRoot([ProductsState]))
  ]
};
