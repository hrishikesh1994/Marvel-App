import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ComicsDetailsScreen from './screens/ComicsDetailsScreen';
import SearchComicScreen from './screens/SearchComicsScreen'

const ComicsStack = createNativeStackNavigator();

function ComicsStackNavigator() {
  return (
    <ComicsStack.Navigator>
      <ComicsStack.Screen name="SearchComic" component={SearchComicScreen} />
      <ComicsStack.Screen name="ComicsDetails" component={ComicsDetailsScreen} />
    </ComicsStack.Navigator>
  )
}

export default ComicsStackNavigator
