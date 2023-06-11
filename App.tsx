import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from './components/navbar.js';
import Tabs from './components/tabs.js';
import SearchBar from './components/searchbar.js';



export default function App() {



  return (
    <SafeAreaView style = {styles.body}>
      <Navbar />
    
      <View style = {styles.tabs}>
          
        <Tabs isActive={true} text = {"home"} />
        <Tabs isActive={false} text={"pulses"} />
        <Tabs isActive={false} text={"Requests"} />
        
      </View>

      <SearchBar />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
   body : {
    backgroundColor: '#FFFBF5',
    padding : 20,
    flex : 1
   },

   tabs : {
    marginTop : 20,
    display : 'flex',
    flexDirection : 'row'
   },

  
});