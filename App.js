/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class ComponentOne extends React.Component {
  state = {
    bigString: 'x'.repeat(1 * 1024 * 1024),
  };

  render() {
    return <Text>{this.state.bigString}</Text>;
  }
}

const ComponentTwo = () => {
  const [bigString, setBigString] = useState('y'.repeat(1 * 1024 * 1024));
  return <Text>{bigString}</Text>;
};

const App: () => React$Node = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => setVisible(!visible)}
      >
        <Text>Toggle</Text>
      </TouchableOpacity>
      <SafeAreaView>
        {visible ? <ComponentOne /> : null}
        {visible ? <ComponentTwo /> : null}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  touchable: {
    paddingTop: 80,
  },
});

export default App;
