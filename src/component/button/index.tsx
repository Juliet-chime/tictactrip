import React from 'react';
import { Buttonstyles } from './style';
import { ButtonProps } from './buttonProps';

const Custombutton = ({ text, children , ...props }:ButtonProps) => {

  return (
    <Buttonstyles {...props}>
      <>
      {text}
      {children}
      </>
    </Buttonstyles>
  );
};

export default Custombutton;