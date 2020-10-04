import React from 'react';
import {NavigationContainer} from '@react-navigation/native'

import AppStackScreens from './stacks/AppStackScreens';

export default Main = () => {
    return (
        <NavigationContainer>
            <AppStackScreens />
        </NavigationContainer>
    )
}