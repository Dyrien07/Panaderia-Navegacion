import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CategoryScreen = ({navigation}) => {
  return (
    <View style= {styles.ViewContainer}>
      <Text style= {styles.TitleStyle}>Todos las categorias de productos </Text>
      <TouchableOpacity onPress={()=>navigation.navigate("Bread")} style ={styles.ToucheableStyles}>
        <Text>Navegar  a Bread</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({
  ToucheableStyles :{
    backgroundColor : '#2794f6',
    elevation : 10,
    borderRadius: 10,
    width : '35%',
    height : '25%',
    justifyContent: 'center',
    alignItems: 'center',
   
   
  
  },
  ViewContainer:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  TitleStyle:{
    fontFamily: "IBMPlexMonoBold"
  }
 
   

})