import {useState, lazy, Suspense} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {LocalizationHelper} from '../../helpers';
// import {MyCustomControl} from '../../controls';

// const ComplexComponent = lazy(() => import('../../containers/SignupScreen'));

const Calendar = lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 5 * 1000)).then(() =>
    import('../../containers/SignupScreen'),
  );
});

const LocaleTest = () => {
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
