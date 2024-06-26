import styled from "styled-components";
import Featured from "../components/Featured";
import Recent from "../components/Recent";
import Post from "../components/Post";
import { ReactOriginalIcon } from "react-devicons";


const Container = styled.div`
  /* this need pseud element after */
  /* -moz-box-shadow: inset 0 -100px 100px -100px white; */
  /* -webkit-box-shadow: inset 0 -100px 100px -100px white; */
  /* box-shadow: inset 0 -100px 100px -100px white; */
  width: clamp(30vw, 45vw, 550px);
  grid-column-start: 2;
  grid-column-end: 3;
  padding-right: 10px;
  margin-left: 0.5rem;

  @media (max-width: 990px) {
    grid-row-start: 2;
    width: 100%;
    grid-column-start: 1;
    grid-column-end: 2;
    padding: 0 10%;
  }

  @media (max-width: 490px) {
    grid-row-start: 2;
  }
`;
const BoxSquare = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: stretch;
  grid-gap: 10px;
  margin-top: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
  &:hover > div:not(:hover) {
    opacity: 0.5;
  }
`;
const BoxRec = styled.div`
  width: 100%;
  display: flex;
  gap: 14px;
  flex-direction: column;
  &:hover > div:not(:hover) {
    opacity: 0.5;
  }
`;
const HeadingCat = styled.h2`
  font-size: 22px;
  text-decoration: underline;
  font-weight: 500;
  margin: 2rem 0;
  display: none;

  @media (max-width: 990px) {
    display: block;
  }
`;




const Copy = styled.span`


@keyframes rotate {
  from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}

 .spin > *{
  padding: 0;
  margin: 0;
  transform: translate(-50%, -50%);
  display: inline-block ;
  animation-name: rotate;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 

}

`;


const Catalog = () => {
  return (
    <Container>
      <HeadingCat>Featured Projects</HeadingCat>
      <BoxRec id="section1">

        <Featured
          title="🥐 FoodMuse"
          srcLink="https://github.com/CalilDrissi/food-muse"
          appLink="#"
          type="Desktop"
          desc="Register you account, Search Gourmet Recipes , add the ingredients to the shopping cart, set shopping date and more."
          flutter
          sqlite
          node
          mongodb
          
        />

        <Featured
          title="📍Placy"
          srcLink="https://github.com/CalilDrissi/placy-flutter"
          appLink="#"
          type="Android & iOS"
          desc=" Mark places on the map, add a name and a picture over it, see all the saved places, marked on a map or through a list."
          previewImg="https://ik.imagekit.io/magicmenuv1/map-app.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669382812382"
          flutter
          sqlite
        />

        <Featured
          title="🧦 WowSocks"
          srcLink="https://github.com/CalilDrissi/wowsocks-shop"
          appLink="#"
          type="Android & iOS"
          desc="Ecommerce mobile app for quirky socks, ties, underwear and accessories for men."
          flutter
          node
          redis
          postgresql
          
          
        />
      </BoxRec>

      <HeadingCat> Recent Projects </HeadingCat>

      <BoxSquare id="section2">
        <Recent
          title="I.M chat"
          desc="Group & private messaging in real time with video call and media sharing"
          type="Android & iOS"
          flutter

        
        
        />
        <Recent
          title="Int'l Radio"
          desc="Listen to international radio channels from all around the globe"
          type="Windows & MacOS"
          flutter

        />
        <Recent
          title="Whac-A-Mole"
          desc="Catchy classic game built with flutter"
          type="Android & iOS"
          flutter

        />
        <Recent
          title="Rss Client"
          desc="Check your favorite website and blogs latest publications"
          type="Android"
          flutter

        />
        <Recent
          title="Pos app"
          desc="Point of sale app for shops with data visualization for transactions"
          type="Android & iOS"
          flutter

        />
        <Recent
          title="Mediatek"
          desc="Cloud librairy for your media files images, audio, video, books etc.."
          type="Web, MacOS &Windows "
          flutter

        />
      </BoxSquare>

      <HeadingCat> Tech Articles </HeadingCat>

      <BoxRec id="section3">
        <Post
          title="Quick guide for easy postgres database replication"
          desc="Replication is one of the most important aspects of achieving high availability. Any unexpected failures on a database server could cause costly downtimes..."
          platform="Dev.to"
          link="https://dev.to/caldrissi/postgres-replication-with-ease-33hc"
        />
        {/* <Post title="Scaling" platform="Medium" /> */}
        <Post
          title="How to build a UDP server & client using Go"
          desc=" create a UDP server that will listen for messages from clients, add their IPs to its list, and broadcast messages to each of the previously seen clients."
          platform="Medium.com"
          link="https://medium.com/@khalildrissi/udp-server-client-using-go-fac2e4d92001"
        />
      </BoxRec>

      <footer
        style={{
          marginTop: "30px",
          marginLeft: "5px",
          fontWeight: "100",
          fontSize: "12px",
          marginBottom: "1rem",
        }}
      >
        {" "}
      
        <p>  <Copy >Built with <span className="spin"><ReactOriginalIcon size="10px" /></span> </Copy>  Khalil Drissi &copy; 2024</p>
      </footer>
    </Container>
  );
};

export default Catalog;
