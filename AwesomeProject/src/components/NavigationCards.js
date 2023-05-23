import React from 'react'
import { Button, FlatList, Text, View } from 'react-native'

const items = [
  { name: 'All Pokemons', route: 'Pokemons' },
  { name: 'About', route: 'Home' },
  { name: 'Contact', route: 'Home' },
]

const NavigationCards = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', width:'100%', padding:'3%'}}>
      <FlatList
          data={items}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
              <View style={{backgroundColor: '#181818', justifyContent:"center", alignItems: 'center',
                height: 100, borderRadius: '10%', marginRight:4, marginBottom:4,borderWidth: 2, borderColor:'#202020' }}> 
                <Button 
                  color="#fff"
                  title={item.name}
                  onPress={() => navigation.navigate(item.route)}
                />
              </View>
            </View>
          )}
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
    </View>
  )
}

export default NavigationCards