import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CategoryBeardScreen = ({navigation}) => {
  return (
    <View style= {styles.ViewContainer}>
      <Text style= {styles.TitleStyle}>Todos los panes</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Detail")} style = {styles.ToucheableStyles}>
          <Text>Esto deberia ser un tipo de pan</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CategoryBeardScreen

const styles = StyleSheet.create({
  ToucheableStyles :{
    backgroundColor : '#2794f6',
    elevation : 10,
    borderRadius: 10,
    width : '40%',
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