import {StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';

function CalendarRender({selectedDate, setSelectedDate}) {
  return (
    <Calendar
      style={styles.container}
      theme={{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#00835C',
        selectedDayBackgroundColor: '#00835C',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00835C',
        dayTextColor: '#000',
        textDisabledColor: 'gray',
        arrowColor: '#00835C',
      }}
      onDayPress={day => {
        setSelectedDate(day.dateString);
      }}
      hideExtraDays={false}
      monthFormat={'M월'}
      markedDates={{
        [selectedDate]: {
          selected: true,
          disableTouchEvent: true,
          selectedDotColor: '#00835C',
        },
      }}
    />
  );
}

export default CalendarRender;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.2,
    borderRadius: 8,
    width: 280,
    paddingBottom: 5,
  },
});
