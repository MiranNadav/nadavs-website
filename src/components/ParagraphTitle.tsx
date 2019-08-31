import React from 'react';
import BasicText, { IBasicText } from './BasicText';
import { MARGIN_FROM_TEXT_TO_TITLE_SIZE } from '../constants/Sizes';


const ParagraphTitle = (props: IBasicText) => {
    return <BasicText {...props} addMargin={true} marginTop={MARGIN_FROM_TEXT_TO_TITLE_SIZE} />
}

export default ParagraphTitle;