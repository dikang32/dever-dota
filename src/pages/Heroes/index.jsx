import {
  Box,
  Card,
  CardContent,
  FormControl,
  ImageList,
  ImageListItem,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import Header from "../../components/header";
// import { Search } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { getImageUrl } from "../../utils/image";
import { HEROES } from "../../data/heroes";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Heroes() {
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
          CHOOSE YOUR HERO
        </Typography>
        <Typography variant="h5" align="center" mb={10}>
          From magical tacticians to fierce brutes and cunning rogues, Dota 2's
          hero pool is massive and limitlessly diverse. Unleash incredible
          abilities and devastating ultimates on your way to victory.
        </Typography>
        <Card
          sx={{
            width: "100%",
            padding: "8px 24px",
            borderLeft: "5px solid rgb(24, 118, 209)",
            marginBottom: "16px",
          }}
        >
          <CardContent
            sx={{
              padding: "0",
              // paddingBottom: 0,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            style={{ paddingBottom: 0 }}
          >
            <Typography variant="body1">FILLTER HEROES</Typography>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                ROLE
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                // value={age}
                defaultValue={"all"}
                // onChange={handleChange}
                label="role"
              >
                <MenuItem value={"all"}>All</MenuItem>
                <MenuItem value={"Carry"}>Carry</MenuItem>
                <MenuItem value={"Escape"}>Escape</MenuItem>
                <MenuItem value={"Nuker"}>Nuker</MenuItem>
                <MenuItem value={"Support"}>Support</MenuItem>
                <MenuItem value={"Disabler"}>Disabler</MenuItem>
                <MenuItem value={"Pusher"}>Pusher</MenuItem>
                <MenuItem value={"Durable"}>Durable</MenuItem>
                <MenuItem value={"Initiator"}>Initiator</MenuItem>
                <MenuItem value={"Jungle"}>Jungle</MenuItem>
                <MenuItem value={"Durable"}>Durable</MenuItem>
                <MenuItem value={"Disabler"}>Disabler</MenuItem>
                <MenuItem value={"Nuker"}>Nuker</MenuItem>
                <MenuItem value={"Escape"}>Escape</MenuItem>
              </Select>
            </FormControl>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </CardContent>
        </Card>
        <ImageList sx={{ width: "100%" }} cols={4} gap={16}>
          {HEROES.map((hero, index) => (
            <>
              <ImageListItem key={hero}>
                <img src={getImageUrl(hero)} style={{ borderRadius: "4px" }} />
                <Typography>Name: {hero.localized_name}</Typography>
                <Typography variant="caption">
                  Role: {hero.roles.join()}
                </Typography>
              </ImageListItem>
            </>
          ))}
        </ImageList>
      </Box>
    </>
  );
}

export default Heroes;
