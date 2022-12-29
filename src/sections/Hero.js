import styled from "styled-components";
import { GithubOriginalIcon, TwitterOriginalIcon, FlutterOriginalIcon, DartOriginalIcon, GoOriginalIcon, NodejsOriginalIcon } from "react-devicons";
import Scrollspy from "react-scrollspy";
import profile from "../assets/profile.png";
import { MdOutlineAlternateEmail } from "react-icons/md";


const Container = styled.div`
  cursor: default;
  width: clamp(30vw, 550px, 550px);
  position: fixed;
  padding-left: 22px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 990px) {
    position: relative;
    width: 100%;
    padding: 0 10%;
    height: 40vh;
    & nav {
      display: none;
    }
  }
  @media (max-width: 490px) {
    position: relative;
    width: 100%;
    padding: 0 10%;
    height: 50vh;
    & nav {
      display: none;
    }
  }

  & a:link,
  a:visited,
  a:hover,
  a:active {
    color: #fff;
    text-decoration: none;
    cursor: auto;
  }
`;

const Heading = styled.h1`
  font-size: 70px;
  font-weight: 900;
  line-height: 1.05;
  cursor: default;
  @media (max-width: 500px) {
    font-size: 50px;
  }
`;

const Part1 = styled.div`
  display: block;
  font-size: 32px;
  font-weight: 200;
  line-height: 1.05;
`;

const Part2 = styled.div`
  display: block;
  font-size: 22px;
  font-weight: 100;
  padding-top: 32px;

  @media (max-width: 675px) {
    margin-bottom:  25px;
    font-size: 18px ;
  }
`;

const Heading6 = styled.h6`
  font-weight: 100;
  line-height: 1.1;
  font-size: 16px;
`;

const Tabs = styled.nav`
  font-weight: 100;
  & div a {
    cursor: pointer !important;
  }
  & div.active {
    font-size: 20px;
    font-weight: 700;
  }
`;
const Connect = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  cursor: pointer;
  font-weight: 100;
`;


const Photo = styled.div`
  width: 50px;
  height: 50px;
  background: #eee;
  border-radius: 50%;
  padding: 1.4px;
  cursor: auto;
  overflow: clip;  
  border-style: none;
`;
const ProfileImg = styled.img`
  max-width: 100%;
  height: auto;
  filter: grayscale(100%);

  transition: all 0.4s ease-in;

  &:hover {
    filter: grayscale(0%);
    transform: scale(1.05);
  }
`;

const SocialLink = styled.p`
  text-decoration: none;
  margin-left: 5px;
  transition: all 0.2s ease-out;
  &:hover {
    text-decoration: underline;
    opacity: 0.5;
  }

  @media (max-width: 400px) {
    font-size: 10px;
  }
`;

const TooltipText = styled.span`
  color: #fff;
  width: 200px;
  text-align: center;
  line-height: 44px;
  border-radius: 3px;
  cursor: pointer;
`;
const TooltipBox = styled.span`
  position: absolute;
  top: calc(100% + 10px);
  left: 30px;
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  width: 150px;
  padding: 5px 5px;
  border-radius: 4px;
  transition: visibility 0.3s, color 0.3s, background-color 0.3s, width 0.3s,
    padding 0.5s ease-in-out;
  &:before {
    content: "";
    width: 0;
    height: 0;
    left: 40px;
    top: -10px;
    position: absolute;
    border: 10px solid transparent;
    transform: rotate(135deg);
    transition: border 0.3s ease-in-out;
  }
`;

const TooltipCard = styled.span`
  position: relative;
  & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    width: 160px;
    padding: 8px 8px;
    &:before {
      border-color: transparent transparent rgba(0, 0, 0, 0.8)
        rgba(0, 0, 0, 0.8);
    }
  }
`;

const Hero = ({openIt}) => {
  return (
    <>
      <Container>
        <div>
          <Heading6>Hi, my name is</Heading6>
          <Heading>
            <TooltipCard>
              <TooltipText>
                <span>Khalil</span>
              </TooltipText>
              <TooltipBox>
                <p> خليل </p>
              </TooltipBox>
            </TooltipCard>
            <span> Drissi</span>
          </Heading>
          <Part1> & I Develop Computer Software.</Part1>
          <Part2>
            I'm currently working with <FlutterOriginalIcon size="14px" color="white" /> Flutter & <DartOriginalIcon size="14px" color="white" />  Dart, developing applications for mobile and desktop. I'm also proficient in full-stack web development with <NodejsOriginalIcon size="14px" color="white" /> node.js. For general purpose programming I mainly work with <GoOriginalIcon size="14px" color="white" /> Go. 
          </Part2>
        </div>

        <Tabs>
          <Scrollspy
            items={["section1", "section2", "section3"]}
            currentClassName="active"
          >
            <div>
              {" "}
              <a href="#section1">01. Featured Projects</a>
            </div>

            <div>
              {" "}
              <a href="#section2">02. Recent Projects</a>
            </div>

            <div>
              {" "}
              <a href="#section3">03. Tech Articles</a>
            </div>
          </Scrollspy>
        </Tabs>

        <Connect>
          <Photo>
            <ProfileImg src={profile} alt="me" />
          </Photo>
          <SocialLink>
            <TwitterOriginalIcon size="12px" color="white" />
            <span><a href="https://twitter.com/calildrissi/" > Twitter</a> </span>
          </SocialLink>
          <SocialLink>
            <GithubOriginalIcon size="12px" color="white" />
            <span><a href="https://github.com/calildrissi/" > Github</a> </span>
          </SocialLink>

          <SocialLink onClick={() => { openIt(true)}}>
            <MdOutlineAlternateEmail size="12px" />
            <span> Contact</span>
          </SocialLink>
        </Connect>
      </Container>
    </>
  );
};

export default Hero;
