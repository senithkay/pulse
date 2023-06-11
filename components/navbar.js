import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, Feather } from '@expo/vector-icons';

export default function navbar() {



    return (
      <>
        <View style = {styles.navbar}>
          <Text style={styles.appTitle}>Pulse</Text>
          <Entypo style={styles.hideIcon} name="eye-with-line" size={24} color="black" />
          <Feather style={styles.moreIcon} name="more-vertical" size={24} color="black" />
        </View>
        <StatusBar style="auto" />
      </>
    );
  }
  
  const styles = StyleSheet.create({
   
  
    appTitle : {
  
      fontSize :30,
      fontWeight : 'bold'
    },
  
    navbar : {
      display : 'flex',
      flexDirection : 'row',
      justifyContent : 'space-between',
      alignItems: 'center',
      marginTop : 10
    },
  
    hideIcon : {
      marginLeft : 'auto'
    },
  
    moreIcon : {
      marginLeft : 20
    }
  });
  