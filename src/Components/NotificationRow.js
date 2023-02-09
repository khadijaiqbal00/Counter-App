import {StyleSheet, Text, View, Switch} from 'react-native';
import {useState} from 'react';
import {FireIcon} from '../assets/icons';
const width_proportion = '60%';
const height_proportion = '40%';

export default function NotificationRow(props) {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.row1}>
      <View style={styles.icon}>
      {props.svg? <props.svg height={23}/> : null}
      </View>
      <View style={styles.textPart}>
        <Text style={styles.text3}>{props.title}</Text>
        <Text style={styles.text4}>{props.description}</Text>
      </View>
      <View style={styles.switch1}>
        <Switch
          trackColor={{false: 'gray', true: '#f9823f'}}
          thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  row1: {
    marginRight: 12,
    marginTop: 7,
    marginBottom: 7,
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    paddingTop:5,
    width: 25,
    
  },
  textPart: {
    width: width_proportion,
    marginLeft: 50,
  },
  text3: {
    fontSize: 17,
    color: 'white',
    marginTop: 6,
    fontWeight: '600',
  },
  switch1: {
    marginTop: 6,
  },
  text4: {
    fontSize: 11,
    color: '#cbcdd5',
    fontWeight: '100',
  },
});
