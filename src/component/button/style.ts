import styled from "styled-components";
import { ButtonProps } from "./buttonProps";

export const Buttonstyles = styled.button<ButtonProps>`
  background: ${(props) => props.bg || 'transparent'};
  width: ${(props) => props.width || '100%'};
  border: ${(props) => props.border || 'none'};
  margin: ${(props) => props.margin};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.borderRadius};
  outline: none;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight || 600};
  height: ${(props) => props.height || '48px'};
  opacity: ${(props) => props.disabled && '0.5'};
  cursor: pointer;
  `