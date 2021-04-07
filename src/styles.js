import styled from 'styled-components';
import { shade } from 'polished';


export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  background: ${props => props.color};
`;

export const Content = styled.div`
  width: 250px;
  height: 150px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: 10px 7px 24px 5px rgba(0,0,0,0.13);
  background: #f5f5f5;
`;


export const Button = styled.button`

width: 200px;
height: 50px;
text-decoration: none;
border: none;

background: #ec8f6a;

color: #fff;
font-size: 16px;
font-weight: bold;

cursor: pointer;

:hover{
background: ${shade(0.2, '#ec8f6a')};
}
`;