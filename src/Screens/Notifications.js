import {StyleSheet, Text, View, Switch} from 'react-native';
import {useState} from 'react';
import {
  Arrow,
  Clock,
  FireIcon,
  NotificationIcon,
  Progress,
  ProgressRepo,
  Reminder,
  Report,
} from '../assets/icons';
import {Walking} from '../assets/images';
import NotificationRow from '../Components/NotificationRow';
const width_proportion = '60%';
export default function Notifications() {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  return (
    <View style={styles.container}>
      <View style={{marginLeft: 20}}>
        <Text style={styles.text1}>Notifications</Text>
        <Text style={styles.text2}>Goals Achieved</Text>
        <View style={{marginTop: 20}}></View>
        <NotificationRow title="Calories" svg={FireIcon} />
        <NotificationRow title="Distance" svg={Arrow} />
        <NotificationRow title="Duration" svg={Clock} />
        <View style={styles.line} />

        <View style={styles.row1}>
          <View style={styles.icon}>
            <Walking height={43} marginTop={5} marginLeft={-10} />
          </View>
          <View style={styles.textPart}>
            <Text style={styles.text3}>Goals Progress</Text>
            <Text style={styles.text4}>
              Get notifies when you have almost reached your goal
            </Text>
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

        <View style={styles.line} />

        <NotificationRow
          title="Weekly Report"
          iconName="FireIcon"
          svg={Report}
        />
        <NotificationRow
          title="Wekly Progress"
          iconName="Arrow"
          svg={ProgressRepo}
        />
        <NotificationRow
          title="Active Reminder"
          iconName="Arrow"
          svg={Progress}
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
    marginTop: 48,
    fontSize: 14,
    fontWeight: '100',
    color: '#cbcdd5',
  },
  line: {
    borderBottomColor: '#cbcdd5',
    marginTop: 12,
    marginHorizontal: 20,
    marginBottom: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
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
    marginTop: 20,
  },
  text4: {
    fontSize: 11,
    color: '#cbcdd5',
    fontWeight: '100',
  },
  row1: {
    marginRight: 12,
    marginTop: 7,
    marginBottom: 7,
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    paddingTop: 5,
    width: 25,
    height: 20,
  },
});
