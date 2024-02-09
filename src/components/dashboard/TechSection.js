import React from "react";
import CommonCard from "../CommonCard";
import { Box, Card, Container, Typography } from "@mui/material";
import Slider from "react-slick";

const TechSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      style={{
        marginTop: "10px",
        backgroundImage:
          "url(https://www.shutterstock.com/image-photo/blck-marble-texture-stone-natural-600nw-535653976.jpg)",
        fontSize: "25px",
        fontWeight: "bold",
        paddingBottom: 2,
      }}
    >
      <Typography
        sx={{ fontSize: "25px", fontWeight: "bold", color: "whitesmoke", p: 2 }}
      >
        TECHNOLOGY USED
      </Typography>
      <Container>
        <Slider {...settings}>
          {data.map((item) => (
            <Box
              sx={{
                maxWidth: 400,
                borderRadius: 0,
              }}
              key={item.id}
            >
              <Card sx={{ margin: 2, borderRadius: 0 }}>
                <img src={item.img} alt="Tech-img" />
              </Card>
            </Box>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default TechSection;

const data = [
  {
    id: 1,
    img: "https://miro.medium.com/v2/resize:fit:1358/1*ahpxPO0jLGb9EWrY2qQPhg.jpeg",
  },
  {
    id: 2,
    img: "https://img-c.udemycdn.com/course/750x422/3613504_e0e9_5.jpg",
  },
  {
    id: 3,
    img: "https://miro.medium.com/v2/resize:fit:1358/1*ahpxPO0jLGb9EWrY2qQPhg.jpeg",
  },
  {
    id: 4,
    img: "https://img-c.udemycdn.com/course/750x422/3613504_e0e9_5.jpg",
  },
  {
    id: 5,
    img: "https://miro.medium.com/v2/resize:fit:1358/1*ahpxPO0jLGb9EWrY2qQPhg.jpeg",
  },
];
