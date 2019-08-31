import styled from 'styled-components';

interface ILogo {
    src: string,
    width?: string,
    height?: string
}

const Logo = styled.img<ILogo>`
    src: 'url(${props => props.src})';
    width:  ${props => props.width ? props.width : '80px'};
    height: ${props => props.height ? props.height : '80px'};
    margin-right: 10px;
    max-width:100%;
    height:auto;
    @media (max-width: 400px) {
        width:  ${props => props.width ? props.width : '28px'};
        height: ${props => props.height ? props.height : '28px'};
    }
`;

export default Logo;