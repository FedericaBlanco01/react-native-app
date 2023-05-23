import React, { useEffect } from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import { getAllPokemons } from '../api/Pokemons';

const Pokemons = ({navigation}) => {
  const [items, setItems] = React.useState([]);
  useEffect(() => {
    getAllPokemons().then((response) => {
      setItems(response);
    });
  }, []);

  if(!items) {
    return (
        <View style={styles.container}>
            <Text style={styles.item}>Loading...</Text>
        </View>
    );
  }

  const mapResult = (item) => {
    const id = item.url.split('/')[6];
    return(
      <View key={item.name}>
        <Image source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}} style={{width: 80, height: 80}} />
        <Text style={styles.item} >{item.name}</Text>
      </View>
  )}
  
  return (
    <ScrollView style={styles.container}>
        {items.map(mapResult)}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 50,
    },
    item: {
      padding: 20,
      fontSize: 15,
      marginTop: 5,
    }
  });

export default Pokemons