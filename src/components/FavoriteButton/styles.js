import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '~styles';

export const IconFavorite = styled(Icon).attrs(props => ({
  name: 'heart',
  size: 30,
  color: props.active ? colors.primary : colors.inactive,
}))``;

export const Container = styled.TouchableOpacity``;
