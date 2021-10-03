import * as React from "react";
import { SafeAreaView, StyleSheet, View, Text, ImageBackground, Dimensions } from "react-native";

import { IMAGE_RESOLUTION } from "../utils/Constants";

const windowHeight = Dimensions.get('window').height;

function CharacterCard(props) {
  let {character} = props

  return (
    <ImageBackground
        style={styles.image} resizeMode="cover"
        source={{uri: `${character.thumbnail.path}/${IMAGE_RESOLUTION.PORTRAIT.FIVE}.${character.thumbnail.extension}`}}
    >
        <View style={styles.nameContainer}>
            <Text style={styles.name}>{character.name}</Text>
            <Text style={styles.description}>{character.description}</Text>

            <View style={styles.horizontalRule}></View>

            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>{`Comics: ${character.comics.available}`}</Text>
                <Text style={styles.infoText}>{`Series: ${character.series.available}`}</Text>
                <Text style={styles.infoText}>{`Stories: ${character.stories.available}`}</Text>
                <Text style={styles.infoText}>{`Events: ${character.events.available}`}</Text>
            </View>
        </View>
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
    image: {
        height: windowHeight,
        width: '100%',
        justifyContent:'flex-end',
        borderRadius: 30,
        marginBottom: 5,
        overflow: "hidden"
    },
    name: {
        // color: 'white',
        fontWeight: 'bold',
        fontSize: 36,
    },
    nameContainer: {
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 30,
        marginBottom: 10,
        marginHorizontal: 10,
        opacity: 0.5,
    },
    description: {
        paddingVertical: 10,
        // color: 'white',
        fontSize: 16,
        // opacity: 0.5,
    },
    horizontalRule: {
        backgroundColor: 'black',
        height: 2,
        borderRadius: 10, 
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        paddingVertical: 10,
    },
    infoText: {
        // color: 'white',
    },
});

export default CharacterCard;
