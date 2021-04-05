import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import { checarHabitaciones as calcFn } from "./../Functions/Functions";

const MainPage = () => {
  const [premiumRooms, setPremiumRooms] = React.useState(1);
  const [economyRooms, setEconomyRooms] = React.useState(1);
  const [result, setResult] = React.useState(123);

  const handleClick = () => {
    let ans = calcFn(premiumRooms, economyRooms);
    setResult(ans);
    localStorage.setItem("premiumRooms", premiumRooms);
    localStorage.setItem("economyRooms", economyRooms);
  };

  React.useEffect(() => {
    try {
      let preR = Number(localStorage.getItem("premiumRooms"));
      let ecoR = Number(localStorage.getItem("economyRooms"));
      setPremiumRooms(preR);
      setEconomyRooms(ecoR);
      handleClick();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="main-page flex">
      <div className="main-page-container">
        <Typography variant="h4" align="center" style={{ marginBottom: 30 }}>
          <b>Rooms Calculator</b>
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <Typography>Premium Rooms #</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              size="small"
              className="outline-input"
              fullWidth
              //   placeholder="1"
              type="number"
              value={premiumRooms}
              onChange={(e) => setPremiumRooms(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>Economy Rooms #</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              size="small"
              className="outline-input"
              fullWidth
              //   placeholder="Economy Rooms"
              type="number"
              value={economyRooms}
              onChange={(e) => setEconomyRooms(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              className="outline-btn"
              onClick={handleClick}
            >
              Calculate
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Typography align="right" variant="h6">
              <b>${result}</b>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default MainPage;
