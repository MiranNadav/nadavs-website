import React from 'react';
import styled, { css } from 'styled-components';
import { DESCRIPTION_FONT_SIZE, TITLE_FONT_SIZE, SCALED_TITLE_FONT_SIZE } from '../constants/Sizes';

interface IMarginForSpan {
  addMargin?: boolean
  marginBottom?: string,
  marginTop?: string
}

interface ITextProps extends IMarginForSpan {
  fontSize?: string,
  fontStyle?: string,
  isTitle?: boolean,
  color?: string,
  isP?: boolean,
  fontWeight?: string,
};


export interface IBasicText extends ITextProps {
  text: string
};


const BasicText = ({ text, fontSize, fontStyle, isTitle, color, isP, marginTop, fontWeight, marginBottom, addMargin }: IBasicText) => {
  if (isP) {
    return <Span color={color} fontSize={fontSize} fontWeight={fontWeight} fontStyle={fontStyle} addMargin={addMargin}>{text}</Span>
  }

  const lines = text.split('\n');
  const toRender = lines.map((line, i) => {
    return <Span isTitle={isTitle} color={color} fontSize={fontSize} fontWeight={fontWeight} fontStyle={fontStyle} key={i} marginTop={marginTop} addMargin={addMargin} marginBottom={marginBottom}>{line}</Span>

  });

  return (<Container>
    {toRender}
  </Container>)
}

const Container = styled.div``;

const marginForSpan = css<IMarginForSpan>`
  display: block;
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
`

const Span = styled.span<ITextProps>`
  ${props => props.addMargin ? marginForSpan : null};
  white-space: pre-line;
  font-size: ${props => props.fontSize ? props.fontSize : props.isTitle ? TITLE_FONT_SIZE : DESCRIPTION_FONT_SIZE};
  color: ${props => props.color ? props.color : '#000000'};
  font-style: ${props => props.fontStyle ? props.fontStyle : 'none'};
  font-family: ${props => props.isTitle ? 'Playfair Display' : 'Roboto'};
  font-weight: ${props => props.fontWeight ? props.fontWeight : 'none'};
  @media screen and(max-width: 480px){
    font-size: ${
  props => props.isTitle ? SCALED_TITLE_FONT_SIZE :
    props.fontSize ? props.fontSize : DESCRIPTION_FONT_SIZE
  };
}
`;

export default BasicText;
