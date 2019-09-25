import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';

import App from './src/screen1';

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(App);
