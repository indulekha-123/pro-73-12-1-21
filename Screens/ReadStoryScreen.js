import React from 'react';
import { StyleSheet, Text, View,TextInput,Image,KeyboardAvoidingView,ToastAndroid, TouchableOpacity } from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';




export default class SearchScreen extends React.Component{
   constructor(props){
super(props);
this.state={
   
search:'',

}
   }
   


   retriveStories=async()=>{
    const bookRef=await db 
    
        
    }




   
    render (){
return(
  <View>

 <TouchableOpacity
    style={styles.searchButton}
     onPress={()=>{this.searchTransactions(this.state.search)}}    >
     <Text> Search</Text>
    </TouchableOpacity>
   
    
    </View>

)



    }
}
const styles=StyleSheet.create({
  
    searchButton:{
        width:200,
        height:40,
        borderWidth:1.5,
        borderRightWidth:0,
        fontSize:20
    }
})
