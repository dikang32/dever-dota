import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Header from "../../components/header";
import { useEffect, useState } from "react";
import { HEROES } from "../../data/heroes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Battle() {
  const [randomHero1, setRandomHero1] = useState(
    JSON.parse(localStorage.getItem("hero1")) ?? ""
  );
  const [randomHero2, setRandomHero2] = useState(
    JSON.parse(localStorage.getItem("hero2")) ?? ""
  );
  const handleRandom1 = () => {
    const randomIndex1 = Math.floor(Math.random() * HEROES.length);
    setRandomHero1(HEROES[randomIndex1]);
  };
  const handleRandom2 = () => {
    const randomIndex2 = Math.floor(Math.random() * HEROES.length);
    setRandomHero2(HEROES[randomIndex2]);
  };
  useEffect(() => {
    localStorage.setItem("hero1", JSON.stringify(randomHero1));
  }, [randomHero1]);
  useEffect(() => {
    localStorage.setItem("hero2", JSON.stringify(randomHero2));
  }, [randomHero2]);

  const [open, setOpen] = useState(false);

  const handleFight = () => {
    if (randomHero1 && randomHero2) {
      setOpen(true);
    } else {
      toast.error("Please pick your hero and your enemy!!!");
    }
  };

  const handleClose = () => {
    setOpen(false);
    // setRandomHero1(localStorage.removeItem("hero1"))
    // setRandomHero2(localStorage.removeItem("hero2"))
    localStorage.clear();
    setRandomHero1("");
    setRandomHero2("");
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
          <Button variant="contained" onClick={handleFight}>
            FIGHT
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title" textAlign={"center"}>
              {"Result"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                That was an excellent match, both heroes deserve to be honored.
              </DialogContentText>

              <Typography variant="h4" margin={2} textAlign={"center"}>
                {randomHero1.base_attack > randomHero2.base_attack
                  ? "YOU WIN!!!"
                  : "YOU CAN TRY AGAIN"}
              </Typography>
              <Stack flexDirection={"row"} justifyContent={"space-between"}>
                <Stack alignItems={"center"}>
                  <img
                    src={`https://api.opendota.com${randomHero1.img}`}
                    style={{ width: "200px" }}
                  />
                  <Typography>
                    Acttack point: {randomHero1.base_attack}
                  </Typography>
                </Stack>
                <Stack alignItems={"center"}>
                  <img
                    src={`https://api.opendota.com${randomHero2.img}`}
                    style={{ width: "200px" }}
                  />
                  <Typography>
                    Acttack point: {randomHero2.base_attack}
                  </Typography>
                </Stack>
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} autoFocus>
                PLAY AGAIN
              </Button>
            </DialogActions>
          </Dialog>
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
