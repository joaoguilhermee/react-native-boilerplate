import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  border: 1px solid ${colors.primary};
  padding: ${metrics.padding}px;
  border-radius: ${metrics.radius}px;
  margin-bottom: ${metrics.marginBottom}px;
  background: ${colors.white};
`;
export const Text = styled.Text``;
