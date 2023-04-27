import React from "react";

export interface ButtonProps {
  width?: string;
  bg?: string;
  color?: string;
  borderRadius?: string;
  fontWeight?: string;
  fontSize?: string;
  margin?: string;
  border?: string;
  colors?: string;
  height?: string;
  text?: any;
  children?: React.ReactElement;
  onClick?: (props: any) => void;
  disabled?: boolean;
}