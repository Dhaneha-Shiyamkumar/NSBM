import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import { transform } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { events } from '../data/Event';
import Footer from './Footer';
import { Events } from '../data/Event';
import EventMain from './EventMain';


export default function EventStudent() {
  return (
      <View style={styles.container}>
        <ScrollView style={styles.img} showsVerticalScrollIndicator={false}>
          {Events.map((event,index)=>(
            <EventMain post={event} key={index}/>
          ))}
        </ScrollView>
        <View style={styles.container2}>
        </View>
        
      </View>
      
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    display:'flex',
    flexDirection:'column',
    marginTop:'auto'
  },
  container2:{
    // flex:0.5,
    display:'flex',
    marginTop:'auto'

  },
  img:{
    height:300,
    zIndex:100
  }

});
