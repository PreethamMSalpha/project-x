import React from "react";
import styled from "styled-components";
import "./hero.styles.scss";

// const MainDiv = styled.div`
//   display: flex;
//   flex-direction: column
//   ;
// `;

const HeroDiv = styled.div`
  display: flex;
  /* flex-direction: row; */
  flex-direction: ${({ imagePosition }) =>
    imagePosition === "right" ? "row" : "row-reverse"};
  text-align: center;
  width: 80%;
  margin: 100px auto;
  /* margin-top: 100px; */
  align-items: center;
  justify-content: space-between;
  /* text-align: start; */
  /* background-color: ${({ imagePosition }) =>
    imagePosition === "right" ? "black" : "white"}; */
`;

const ContentDiv = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  /* margin: 80px 0px; */
  padding: ${({ imagePosition }) =>
    imagePosition === "right" ? "0px" : "0 0 20px 0"};
  text-align: ${({ imagePosition }) =>
    imagePosition === "right" ? "start" : "end"};
`;

const H1 = styled.h1`
  margin-left: 0px;
`;

const ImageDiv = styled.div`
  flex: 0.3;
  /* padding-left: 20px; */
  padding: ${({ imagePosition }) =>
    imagePosition === "right" ? "0 0 0 20px" : "0 20px 0 0"};
`;

function HeroComponent({ title, description, img, imagePosition }) {
  console.log(imagePosition);
  return (
    <HeroDiv imagePosition={imagePosition}>
      <ContentDiv imagePosition={imagePosition}>
        <H1>{title}</H1>
        <p>{description}</p>
      </ContentDiv>
      <ImageDiv imagePosition={imagePosition}>
        <img alt="img" src={img} />
      </ImageDiv>
    </HeroDiv>
  );
}

function Hero() {
  return (
    <div>
      <HeroComponent
        title="Sell your products everywhere"
        description="Lorem ipsum is placeholder text commonly used in the graphic, print,
  and publishing industries for previewing layouts and visual mockups."
        img="https://source.unsplash.com/400x300/?graphs"
        imagePosition="right"
      />

      <HeroComponent
        title="Market and manage your bussiness on your mobile"
        description="Lorem ipsum is placeholder text commonly used in the graphic, print,
    and publishing industries for previewing layouts and visual mockups."
        img="https://source.unsplash.com/400x300/?mobile"
        // img="/src/components/hero/analytics.jpg"
        imagePosition="left"
      />
      <HeroComponent
        title="Find customer at your place"
        description="Lorem ipsum is placeholder text commonly used in the graphic, print,
    and publishing industries for previewing layouts and visual mockups."
        img="https://source.unsplash.com/400x300/?maps"
        imagePosition="right"
      />
    </div>
  );
}

export default Hero;
