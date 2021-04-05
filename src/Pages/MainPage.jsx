import {
  Button,
  Grid,
  OutlinedInput,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";

const MainPage = () => {
  const [premiumRooms, setPremiumRooms] = React.useState(null);
  const [economyRooms, setEconomyRooms] = React.useState(null);
  const [result, setResult] = React.useState(123);

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
              placeholder={1}
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
              placeholder={1}
              type="number"
              value={economyRooms}
              onChange={(e) => setEconomyRooms(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined" className="outline-btn">
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
