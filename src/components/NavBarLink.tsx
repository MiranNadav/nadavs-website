import React from "react";
import styled from 'styled-components';
import { Link } from 'react-scroll';
import BasicText from "./BasicText";

interface ISpan {
    margin?: string
}

interface INavBarLink extends ISpan {
    to: string,
    label: string,
    onClick?: () => void;
}



export const NavBarLink = ({ to, label, margin = 'none', onClick }: INavBarLink) => (
    <Span margin={margin}>
        <Link
            to={to}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={onClick}
        >
            <BasicText text={label} fontStyle={'italic'} />
        </Link>
    </Span>
);

const Span = styled.span<ISpan>`
    cursor:pointer;
    margin: ${props => props.margin};
`;

export default NavBarLink;