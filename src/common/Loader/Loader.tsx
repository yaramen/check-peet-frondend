import React from 'react';
import styled, {keyframes} from "styled-components";

const loaderAnimation = keyframes`
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
`

const LoaderWrap = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  color: #000000;
  font-size: 18px;
  line-height: 22px;
  background: rgba(255, 255, 255, 0.7);
  z-index: 1;
`

const Circle = styled.div`
  width: 35px;
  height: 35px;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  border: 4px solid transparent;
  border-bottom-color: #002139;
  border-right-color: #002139;
  border-radius: 50%;
  animation: ${loaderAnimation} linear infinite;
  animation-duration: 0.7s;
`;

export const Loader = () => (
    <LoaderWrap>
        <Circle/>
    </LoaderWrap>
);