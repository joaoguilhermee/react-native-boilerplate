import { Platform, Dimensions } from 'react-native';

export default {
  padding: 12,
  spacing: 12,
  radius: 6,
  marginBottom: 12,
  buttonBottom:
    Dimensions.get('window').height - (Platform.OS === 'ios' ? 255 : 200),
};
