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
  0% {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
  25% {
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
  }
  50% {
    -webkit-transform: rotate3d(0, 0, 1, 180deg);
    transform: rotate3d(0, 0, 1, 180deg);
  }
  75% {
    -webkit-transform: rotate3d(0, 0, 1, 270deg);
    transform: rotate3d(0, 0, 1, 270deg);
  }
  100% {
    -webkit-transform: rotate3d(0, 0, 1, 360deg);
    transform: rotate3d(0, 0, 1, 360deg);
  }
}

 .spin {
  display: inline-block ;
  -webkit-animation: rotate 5s normal linear infinite;
  animation: rotate 5s normal linear infinite;

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
          desc="Register a new account, login and view insightful quotes from database & explore, upvote, downvote and mark your favorite quotes."
          flutter
          sqlite
          
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
          desc="Register you account, Search Gourmet Recipes , add the ingredients to the shopping cart, set shopping date and more."
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
          desc="Listen international radio chanels from all around the globe"
          type="Windows & MacOS"
          flutter

        />
        <Recent
          title="Whac-A-Mole"
          desc="Catchy classic game build with flutter"
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
          title="Build a Flutter & Strapi Mobile App"
          desc="Create, Retrieve, Update and Delete (CRUD) application using Flutter and Strapi."
          platform="Dev.to"
        />
        {/* <Post title="Scaling" platform="Medium" /> */}
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
      
        <p>  <Copy >Built with <span className="spin"><ReactOriginalIcon size="11px" /></span> </Copy>  Khalil Drissi &copy; 2022</p>
      </footer>
    </Container>
  );
};

export default Catalog;
