import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 140px;
  padding: 10px 15px 5px 15px;
  background: #202020;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    z-index: 10;
    transform: scale(1.1, 1.1);
    box-shadow: rgba(240, 46, 170, 0.4) -3px 3px, rgba(240, 46, 170, 0.3) -6px 6px, rgba(240, 46, 170, 0.2) -9px 9px, rgba(240, 46, 170, 0.1) -12px 12px, rgba(240, 46, 170, 0.05) -15px 15px;
  }
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;
`;

const SubTitle = styled.p`
  color: #fff;
  font-weight: 100;
  font-size: 14px;
`;

const Date = styled.p`
  color: #eee;
  font-weight: 300;
  font-size: 12px;
  text-align: right;
`;

const Heading5 = styled.h5`
  font-weight: 300;
  font-size: 12px;
  line-height: 0.9;
  background: -webkit-linear-gradient(#6dd3fa, #4296f4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Post = ({ title, platform , desc, link}) => {
  return (
    <Container>
      <Title>
        <Heading5>{platform}</Heading5>
        <a href={link}> 
        {title} 
        </a>
      </Title>
      <SubTitle>
        {desc}
      </SubTitle>
      <Date>December 15, 2022 </Date>
    </Container>
  );
};

export default Post;
