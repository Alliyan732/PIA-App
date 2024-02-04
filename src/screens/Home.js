import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Image,
  Button,

} from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
import { Dropdown } from 'react-native-element-dropdown';



const Home = ({ navigation }) => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Asia', value: 'Asia' },
    { label: 'Africa', value: 'Africa' },
    { label: 'North America', value: 'North America' },
    { label: 'South America', value: 'South America' },
    { label: 'Antarctica', value: 'Antarctica' },
    { label: 'Europe', value: 'Europe' },
    { label: 'Australia', value: 'Australia' }
  ]);
  //Asia, Africa, North America, South America, Antarctica, Europe, and Australia.
  const [isFocus, setIsFocus] = useState(false);
  const [countryData, setCountryData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [countryName, setCountryName] = useState(null);
  const [stateName, setStateName] = useState(null);
  const [cityName, setCityName] = useState(null);


  return (
    <View style={styles.mainContainer}>

      <View>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={items}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Region' : '...'}
          searchPlaceholder="Search..."
          value={city}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setCity(item.value);
            setCityName(item.label);
            setIsFocus(false);
          }}
        />
      </View>


      <View style={styles.box1}>
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("DelayPredictions")}>
          <View >
            <View style={styles.outlinedBox}>
              <Image
                source={require('../assets/images/predictions.png')}
                style={styles.image}
              />
              <Text style={styles.text}>Predictions</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("SelectDate")}>
          <View >
            <View style={styles.outlinedBox}>
              <Image
                source={require('../assets/images/search.png')}
                style={styles.image}
              />
              <Text style={styles.text}>Search</Text>
            </View>
          </View>
        </TouchableOpacity>

      </View>

      <View style={styles.box2}>
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("WeatherStack")}>
          <View >
            <View style={styles.outlinedBox}>
              <Image
                source={require('../assets/images/weather.png')}
                style={styles.image}
              />
              <Text style={styles.text}>Weather</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("AnalyticsStack")}>
          <View>
            <View style={styles.outlinedBox}>
              <Image
                source={require('../assets/images/livetrafic.png')}
                style={styles.image}
              />
              <Text style={styles.text}>Live Traffic</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.newsView}>
        <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>Latest News</Text>
        <ScrollView horizontal style={styles.ScrollView}>
          <View style={styles.container2}>

            <View style={styles.shadowOuterBox}>
              <View style={styles.imageContainer}>
                <Image source={require('../assets/images/ynews.png')} style={styles.scrollimage} resizeMode="contain" />
                <View style={styles.newsTextView}>
                  <Text style={styles.newstext}>Bookings Open. Get exclusive PIA fares at Sastaticket.pk. All Popular Airlines. Tips & Advice.</Text>
                </View>
              </View>
            </View>

            <View style={styles.shadowOuterBox}>
              <View style={styles.imageContainer}>
                <Image source={require('../assets/images/pia.png')} style={styles.scrollimage} resizeMode="contain" />
                <View style={styles.newsTextView}>
                  <Text style={styles.newstext}>Bookings Open. Get exclusive PIA fares at Sastaticket.pk. All Popular Airlines. Tips & Advice.</Text>
                </View>
              </View>
            </View>
            <View style={styles.shadowOuterBox}>
              <View style={styles.imageContainer}>
                <Image source={require('../assets/images/pia.png')} style={styles.scrollimage} resizeMode="contain" />
                <View style={styles.newsTextView}>
                  <Text style={styles.newstext}>Bookings Open. Get exclusive PIA fares at Sastaticket.pk. All Popular Airlines. Tips & Advice.</Text>
                </View>
              </View>
            </View>
            {/* Add more image-container combinations as needed */}
          </View>
        </ScrollView>
      </View>



    </View>
  );
};

const styles = StyleSheet.create({
  box1:{
    flexDirection: 'row', justifyContent: 'space-between', marginTop: 40, paddingLeft: 40, paddingRight: 40
  },
  box2:{
    flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, paddingLeft: 40, paddingRight: 40
  },
  mainContainer:{
    flex:1
  },
  shadowOuterBox: {
    borderRadius: 20, // Same as the outerContainer border radius    
    // overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5, marginRight: 5
  },
  newstext: {
    textAlign: 'justify'
  },
  newsView: {
    padding: 10,
    position:"absolute",
    bottom:10
  },
  newsTextView: {
    width: 150,
    height: 100,

  },
  ScrollView: {
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outlinedBox: {
    width: 120,
    height: 120,
    borderWidth: 5,
    borderColor: '#008000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  container2: {
    flexDirection: 'row',
  },
  scrollimage: {
    width: 100,
    height: "100%",
  },
  imageContainer: {
    flexDirection: 'row',
    // borderWidth:2,
    // borderColor:"black",
    paddingTop: 5,
    paddingBottom: 2,
    height: 100,
    // marginBottom:5,
    // marginRight:10,
    paddingRight: 5,
    borderRadius: 8, // Same as the outerContainer border radius
    backgroundColor: 'white',


  },
  // drop dowon styling
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,

    width: 250,
    alignSelf: "center",
    marginTop: 20
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});


export default Home;