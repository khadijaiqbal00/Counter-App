import {StyleSheet, Text, View} from 'react-native';
import {Arrow, FireIcon, Goals, MoreGoals, NotificationIcon, NotificationOrange, Progress, ProgressRepo, Shoe} from '../assets/icons';
import GoalsRow from '../Components/GoalsRow';
import {useState} from 'react';
import InputSpinner from 'react-native-input-spinner';
import NotificationRow from '../Components/NotificationRow';
export default function Settings() {
  const [number, setNumber] = useState(0);
  const [Calories, setCalories] = useState(0);
  const [distance, setDistance] = useState(0);
  return (
    
    <View style={styles.container}>
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Text style={styles.text1}>Goals</Text>
        <Text style={styles.text2}>Set Goals, Count Steps, Burn Calories</Text>
        <GoalsRow title="Today's Step Goal" svg={Goals} />
        <InputSpinner
          style={styles.spinner1}
          max={10000}
          min={1000}
          type={'real'}
          step={10}
          colorMax={'#f04048'}
          skin="clean"
          colorMin={'#40c5f4'}
          textColor={'black'}
          fontSize={20}
          height={70}
          background={'#cbcdd5'}
          value={number}
          onChange={num => {
            setNumber(num + 10);
          }}
          onMax={() => {
            alert('Maximum reached!');
          }}
          onMin={() => {
            alert('Minimum reached!');
          }}
        />


          <View style={{marginTop:10}}>

          </View>
        <NotificationRow title="Notifications" svg={NotificationOrange} />
        <NotificationRow title="More Goals" svg={MoreGoals} />
         <GoalsRow title="Calories Kcal" svg={FireIcon} />
         <InputSpinner
          style={styles.spinner1}
          max={10000}
          min={10}
          type={'real'}
          step={10}
          colorMax={'#f04048'}
          skin="clean"
          colorMin={'#40c5f4'}
          textColor={'black'}
          fontSize={20}
          
          height={70}
          background={'#cbcdd5'}
          value={Calories}
          onChange={num => {
            setCalories(num + 10);
          }}
          onMax={() => {
            alert('Maximum reached!');
          }}
          
        />
        <GoalsRow title="Distance km" svg={ProgressRepo} />
         <InputSpinner
          style={styles.spinner1}
          max={10000}
          min={10}
          type={'real'}
          step={10}
          colorMax={'#f04048'}
          skin="clean"
          colorMin={'#40c5f4'}
          textColor={'black'}
          fontSize={20}
          
          height={70}
          background={'#cbcdd5'}
          value={distance}
          onChange={num => {
            setDistance(num + 10);
          }}
          onMax={() => {
            alert('Maximum reached!');
          }}
          
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text1: {
    color: 'white',
    fontSize: 25,
    marginTop: 32,
    fontWeight: 'bold',
  },
  text2: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '100',
  },
  spinner1: {
    marginTop: 10,
    borderRadius: 10,
  },
});
