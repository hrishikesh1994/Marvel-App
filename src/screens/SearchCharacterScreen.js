import * as React from 'react'
import {SafeAreaView, StatusBar, View, Text, Button, StyleSheet, FlatList} from 'react-native' 

import CharacterCard from '../component/CharachterCard';
import * as ApiUtils from '../utils/ApiUtils'
import { URL } from '../utils/Constants';


function SearchCharacterScreen() {

  const [response, setResponse] = React.useState()
  
  React.useEffect(() => {
    (async () => {
      let res = await ApiUtils.callMarvel(URL.GET_CHARACTERS)
      setResponse(res.data.results)
    })()
  }, [])
  
  function renderCard(item) {
    return <CharacterCard character={item} />
  }

  if (!response) {
    return null
  }

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={'light-content'}
      />
      <FlatList 
        data = {response}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => renderCard(item)}
      />
    </View>
  )
}

export default SearchCharacterScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'black',
  },
});