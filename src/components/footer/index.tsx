import * as React from 'react';
import styled from "styled-components";

const FooterContainer = styled.div`
  text-align: center;
  margin-top:calc(5% + 60px);
  bottom: 0;
  width: 100% !important;
  height: 50px !important ;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

export const Footer = () => {
 

  return (
    <FooterContainer>
      Achou que era um footer bonitinho? Achou errado otario
    </FooterContainer>
  );
};