import React from "react";
import styled from "styled-components";
import { BsFileCode } from "react-icons/bs";
import { AndroidOriginal, FirebasePlain } from 'devicons-react';
import * as Icons from "react-devicons";

const Box = styled.div`
  width: 100%;
  height: 200px;
  padding: 20px;

  background: #202020;
  flex-grow: stretch;
  transition: all 0.2s ease-out;
  
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    z-index: 10;
    transform: scale(1.1, 1.1);
    box-shadow: rgba(240, 46, 170, 0.4) 2px 2px, rgba(240, 46, 170, 0.3) 4px 4px, rgba(240, 46, 170, 0.2) 8px 8px, rgba(240, 46, 170, 0.1) 12px 12px, rgba(240, 46, 170, 0.05) 16px 16px;
  }
`;
const Heading5 = styled.h5`
  overflow-x: hidden;
  font-weight: 300;
  font-size: 12px;
  line-height: 0.9;
  background: -webkit-linear-gradient(#6dd3fa, #4296f4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &::-webkit-scrollbar {
    display: none;
  }

`;


const Body = styled.p`
  font-size: 16px;
  line-height: 1.2;
  font-weight: 100;
  margin-top: -5px;
  margin-bottom: 10px;
`;
const Check = styled.div`
  font-size: 12px;
  font-weight: 400;
`;
const Linky = styled.span`
  &:hover {
    filter: brightness(50%);
  }
`;

const Stack = styled.div`
  display: flex;
  justify-content: space-space-evenly;
  gap: 5px;
  margin-top: 10px;
`;

const HeadingSix = styled.h6`
  font-weight: 400;
  line-height: 0.5;
`;

const Recent = ({ type, title, desc, flutter, firebase, node }) => {
  return (
    <Box>
      <h2>
        <Heading5>{type}</Heading5>
        {title}
      </h2>
      <Body>{desc}</Body>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <div>
          <HeadingSix>Tech Stack:</HeadingSix>
          <Stack>
            {/* Search how to pass component as props */}
            {
              flutter === true && 
              <>
                   <Icons.FlutterOriginalIcon size="20px" color="white" />
                   <Icons.DartOriginalIcon size="20px" color="white" />
                   <AndroidOriginal size="20px" color="white" />
                   {/* <XcodeOriginal size="20px" color="white" /> */}
              </>
            }
            {
              node === true &&
              <>
              <Icons.MongodbOriginalIcon size="20px" color="white" />
              <Icons.NodejsOriginalIcon size="22px" color="white" />
              </>
            }
            {
              firebase === true &&
              <FirebasePlain size="20px" color="#fae105"  />
            }
           
          </Stack>
        </div>
        <Check>
          <Linky>
            <BsFileCode style={{ marginRight: "2px" }} />
            Code
          </Linky>
        </Check>
      </div>
    </Box>
  );
};

export default Recent;
