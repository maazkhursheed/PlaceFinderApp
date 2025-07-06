import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
import { trackGlobalErrors } from 'reactotron-react-native';
import { Platform } from 'react-native';

if (__DEV__) {
  const host = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2';
  Reactotron.setAsyncStorageHandler(AsyncStorage) // Correct: use AsyncStorage object
    .configure({ host })// controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(trackGlobalErrors()) // intercept global errors
    .connect(); // let's connect!
  // Clear Reactotron on reload
  Reactotron.clear();
}
export default Reactotron;
