import styled from "styled-components";
import Featured from "../components/Featured";
import Recent from "../components/Recent";
import Post from "../components/Post";


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

const Catalog = () => {
  

  return (
    <Container>
      <HeadingCat>Featured Projects</HeadingCat>
      <BoxRec id="section1">
        <Featured 
        appLink = '#'
        srcLink="https://github.com/CalilDrissi/favorite_places.git"
        type="Android & iOS" 
        title="📍Places"  desc=" Mark places on the map, add a name and a picture over it, see all the saved places, marked on a map or through a list."

        previewImg="https://ik.imagekit.io/magicmenuv1/map-app.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669382812382"
        flutter={true}  node={true}/>
        <Featured type="Desktop" title="Wise Words" 
        desc="Register a new account, login and view insightful quotes from database & explore, upvote, downvote and mark your favorite quotes."
        firebase={true}
        flutter={true}
        />

        <Featured type="Android & iOS" title="Gourmet Meals" desc="Register you account, Search Gourmet Recipes , add the ingredients to the shopping cart, set shopping date and more."
         firebase={true}
         flutter={true}
        />

      </BoxRec>

      <HeadingCat> Recent Projects </HeadingCat>

      <BoxSquare id="section2">
        <Recent 
          title="I.M chat" 
          type="Android"  
          flutter ={true}
          firebase={true}
          desc="Instant messaging app to chat with friends in real time"/>
        {/* <Recent title="coll" type="desktop" />
        <Recent title="coll" type="desktop" />
        <Recent title="coll" type="Android" /> */}
      </BoxSquare>

      <HeadingCat> Tech Articles </HeadingCat>
      
      <BoxRec id="section3">
        <Post title="Build a Flutter & Strapi Mobile App" platform="Dev.to" desc="Create, Retrieve, Update and Delete (CRUD) application using Flutter and Strapi." />
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
        <p>Khalil Drissi &copy; 2022</p>
      </footer>
    </Container>
  );
};

export default Catalog;
