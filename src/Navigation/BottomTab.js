import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Settings from '../Screens/Settings.js';
import Notifications from '../Screens/Notifications.js';
import {HomeIcon} from '../assets/icons';
import {SettingsIcon} from '../assets/icons';
import {NavigationContainer} from '@react-navigation/native';
import {NotificationIcon} from '../assets/icons';
import {SettingsIconOutline} from '../assets/icons';
const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          // tabBarShowLabel: false,sz
          tabBarStyle: {
            paddingVertical: 5,
            borderTopLeftRadius: 25,
            elevation: 10,
            borderTopRightRadius: 25,
            backgroundColor: '#f9823f',
            position: 'absolute',
            height: 55,
            paddingBottom: 6,
          },
       }}
       > 
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => <HomeIcon height={30} />,
          }}
        />
        <Tab.Screen
          name="notifications"
          component={Notifications}
          options={{
            tabBarIcon: () => <NotificationIcon height={30} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: () => ( <SettingsIconOutline height={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
