import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";

const CommonCard = ({ data }) => {
  return (
    <Container sx={{ py: 2 }}>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item md={4} sm={4} xs={12} key={item.id}>
            <Card
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                borderRadius: 0,
                bgcolor: "#cbd5e1",
                pb: 1,
                height: { md: 450, xs: 400 },
              }}
            >
              <Box sx={{ maxWidth: { md: 300, xs: 200 }, mt: 2 }}>
                <img src={item.logo} alt="Logo" />
              </Box>
              <Box
                sx={{
                  bgcolor: "#334155",
                  p: 1,
                  position: "absolute",
                  top: 0,
                  right: 0,
                  height: 80,
                }}
              />

              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { md: "25px", xs: "18px" },
                  color: "#334155",
                  mt: 2,
                }}
              >
                {item.title}
              </Typography>
              <Box
                sx={{
                  maxWidth: { md: 300, xs: 220 },
                  mb: 2,
                  fontSize: "15px",
                }}
              >
                {item.Dec}
              </Box>

              <Button
                variant="contained"
                sx={{
                  mb: 2,
                  fontWeight: "bold",
                  bgcolor: "#334155",
                  color: "whitesmoke",
                  borderRadius: 0,
                  "&:hover": {
                    transform: "scale(1.1)",
                    bgcolor: "#456789", // Change this to the desired hover color
                  },
                }}
              >
                Go To
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CommonCard;
