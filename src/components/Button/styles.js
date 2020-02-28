import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.TouchableOpacity`
  background: ${colors.primary};
  justify-content: center;
  align-items: center;
  min-height: 40px;
  margin: ${metrics.spacing}px 0;
  border-radius: ${metrics.radius}px;
`;
export const Text = styled.Text`
  color: ${colors.white};
  font-weight: bold;
`;
