import './ReactotronConfig';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

global.logs = [];

AppRegistry.registerComponent(appName, () => App);
