import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  IconButton,
  Icon,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

function AppBar() {
  const navigate = useNavigate();
  return (
    <MuiAppBar component="nav">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Система курсов
        </Typography>
        <IconButton
          size="large"
          color="inherit"
          onClick={() => navigate('/login')}
        >
          <Icon>logout</Icon>
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
