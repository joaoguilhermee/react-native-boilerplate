import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { metrics, colors } from '~styles';

export const IconClose = styled(Icon).attrs({
  name: 'close',
  size: 30,
  color: colors.white,
})``;
export const Container = styled.TouchableOpacity`
  margin-left: ${metrics.spacing}px;
`;
