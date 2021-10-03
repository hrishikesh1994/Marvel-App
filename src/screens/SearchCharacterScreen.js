import * as React from 'react'
import {View, Text, Button, StyleSheet, FlatList} from 'react-native' 
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import response from "../../getCharacters";
import CharacterCard from '../component/CharachterCard';


function SearchCharacterScreen() {
  
  function renderCard(item) {
    return <View style={styles.container}>
        <CharacterCard character={item} />
      </View>
  }

  return (

    <FlatList 
      data = {response.data.results}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => renderCard(item)}
    />
  )
}

export default SearchCharacterScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
});