import styled from 'styled-components'
import { Link } from "react-scroll";


export const Button = styled(Link)`
 /* border-radius: 50px; */
 background: ${({primary}) => (primary ? 'rgb(218, 0, 83)' : '#010606')};
 white-space: nowrap;
 padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
 color: ${({dark}) => (dark ? '#000' : '#fff')};
 font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
 outline: none;
 border: none;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
 transition: all 0.2s ease-in-out;


 &:hover{
    transition: all 0.2s ease-in-out;
    transform: scale(1.06);
    color: ${({dark}) => (dark ? '#000' : '#fff')};
    background: ${({primary}) => (primary ? '#fff': 'rgb(218, 0, 83)')};
 }
`