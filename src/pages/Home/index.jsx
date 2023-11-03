import { Box, Button, Stack, Typography } from "@mui/material";
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
          <Button variant="outlined">YOUR HEROES</Button>
          <Button variant="contained">CREATE BATTLE</Button>
        </Stack>
      </Box>
    </>
  );
}

export default Home;
