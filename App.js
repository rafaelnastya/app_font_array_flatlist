import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import  AppLoading  from 'expo-app-loading';
import { useFonts, Inter_900Black,} from '@expo-google-fonts/inter';

export default function App() {
  
  let [fontsLoaded] =useFonts({
    Inter_900Black
  });
  
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Os melhores videogames do planeta Terra</Text>
    <FlatList
    data={arrayConsole}
    renderItem={({item})=>
    <View style={styles.container}>
    <Text style={styles.console}> {item.console} - {item.ano} - {item.jogos} </Text>
    </View>
    }
    />
    
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title:{
    fontSize:50,
    color: '#000000',
    fontFamily: 'Inter_900Black',
  }
});

const arrayConsole =[
  {console:'Nintendinho', ano:'1970', jogos:'super mario bros, duck hunt, tetris, donkey kong'},
  {console:'PlayStation 5', ano:'2022', jogos:'SpiderMan, TLOU2'},
  {console:'PlayStation 2', ano:'2001', jogos:'God Of War, Shadow of the Colossus'},
  {console:'Game Boy', ano:'1989', jogos:'pokemon red, kirby dream land'},
  {console:'Sega Saturn', ano:'1994', jogos:'Virtua fighter, sonic 3'}
]
