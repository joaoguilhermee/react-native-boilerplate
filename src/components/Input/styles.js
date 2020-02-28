import styled, { css } from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.TextInput`
  background: ${colors.white};
  margin: ${metrics.spacing}px 0;
  border-radius: ${metrics.radius}px;
  padding: ${metrics.padding}px;
  ${props =>
    props.multiline &&
    css`
      flex: 1;
    `};
  border: 1px solid ${colors.primary};
`;
