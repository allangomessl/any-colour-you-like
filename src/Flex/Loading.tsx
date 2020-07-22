import styled from 'styled-components'
import { Float } from './Float'

export const Loading = styled(Float)`
  z-index: 9999999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -15px;  
    margin-left: -15px;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    border: 5px solid grey;
    border-top-color: black;
    animation: loading 2s linear infinite;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

`
