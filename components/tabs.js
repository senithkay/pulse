
import { StyleSheet, Text, View } from 'react-native';




export default function Tabs(props) {



  return (

    
      <>


        {
            props.isActive ? (
                <View style={styles.tabWrapActive}>
                    <Text numberOfLines={1} style={styles.tabText}>
                        {props.text}
                    </Text>
                </View>
            ) : (
                <View style={styles.tabWrapInActive}>
                    <Text numberOfLines={1} style={styles.tabTextInactive}>
                        {props.text}
                    </Text>
                </View>
            )

        }
      </>

  );
}



const styles = StyleSheet.create({


   tabWrapActive : {
    backgroundColor : '#C3ACD0',
    width : 80,
    height : 30,
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 20,
    marginRight : 20
   },

   tabWrapInActive : {

    width : 80,
    height : 30,
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 20,
    marginRight : 20
   },

   tabText : {
    fontSize : 20,
    color : '#FFFBF5'
   },

   tabTextInactive : {
    fontSize : 20,
    color : '#7D7D7D'
   }
 
});