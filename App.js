/* eslint-disable prettier/prettier */

import React from 'react';
import { View, StyleSheet, LogBox } from 'react-native';
import NavContainer from './src/navigation/NavContainer';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

function App() {

  // if (__DEV__) {
  //   const ignoreWarns = [
  //     'EventEmitter.removeListener',
  //     '[fuego-swr-keys-from-collection-path]',
  //     'Setting a timer for a long period of time',
  //     'ViewPropTypes will be removed from React Native',
  //     'AsyncStorage has been extracted from react-native',
  //     "exported from 'deprecated-react-native-prop-types'.",
  //     'Non-serializable values were found in the navigation state.',
  //     'VirtualizedLists should never be nested inside plain ScrollViews',
  //   ];
  //   const warn = console.warn;
  //   console.warn = (...arg) => {
  //     for (const warning of ignoreWarns) {
  //       if (arg[0].startsWith(warning)) {
  //         return;
  //       }
  //     }
  //     warn(...arg);
  //   };

  //   LogBox.ignoreLogs(ignoreWarns);
  // }

  React.useEffect(() => {
    GoogleSignin.configure();
  }, []);

  return (
    <View style={styles.container}>
      <NavContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
