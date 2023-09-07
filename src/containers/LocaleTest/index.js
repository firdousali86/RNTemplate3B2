import {useState, lazy, Suspense, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';
import {LocalizationHelper} from '../../helpers';

const {CalendarModule} = NativeModules;

const Calendar = lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 5 * 1000)).then(() =>
    import('../../containers/SignupScreen'),
  );
});

const LocaleTest = () => {
  useEffect(() => {
    const eventEmitter = new NativeEventEmitter(NativeModules.CalendarModule);
    let eventListener = eventEmitter.addListener('EventReminder', event => {
      console.log(event.eventProperty); // "someValue"
    });

    // Removes the listener once unmounted
    return () => {
      eventListener.remove();
    };
  }, []);

  const [someVal, setSomeVal] = useState(undefined);

  LocalizationHelper.onChange(() => {
    console.log('I18n has changed!');
  });

  return (
    <View>
      <Suspense fallback={<ActivityIndicator />}>
        <Calendar />
      </Suspense>

      <Text>test locale</Text>
      <Text>{LocalizationHelper.t('hello')}</Text>

      <TouchableOpacity
        onPress={() => {
          CalendarModule.createCalendarEvent(
            'lets see the toast!!',
            'testLocation',
          );
        }}>
        <Text>test native</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setSomeVal('1');
          LocalizationHelper.locale = 'en';
        }}>
        <Text>EN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSomeVal('2');
          LocalizationHelper.locale = 'ur';
        }}>
        <Text>UR</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSomeVal('3');
          LocalizationHelper.locale = 'fr';
        }}>
        <Text>FR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocaleTest;
