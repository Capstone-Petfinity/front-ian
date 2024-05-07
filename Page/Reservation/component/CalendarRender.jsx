import {StyleSheet, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';

function CalendarRender({selectedDate, setSelectedDate}) {
  return (
    <>
      <Text style={styles.title}>예약 일자</Text>
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
        monthFormat={'yyyy년 M월'}
        markedDates={{
          [selectedDate]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: '#00835C',
          },
        }}
      />
    </>
  );
}

export default CalendarRender;

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    marginBottom: 10,
    fontWeight: '500',
    marginLeft: 10,
  },
  container: {
    borderWidth: 0.2,
    borderRadius: 8,
    width: 300,
    paddingBottom: 5,
  },
});
