import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import {Walking} from '../assets/images';
import {FireIcon} from '../assets/icons';
import {Clock} from '../assets/icons';
import {Arrow} from '../assets/icons';
import { Dimensions } from 'react-native';
import {useWindowDimensions} from 'react-native';
export default function Home() {
  const [value, setValue] = useState(0);
  const {height, width} = useWindowDimensions();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.container2}
        onPress={() => setValue(value + 1)}>
        <Walking style={styles.icon1} />
        <CircularProgress
          radius={160}
          value={value}
          maxValue={100}
          textColor="white"
          // fontSize={10}
          valueSuffix={''}
          activeStrokeColor={'#f9823f'}
          inActiveStrokeColor={'#cbcdd5'}
          inActiveStrokeOpacity={0.2}
          inActiveStrokeWidth={6}
          title={'Today'}
          titleColor={'#cbcdd5'}
          titleFontSize={20}
        />
        <Text style={styles.text1}>Goal 10,000</Text>
      </TouchableOpacity>
      <View style={styles.container3}>
        <View style={styles.row1}>
          <View style={styles.circle}>
            <FireIcon style={{marginLeft: 10, marginTop: 10}} />
          </View>
          <View style={styles.circle}>
            <Clock style={{marginLeft: 12, marginTop: 12}} />
          </View>
          <View style={styles.circle}>
            <Arrow style={{marginLeft: 13, marginTop: 9}} />
          </View>
        </View>
        <View style={styles.row1}>
          <View style={styles.captions}>
            <Text style={styles.text2}>
              0 kcal
            </Text>
          </View>
          <View style={styles.captions}>
          <Text style={styles.text2}>
              0 min
            </Text>
          </View >
          <View style={styles.captions}>
          <Text style={styles.text2}>
          10 m
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex:1,
  },
  icon1: {
    width: 40,
    alignSelf: 'center',
    position: 'absolute',
    top: 37,
  },
  container2: {
    alignSelf: 'center',
    position: 'relative',
    top: 70,
    // width: "100%",
    

  },
  text1: {
    color: '#cbcdd5',
    fontSize: 20,
    alignSelf: 'center',
    position: 'relative',
    top: -87,
  },
  container3: {
    position: 'relative',
    top: 90,
    // width:Dimensions.get('window').width,
  },
  row1: {
    width:Dimensions.get('window').width,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  circle: {
    width: 62,
    height: 62,
    marginRight: 30,
    marginLeft: 30,
    borderWidth: 3,
    borderColor: '#4a4a4a',
    backgroundColor: 'black',
    borderRadius: 45,

  },
  text2:{
    color:'#cbcdd5',
    fontSize:20,
    marginTop:5,
  },
  captions:{
    marginRight: 35,
    marginLeft: 37,
  }
});
