import { Box, Card, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Characters",
    img: "https://starwars-visualguide.com/assets/img/categories/character.jpg",
  },
  {
    name: "Vehicle",
    img: "https://starwars-visualguide.com/assets/img/categories/vehicles.jpg",
  },
  {
    name: "Films",
    img: "https://starwars-visualguide.com/assets/img/categories/films.jpg",
  },
  {
    name: "Species",
    img: "https://starwars-visualguide.com/assets/img/categories/species.jpg",
  },
  {
    name: "Starships",
    img: "https://starwars-visualguide.com/assets/img/categories/starships.jpg",
  },
  {
    name: "Planets",
    img: "https://starwars-visualguide.com/assets/img/categories/planets.jpg",
  },
];

const HomePage: React.FC = () => {
  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {categories.map((category: { name: string; img: string }) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Link
              to={"/" + category.name.toLowerCase()}
              style={{ textDecoration: "none" }}
            >
              <Card
                sx={{
                  position: "relative",
                  height: "10rem",
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "center",
                  transform: "translate(0, 0)",
                  "&:hover": {
                    transition: "all 0.2s ease-in-out",
                    boxShadow: "0px 4px 8px rgba(38, 38, 38, 0.2)",
                    transform: "translate(0, -2px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    background: "rgba(0,0, 0.7)",
                    zIndex: 1,
                  }}
                >
                  <Typography
                    sx={{
                      position: "relative",
                      color: "#FFE81F",
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                      textAlign: "center",
                    }}
                  >
                    {category.name}
                  </Typography>
                </Box>

                <img
                  loading="lazy"
                  src={category.img}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    zIndex: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Card>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default HomePage;
