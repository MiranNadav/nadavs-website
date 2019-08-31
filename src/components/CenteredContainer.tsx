import styled from 'styled-components';
import { MAIN_WHITE } from '../constants/Colors';

interface ICenteredContainer {
    backgroundColor?: string,
    marginTop?: string,
    marginBottom?: string,
}


const CenteredContainer = styled.div<ICenteredContainer>`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : MAIN_WHITE};
    width: 100%;
    min-width: 300px;
    overflow: hidden;
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
`;


export default CenteredContainer;