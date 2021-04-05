import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { checarHabitaciones as calcFn } from "./../Functions/Functions";
import { setRooms, setResult } from "./../Redux/rooms/roomsActions";

const MainPage = ({ rooms, setResult, setRooms, ...restProps }) => {
  const [premiumRooms, setPremiumRooms] = React.useState(rooms.premiumRooms);
  const [economyRooms, setEconomyRooms] = React.useState(rooms.economyRooms);

  const handleClick = () => {
    let ans = calcFn(premiumRooms, economyRooms);
    setRooms({
      premiumRooms,
      economyRooms,
    });
    setResult(ans);
  };

  return (
    <div className="main-page flex">
      <div className="main-page-container">
        <Typography variant="h4" align="center" style={{ marginBottom: 30 }}>
          <b>Earning Calculator</b>
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
          <Grid item xs={12}>
            <Typography align="center">
              Premium Rooms Earnings: <b>{rooms.result[0]}</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center">
              Economy Rooms Earnings: <b>{rooms.result[1]}</b>
            </Typography>
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
              Total:{" "}
              <b>
                {isNaN(rooms.result[0] + rooms.result[1])
                  ? "0"
                  : rooms.result[0] + rooms.result[1]}
              </b>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const mapState = (store) => ({
  rooms: store.rooms,
});

const actions = {
  setRooms,
  setResult,
};

export default connect(mapState, actions)(MainPage);
