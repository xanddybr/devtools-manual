import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterLinkActive } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(),importProvidersFrom(HttpClientModule),RouterLinkActive, provideAnimationsAsync()]
  
};
