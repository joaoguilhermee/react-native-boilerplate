import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { metrics, colors } from '~/styles';

export const Container = styled.SafeAreaView`
  margin: ${metrics.padding}px;
  position: relative;
`;

export const IconPlus = styled(Icon).attrs({
  name: 'plus',
  size: 30,
  color: colors.white,
})`
  width: 30px;
  height: 30px;
`;
export const AddNew = styled.TouchableOpacity`
  width: 60px;
  position: absolute;
  height: 60px;
  border-radius: 30px;
  align-self: flex-end;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  top: ${metrics.buttonBottom}px;
  right: ${metrics.padding}px;
  z-index: 10;
  padding: 20px;
  background: ${colors.primary};
  align-items: center;
  justify-content: center;
`;
