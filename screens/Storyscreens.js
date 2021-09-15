import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import * as Speech from "expo-speech";

let customFonts = {
  "Bubblegum-Sans": require("../assets/BubblegumSans-Regular.ttf")
};
export default class Storyscreens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      speakerColor:'blue',
      speakerIcon:"Volume-high-outline",
      
    };
  }
   async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }
async initateTTS(title,author,story,moral){
  const current_color=this.state.speakerColor
  this.setState({
    speakerColor:current_color==="blue"? "gray":"blue"
  })
  if(current_color==="blue"){
    Speech.speak('${title}by${author}')
    Speech.speak(story)
    Speech.speak("the moral of the story is ")
    Speech.speak(moral)
  } else {
    Speech.stop()
  }
}

  componentDidMount() {
    this._loadFontsAsync();
  }

    render() {
      if(!this.props.route.params){
this.props.navigation.navigate("home")
      }else if(!this.state.fontsLoaded){
        return(<AppLoading/>)}
        else{
        return (
           <View >
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>Story Telling App</Text>
            </View>
          </View>
          <View style={styles.fieldsContainer}>
           
              <Image style={{width:50,height:50}} source={require('../assets/story_image_5.png')}/>
              <View style={{ height: RFValue(this.state.dropdownHeight) }}>
              </View>
              <View>
              <Text>
              {this.props.route.params.story.title}
              </Text>
               <Text>
              {this.props.route.params.story.author}
              </Text>
               <Text>
              {this.props.route.params.story.created_on}
              </Text>
              </View>
              <View>
              <TouchableOpacity onPress={()=>this.initiateTTS(
                this.props.route.params.story.title,
               this.props.route.params.story.author,
                this.props.route.params.story.story,
                 this.props.route.params.story.moral,
              )}>
              <Ionicons name={this.state.speakerIcon}
               size={RFValue(50)}
               color={this.state.speakerColor}/>
              </TouchableOpacity>
              </View>
          </View>
          <View>
          <Text>{this.props.route.params.story.story}</Text>
           <Text>Moral-{this.props.route.params.story.moral}</Text>
          </View>
          <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                <Text style={styles.likeText}>12k</Text>
              </View>
            </View>
          <View style={{ flex: 0.08 }} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
 
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  fieldsContainer: {
    flex: 0.85
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain"
  },
  inputFont: {
    height: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    fontFamily: "Bubblegum-Sans"
  }});

        
    
