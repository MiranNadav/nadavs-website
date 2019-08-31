import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IStyledSpan extends ISpan {
    children?: ReactNode,
}

interface ISpan {
    margin?: string
}

const StyledSpan = ({ children, margin = 'none' }: IStyledSpan) => {
    return (<Span margin={margin}>
        {children}
    </Span>)
};

const Span = styled.span<ISpan>`
    margin: ${props => props.margin};
`

export default StyledSpan