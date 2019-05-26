import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Demo from '../screens/DemoScreen';
import DemoHomeScreen from '../screens/DemoHomeScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: DemoHomeScreen},
  Profile: {screen: Demo},
});

export default createAppContainer(MainNavigator);

// export default createAppContainer(createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: Demo,
// }));