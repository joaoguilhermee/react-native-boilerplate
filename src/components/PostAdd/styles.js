import styled from 'styled-components/native';
import { metrics, colors } from '~/styles';

export const Container = styled.View`
  position: relative;
`;
export const IconPlus = styled.View`
  width: 20px;
  height: 20px;
`;
export const AddNew = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-self: flex-end;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  /* top: ${metrics.buttonBottom}; */
  right: ${metrics.padding}px;
  z-index: 10;
  padding: 20px;
  background: ${colors.primary};
  align-items: center;
  justify-content: center;
`;
