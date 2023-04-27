import React from 'react'
import { LabelStyle } from './style'

export const Heading = (props: { label: string|undefined}) => {
  return (
    <LabelStyle>{props.label}</LabelStyle>
  )
}
