
import './polyfills';

import {CompilerFactory, NgModuleFactory, Type, destroyPlatform} from '@angular/core';
import {registerAsCustomElements} from './@angular/elements';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule, entryComponents} from './app/app.module';
import {doStuff} from './do-stuff';

// Normally we would use the `NgModuleFactory` with `platformBrowser()`.
// Using `platformBrowserDynamic` here for simplicity.
const bootstrapFn = () => platformBrowserDynamic().bootstrapModule(AppModule);

// Run
destroyPlatform();
registerAsCustomElements(entryComponents, bootstrapFn).
  then(doStuff).
  catch(onError);

// Helpers
function onError(err) {
  console.error(err);

  const redefineError =
    'Failed to execute \'define\' on \'CustomElementRegistry\': ' +
    'this name has already been used with this registry';

  if (err.message === redefineError) {
    console.log('Reloading to clear CustomElementRegistry...');
    window.location.reload();
  }
}
