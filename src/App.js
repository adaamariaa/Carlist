import './App.css';
import Carlist from './components/Carlist';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography} from '@mui/material';
import { Box } from "@mui/material";
import AddCar from './components/AddCar';


function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            CarShop
          </Typography>
        </Toolbar>
      </AppBar>
      </Box>
      <Carlist />
    </div>
  );
}

export default App;
