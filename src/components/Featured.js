import styled from "styled-components";
import { BsFileCode } from "react-icons/bs";
// import { BsDoorOpen } from "react-icons/bs";
import { FirebasePlain, PostgresqlOriginal, SqliteOriginal } from 'devicons-react'
import  {FlutterOriginalIcon, DartOriginalIcon, NodejsOriginalIcon, MongodbOriginalIcon, GoOriginalIcon, SocketioOriginalIcon, RedisOriginalIcon} from "react-devicons";

const Box = styled.div`
  overflow-y: hidden;
  width: 100%;
  height: 210px;
  padding: 25px 25px 5px 25px;
  background: #202020;
  flex-grow: stretch;
  transition: all 0.2s ease-out;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    box-shadow: rgba(240, 46, 170, 0.4) -3px 3px,
      rgba(240, 46, 170, 0.3) -6px 6px, rgba(240, 46, 170, 0.2) -9px 9px,
      rgba(240, 46, 170, 0.1) -12px 12px, rgba(240, 46, 170, 0.05) -15px 15px;
    z-index: 10;
    transform: scale(1.1, 1.1);
  }

  @media (max-width: 990px) {
    height: 250px;
  }
`;
const Heading5 = styled.h5`
  font-weight: 300;
  font-size: 12px;
  line-height: 0.9;
  background: -webkit-linear-gradient(#6dd3fa, #4296f4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Body = styled.p`
  font-size: 16px;
  line-height: 1.2;
  font-weight: 100;
  margin-top: -5px;
  margin-bottom: 20px;
`;
const Check = styled.div`
  margin-top: 3px;
  font-size: 12px;
  font-weight: 400;
`;

const Stack = styled.div`
  display: flex;
  justify-content: space-space-evenly;
  gap: 5px;
  margin-bottom: 16px;
  margin-top: 10px;
`;

const Linky = styled.span`
  font-weight: 300;
  font-size: 14px;
  &:hover {
    filter: brightness(50%);
  }

  &:hover + div {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1);
  }
`;


//  const FrameDiv = styled.div`
//    border-radius: 2px;
//    transition: 0.2s ease-in-out opacity, 0.1s ease-in-out transform;
//    opacity: 0;
//    padding: auto;
//    position: absolute;
//    bottom: 0px;
//    top: 5px;
//    right: 0px;
//    width: 210px;
//    height: 200px;
//    overflow-x: hidden;
//     overflow-y: hidden;
//    transform-origin: center bottom;
//    transform: translateX(0%) translateY(0px) scale(0.6);

//   img{
//     transform: scale(0.12);
//      transform-origin: 0 0;
//    }
//  `;

const HeadingSecondary = styled.h2`
  margin-bottom: 7px;
`;
const HeadingSix = styled.h6`
  font-weight: 400;
  line-height: 0.5;
`;

const Featured = ({ type, title, flutter, node, firebase, previewImg, desc, srcLink, appLink, go,  postgresql , sqlite, socketio, redis, mongodb}) => {

  return (
    <Box>
      <HeadingSecondary>
        <Heading5>{type}</Heading5>
        {title}
      </HeadingSecondary>
      <div></div>
      <Body>
      {desc}
      </Body>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <HeadingSix>Tech Stack:</HeadingSix>
          <Stack>
            {/* if icon 1 show if Icon 2 show passing true flase to icons */}
            {
              flutter === true && 
              <>
                   <FlutterOriginalIcon size="20px" color="white" />
                   <DartOriginalIcon size="20px" color="white" />
              </>
            }
            {
              firebase === true &&
              <FirebasePlain size="20px" color="#fae105"  />
            }

            {
              postgresql === true &&
              <PostgresqlOriginal size="20px"   />
            }
            {
              socketio=== true &&
              <SocketioOriginalIcon size="20px"   />
            }

            {
              redis=== true &&
              <RedisOriginalIcon size="20px"   />
            }

            {
              mongodb === true &&
              <MongodbOriginalIcon size="20px"   />
            }

            {
              sqlite === true &&
              <SqliteOriginal size="20px"   />
            }

            {
              go === true &&
              <>
              <GoOriginalIcon size="22px" color="white" />
              </>
            }
            {
              node === true &&
              <>
              <NodejsOriginalIcon size="22px" color="white" />
              </>
            }
           
          </Stack>
        </div>
        <Check>
          <Linky>
            <BsFileCode style={{ marginRight: "2px" }} />
            <a href={srcLink} target="_blank" rel="noreferrer">  Code</a>
          </Linky>

          <span> &nbsp; </span>

          {/* <Linky  style={{ marginLeft: "5px" }}>
            <a href={appLink} target="_blank" rel="noreferrer"> 
            <BsDoorOpen style={{ marginRight: "2px" }} />
             Open
             </a>
          </Linky>

          <FrameDiv>
            <img
              src={previewImg}
              alt="Preview"
            ></img>
          </FrameDiv>  */}



        </Check>
      </div>
    </Box>
  );
};

export default Featured;
