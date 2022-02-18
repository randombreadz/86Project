import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Dimensions,
  TextInput,
} from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import AppLoading from 'expo-app-loading';
import Font from 'expo-font';
import DropDownPicker from "react-native-dropdown-picker"

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class CreateStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      title: '',
      description: '',
      story: '',
      moral: '',
      previewImage: "image_1",
      dropdownHeight: 40
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    var previewImages = {
      image_1: require("../assets/story_image_1.png"),
      image_2: require("../assets/story_image_2.png"),
      image_3: require("../assets/story_image_3.png"),
      image_4: require("../assets/story_image_4.png"),
      image_5: require("../assets/story_image_5.png")
    }
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.iconImage}></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>New Story</Text>
          </View>
        </View>
         <Image
                source={previewImages[this.state.previewImage]}
                style={styles.previewImage}
              ></Image>
        <View style={{ height: RFValue(this.state.dropdownHeight) }}>
        
        <DropDownPicker
         items={[
                    { label: "Image 1", value: "image_1" },
                    { label: "Image 2", value: "image_2" },
                    { label: "Image 3", value: "image_3" },
                    { label: "Image 4", value: "image_4" },
                    { label: "Image 5", value: "image_5" }
                  ]}
                  defaultValue={this.state.previewImage}
                  containerStyle={{
                    height: 40,
                    borderRadius: 20,
                    marginBottom: 10
                  }}
                  onOpen={() => {
                    this.setState({ dropdownHeight: 170 });
                  }}
                  onClose={() => {
                    this.setState({ dropdownHeight: 40 });
                  }}
                  style={{ backgroundColor: "transparent" }}
                  itemStyle={{
                    justifyContent: "flex-start"
                  }}
                  dropDownStyle={{ backgroundColor: "#2f345d" }}
                  labelStyle={{
                    color: "white",
                    fontFamily: "Bubblegum-Sans"
                  }}
                  arrowStyle={{
                    color: "white",
                    fontFamily: "Bubblegum-Sans"
                  }}
                  onChangeItem={item =>
                    this.setState({
                      previewImage: item.value
                    })
                  }
                  />

        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TextInput
          onChangeText = {(typedText)=> this.setState({
            title: typedText
          })}
            placeholderTextColor="white"
            placeholder="Title"
            style={styles.input}
          />
          <TextInput
          onChangeText = {(typedText)=> this.setState({
            description: typedText
          })}
            multiline={true}
            placeholderTextColor="white"
            style={styles.input}
            placeholder="Description"
          />
          <TextInput
          onChangeText = {(typedText)=> this.setState({
            story: typedText
          })}
            multiline={true}
            placeholderTextColor="white"
            style={styles.input}
            placeholder="Story"
          />
          <TextInput
           onChangeText = {(typedText)=> this.setState({
             moral: typedText
           })}
            placeholderTextColor="white"
            style={styles.input}
            placeholder="Moral"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
  input: {
    borderColor: 'white',
    borderRadius: 15,
    borderWidth: 2,
    width: 250,
    height: 35,
    marginTop: 20,
    padding: 10,
    color: 'white',
  },
   previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain"
  },
});
