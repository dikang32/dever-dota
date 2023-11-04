import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Header from "../../components/header";
import { useState } from "react";
import { HEROES } from "../../data/heroes";

function Battle() {
  const [randomHero1, setRandomHero1] = useState();
  const [randomHero2, setRandomHero2] = useState();
  const handleRandom1 = () => {
    const randomIndex1 = Math.floor(Math.random() * HEROES.length);
    setRandomHero1(HEROES[randomIndex1]);
  };
  const handleRandom2 = () => {
    const randomIndex2 = Math.floor(Math.random() * HEROES.length);
    setRandomHero2(HEROES[randomIndex2]);
  };
  return (
    <>
      <Header></Header>
      <Box
        maxWidth="1200px"
        // width="100%"
        // marginLeft="auto"
        sx={{
          padding: "80px 24px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700 }} mb={3}>
          DOTA 2 FUNNY BATTLE
        </Typography>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          style={{ padding: 0 }}
        >
          <Stack>
            <Box
              sx={{
                "& > :not(style)": {
                  m: 0,
                  width: 400,
                  height: 200,
                  backgroundColor: "rgb(238, 238, 238)",
                },
              }}
            >
              <Paper>
                {randomHero1 && (
                  <img
                    src={`https://api.opendota.com${randomHero1.img}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "4px",
                    }}
                  />
                )}
              </Paper>
            </Box>
            <Button
              variant="contained"
              style={{ marginTop: "8px" }}
              onClick={handleRandom1}
            >
              RANDOM
            </Button>
          </Stack>
          <Button variant="contained">FIGHT</Button>
          <Stack>
            <Box
              sx={{
                "& > :not(style)": {
                  m: 0,
                  width: 400,
                  height: 200,
                  backgroundColor: "rgb(238, 238, 238)",
                },
              }}
            >
              <Paper>
                {randomHero2 && (
                  <img
                    src={`https://api.opendota.com${randomHero2.img}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "4px",
                    }}
                  />
                )}
              </Paper>
            </Box>
            <Button
              variant="contained"
              style={{ marginTop: "8px" }}
              onClick={handleRandom2}
            >
              RANDOM
            </Button>
          </Stack>
        </Container>
        <Divider
          style={{
            margin: "32px 0",
            width: "100%",
            bgcolor: "background.paper",
          }}
        />
      </Box>
    </>
  );
}

export default Battle;
