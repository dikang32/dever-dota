import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../../components/header";

function Home() {
  return (
    <>
      <Header></Header>
      <Box
        sx={{
          mt: "160px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">WELCOME TO</Typography>
        <Typography variant="h1" sx={{ fontWeight: 700 }}>
          DOTA 2 MUI
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link to={"/heroes"}>
            <Button variant="outlined">YOUR HEROES</Button>
          </Link>
          <Link to={"/battle"}>
            <Button variant="contained">CREATE BATTLE</Button>
          </Link>
        </Stack>
      </Box>
    </>
  );
}

export default Home;
