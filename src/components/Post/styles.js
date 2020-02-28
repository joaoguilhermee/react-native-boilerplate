import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  border: 1px solid ${colors.primary};
  padding: ${metrics.padding}px;
  border-radius: ${metrics.radius}px;
  margin-bottom: ${metrics.marginBottom}px;
  background: ${colors.white};
`;
export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.primary};
  flex: 1;
  line-height: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Text = styled.Text``;
