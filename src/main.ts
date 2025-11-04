import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import {MainComponentShell} from './app/app-shell/main-component/main-component-shell';
import {App} from './app/app';

bootstrapApplication(App, appConfig)
  .catch(err => console.error(err));
