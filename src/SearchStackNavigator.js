import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchCharacterScreen from './screens/SearchCharacterScreen';
import CharacterDetailsScreen from './screens/CharacterDetailsScreen';

const SearchStack = createNativeStackNavigator();

function SearchStackNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="SearchCharacter" component={SearchCharacterScreen} />
      <SearchStack.Screen name="CharacterDetails" component={CharacterDetailsScreen} />
    </SearchStack.Navigator>
  )
}

export default SearchStackNavigator
