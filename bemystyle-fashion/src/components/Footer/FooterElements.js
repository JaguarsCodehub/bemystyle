import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
  background-color: #fff;

`

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flexx;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

export const FooterHeader  = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  width: 30px;
  padding-right: 200px;
  padding-top: 10px;
  cursor: pointer;
  transition: 0.5s ease-in-out ;

  &:hover{
    color: #000;
  }

`

export const FooterLinksContainer = styled.div`
  
  display: flex;
  justify-content: center;


  @media screen and (max-width: 820px) {
      padding-top: 32px;
  }
`

export const FooterLinksWrapper = styled.div`
  display: flex;


  @media screen and (max-width: 820px) {
      flex-direction: column;
  }
`

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #000;

  @media screen and (max-width: 420px) {
      margin: 0;
      padding: 10px;
      width: 100%;
  }

`

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 16px;
  

`

export const FooterLink = styled(Link)`
  color: rgb(218, 0, 83);
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 500;

  &:hover{
      color: #000;
      transition: 0.3s ease-out;
  }
`



