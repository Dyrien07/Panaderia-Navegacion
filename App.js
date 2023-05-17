import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Dimensions} from 'react-native';
import { useFonts } from "expo-font"
import { useState , useEffect } from 'react';
import ShopNavigator from './src/navigation/ShopNavigator';

export default function App() {

  const [Loaded] = useFonts({
    IBMPlexMonoBold: require("./src/assets/fonts/IBMPlexMono-Bold.ttf"),
    IBMPlexMonoRegular: require("./src/assets/fonts/IBMPlexMono-Regular.ttf")

  })

 


  const [isPortrait, setIsPortrait]  = useState(true);

 const statePortrait = () => setIsPortrait(onPortrait);


  useEffect (()=>{
   Dimensions.addEventListener("change", statePortrait)
   return ()=> Dimensions.removeEventListener("change", statePortrait)
  }, [])

  const onPortrait =() => {
    const  dim = Dimensions.get("screen")
    return dim.height >  dim.width
  }




  if(!Loaded) return null;

  return (
    <ShopNavigator/>
  // <View style={styles.container}>
    //  <Text style={styles.texto}>Open up App.js to start working on your app!</Text>
      //<StatusBar style="auto" />
   // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontFamily: "IBMPlexMonoBold"
  }
});
