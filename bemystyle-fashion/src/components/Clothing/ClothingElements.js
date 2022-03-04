import styled from 'styled-components';
import FeaturePic from '../../images/shopping-3.png';

export const FeatureContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)),
    url(${FeaturePic});
    height: 100vh;
    max-height: 500px;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 0 1rem;

    h1{
        font-size: clamp(2rem, 5vw, 3rem);
    }

    p{
        margin-bottom: 1rem;
        font-size: clamp(1rem, 3vw, 1.3rem);
    }
`

export const FeatureButton = styled.div`
    font-size: 1.4rem;
    padding: 0.6rem 3rem;
    border: none;
    background: #000;
    color: #fff;
    transition: 0.2s ease-out;

    &:hover{
        color: #000;
        background: #fff;
        transition: 0.2s ease-out;
        cursor: pointer;
    }
`