import styled from 'styled-components/native';
import Btn from '~/components/Button';
import Ipt from '~/components/Input';
import { colors } from '~/styles';

export const Input = styled(Ipt)``;
export const Button = styled(Btn)``;
export const Label = styled.Text`
  font-size: 20px;
  color: ${colors.primary};
`;
export const Container = styled.View`
  flex: 1;
`;
