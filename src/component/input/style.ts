import styled from "styled-components";
import { InputProps } from "./inputtypes";

export const CustomFieldStyle = styled.input<InputProps>`
  background: ${(props) => props.bg || 'transparent'};
  width: ${(props) => props.width || '100%'};
  border: ${(props) => props.border || 'none'};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding || '0rem 1rem'};
  outline: none;
  font-size: ${(props) => props.fontSize || '1rem'};
  color: ${(props) => props.color || '#333'};
  border-radius: ${(props) => props.borderRadius};
  &:focus {
    outline: none;
  }
`;