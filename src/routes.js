import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';

import Deliveries from './pages/Deliveries';
import Profile from './pages/Profile';

export default (signedIn = true) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({ SignIn }),
        App: createBottomTabNavigator({ Deliveries, Profile }),
        // App: createBottomTabNavigator(
        //   {
        //     Deliveries,
        //     Profile
        //   },
        //   {
        //     resetOnBlur: true,
        //     tabBarOptions: {
        //       keyboardHidesTabBar: true,
        //       activeTintColor: '#FFF',
        //       inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        //       style: {
        //         backgroundColor: '#8d41a8',
        //       },
        //     },
        //   }
        // ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
