import 'react-native-gesture-handler';
import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { useEffect,useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';



//Home <<

function HomeScreen({navigation}){
  return(
    <View style={{padding:15, flex:1}}>
      <ScrollView contentContainerStyle={{padding:20}} style={styles.container}>

        <Text style={styles.textHeader}>Where do you want to navigate?</Text>

        <TouchableOpacity style={styles.btnOptionsHome} onPress={() =>navigation.navigate('Home')}>
          <Ionicons name='md-home' size={29} color='white'/>
          <Text style={{color:'white', marginTop:8, marginLeft:8}}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOptionsHome} onPress={() =>navigation.navigate('About')}>
          <Ionicons name='ios-information-circle-outline' size={29} color='white'/>
          <Text style={{color:'white', marginTop:8, marginLeft:8}}>About</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOptionsHome} onPress={() =>navigation.navigate('Portifolio')}>
          <Ionicons name='md-list' size={29} color='white'/>
          <Text style={{color:'white', marginTop:8, marginLeft:8}}>Portifolio</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}
//Home >>

//About <<
function AboutScreen({navigation}){

  const openModalContact = () =>{
    alert('open contact !');
  }

  let windowWidthTemp = (Dimensions.get('window').width) * 0.5;

  return(
    <View style={{padding:15,flex:1}}>

      <ScrollView contentContainerStyle={{padding:20, alignItems:'center'}} style={styles.container}>
        <Image style={{width:windowWidthTemp, height:windowWidthTemp, marginTop:20, borderRadius:200}} source={{uri:'https://github.com/sjbatista.png'}} />
        <View>
          <Text style={{...styles.textHeader, marginTop:15}}>
          👋 Hi, I'm Salomão.
          </Text>
          <Text style={{marginTop:15, fontSize:16, color:'#5f5380', textAlign:'left', marginBottom:15}}>
          Developer in training, I am also a professional working in the Information Technology segment for 8 years, with experience in Analysis and Support, Microcomputers, Service-Desk, support for Printers and Multifunctionals, both in preventive and corrective maintenance, where I also developed device configuration networks and other peripherals.
          </Text>
        </View>

        <TouchableOpacity onPress={()=>openModalContact()} style={styles.btnOpenBrowser}>
          <Text style={{color:'white'}}>
          Contact me!
          </Text>
          </TouchableOpacity>
      </ScrollView>

      

    </View>
  );
} 
//About >>

//Portifolio <<
function PortifolioScreen({navigation,route}){

  const [images,setImages] = useState([
    {
      img: require('./resources/calculator_app.png'),
      width:0,
      height:0,
      ratio:0,
      link:'https://github.com/sjbatista/react_js_calculator'
    },

    {
      img: require('./resources/timer_app.png'),
      width:0,
      height:0,
      ratio:0,
      link:'https://github.com/sjbatista/timer_app_react1'
    }

  ])

  const [windowWidth,setWindowWidth] = useState(0);

  useEffect(() => {
    
    let windowWidthTemp = Dimensions.get('window').width;
    
    setWindowWidth(windowWidthTemp - 30 - 40);

    let newImages = images.filter(function(val){
      let w = Image.resolveAssetSource(val.img).width;
      let h = Image.resolveAssetSource(val.img).height;

      val.width = w;
      val.height = h;
      val.ratio = h/w;

      return val;

    })

    setImages(newImages);
  }, []) //With '[]' as the second parameter, the 'use-effect' will be executed only once 

  const openBrowserNow = async (link) =>{
    let result = await WebBrowser.openBrowserAsync(link);
  }


  return(
    <View style={{padding:15,flex:1}}>
    <ScrollView contentContainerStyle={{padding:20}} style={styles.container}>
      <Text style={styles.textHeader}>Latest projects</Text>
      {
        images.map(function(val){
          return(
            <View style={{marginTop:15}}>
              <Image 
              style={{ width:windowWidth, height:windowWidth*val.ratio, resizeMode:'stretch' }} source={val.img} />

              <TouchableOpacity onPress={()=>openBrowserNow(val.link)} style={styles.btnOpenBrowser}><Text style={{textAlign:'center', color:'white', fontSize:18}}>Open the code on GitHub !</Text></TouchableOpacity>
            </View>
          );
        })
      }
    </ScrollView>
    </View>
  );
} 
//Portifolio >>

const Tab = createBottomTabNavigator();

//App <<
export default function App() {
  return (
    <NavigationContainer>
    <StatusBar hidden/>  
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name == 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home';
          } else if (route.name == 'About') {
            iconName = focused ? 'ios-information-circle-outline' : 'ios-information-circle-outline';
          } else if (route.name == 'Portifolio'){
            iconName = focused ? 'md-list' : 'md-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#5f5380',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Portifolio" component={PortifolioScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}
//App >>

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
  }
});
