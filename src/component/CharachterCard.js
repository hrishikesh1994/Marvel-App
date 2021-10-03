import * as React from "react";
import { SafeAreaView, StyleSheet, View, Text, ImageBackground, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;

function CharacterCard(props) {
  let {character} = props

  return (
    <SafeAreaView>
        <ImageBackground
            style={styles.image} resizeMode="cover"
            source={{uri: `${character.thumbnail.path}/${image}.${character.thumbnail.extension}`}}
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
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
    image: {
        height: windowHeight,
        justifyContent:'flex-end',
        borderRadius: 30,
        margin: 5,
        overflow: "hidden"
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 36
    },
    nameContainer: {
        paddingHorizontal: 10,
    },
    description: {
        paddingVertical: 10,
        color: 'white',
        fontSize: 16,
        opacity: 0.5,
    },
    horizontalRule: {
        backgroundColor: 'white',
        height: 2,
        borderRadius: 10, 
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        paddingVertical: 10,
    },
    infoText: {
        color: 'white',
    },
});

export default CharacterCard;

const image = "portrait_fantastic";
