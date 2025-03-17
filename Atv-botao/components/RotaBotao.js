import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import feedback from './feedback';
import xrl8 from './xrl8';
import alienx from './alienx';

const Stack = createStackNavigator();

export default function RotaBotao() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="feedback" component={feedback} />
                <Stack.Screen name="xrl8" component={xrl8} />
                <Stack.Screen name="alienx" component={alienx} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}