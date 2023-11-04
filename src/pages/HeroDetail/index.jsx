import { useParams } from "react-router-dom";
import Header from "../../components/header";
import { HEROES } from "../../data/heroes";
import {
  Box,
  Breadcrumbs,
  CardMedia,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
function HeroDetail() {
  const { name } = useParams();
  const myHero = HEROES.filter((hero) => hero.localized_name === name)[0];

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
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            underline="hover"
            key="1"
            color="inherit"
            href="/home"
            // onClick={handleClick}
          >
            Dota 2 MUI
          </Link>
          ,
          <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/heroes"
            // onClick={handleClick}
          >
            Heroes
          </Link>
          ,
          <Typography key="3" color="text.primary">
            {myHero?.localized_name}
          </Typography>
          ,
        </Breadcrumbs>
        <Stack mt={4} flexDirection="row" alignItems="flex-start" gap={4}>
          <Stack>
            <Typography variant="h1" mb={4}>
              {myHero?.localized_name}
            </Typography>
            <Typography variant="h5" sx={{ opacity: "0.5" }}>
              ATTACK TYPE
            </Typography>
            <Stack flexDirection="row">
              <LocalPoliceIcon style={{ marginTop: "4px" }} />
              <Typography variant="h6">
                {myHero?.attack_type.toUpperCase()}
              </Typography>
            </Stack>
            <Stack mt={4}>
              <Typography variant="h5" sx={{ opacity: "0.5" }}>
                ROLE
              </Typography>
              <Typography variant="h6">
                {myHero?.roles.join().toUpperCase()}
              </Typography>
            </Stack>
          </Stack>
          <img
            src={`https://api.opendota.com${myHero?.img}`}
            style={{ width: "50%", borderRadius: "4px" }}
          />
        </Stack>
      </Box>
    </>
  );
}

export default HeroDetail;
