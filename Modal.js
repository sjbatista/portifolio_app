import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useEffect,useState } from 'react';
import {db} from './firebase.js'


export default function Modal(props){

    const [name, setName]=useState('');
    const [message, setMessage]=useState('');

    const sendMessage = () =>{
        db.collection('contato').add({
            name: name,
            message: message
        })
        alert('Your message was sent!');

    }


    return(
        <View style={styles.modalParent}>
            <View style={{position:'absolute', right:0,top:0, height:40, width:40, alignItems:'center', justifyContent:'center', margin:5}}>
                <TouchableOpacity onPress={()=>props.setShowModal(!props.showModal)} style={styles.btnCloseModal}><Text style={styles.textBtnCloseModal}>X</Text></TouchableOpacity>
            </View>
            <View style={styles.boxModal}>

                <Text style={{...styles.textHeader, fontSize:15}}>
                What is your name ?
                </Text>
                <TextInput style={styles.contactTextImput} numberOfLines={4} onChangeText={(text)=>setName(text)}></TextInput>

                <Text style={{...styles.textHeader, fontSize:15, marginTop:10}}>
                Message:
                </Text>
                <TextInput style={{...styles.contactTextImput, height:200, textAlignVertical:'top'}} numberOfLines={4} onChangeText={(text)=>setMessage(text)}></TextInput>

                <TouchableOpacity onPress={()=>sendMessage()} style={{...styles.btnOpenBrowser, alignItems:'center', marginTop:10}}>
                    <Text style={{color:'white', fontSize:18}}>
                    Submit
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
  
    textHeader: {
      color:'#5f5380',
      fontSize:24
    },
  
    btnOptionsHome: {
      backgroundColor:'#5f5380',
      padding:20,
      marginTop:15,
      flexDirection:'row'
    },
  
    btnOpenBrowser: {
      padding:8,
      backgroundColor:'#5f5380'
    },
  
    webViewStyle: {
      flex:1
    },

    modalParent: {
        position:'absolute',
        left:0,
        top:0,
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,0.6)',
        zIndex:1
    },

    textBtnCloseModal: {
        textAlign:'center', 
        justifyContent:'center',
        color:'white',
        fontSize:23,
        width:'100%',
        height:'100%',
        textAlignVertical:'center',
    },
    
    btnCloseModal: {
        backgroundColor:'rgb(21, 7, 56)',
        borderRadius:200,
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },

    boxModal: {
        backgroundColor:'white',
        height:'70%',
        width:'90%',
        position:'absolute',
        left:'5%',
        top:'15%',
        padding:10
    },

    contactTextImput: {
        borderWidth:1,
        borderColor:'black',
        marginTop:10,
    }

  });