import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'; // useHistory instead of useNavigate for v4

const useStyles = makeStyles(() => ({
    grow: {
        flexGrow: 1,
    },
    buttonLabel: {
        textTransform: 'none', // Optional: stops the button text from being uppercase
    }
}));

function Navigation() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const history = useHistory(); // useHistory is used in place of useNavigate in Material-UI v4 with React Router v5
    const classes = useStyles();

    const handleLoginLogout = () => {
        if (isAuthenticated) {
            setIsAuthenticated(false);  // Set authentication state to false
            history.push('/');  // Redirect to the home page
        } else {
            setIsAuthenticated(true);  // Set authentication state to true
            history.push('/auth/signin');  // Redirect to the sign-in page
        }
    };

    return (
      <Box className={classes.grow}>
          <AppBar position="static">
              <Toolbar>
                  <Typography
                    variant="h6"
                    component="div"
                    className={classes.grow}
                    onClick={() => history.push('/')}
                    style={{ cursor: 'pointer' }} // Add cursor pointer for better UX
                  >
                      Home
                  </Typography>
                  <Button
                    color="inherit"
                    onClick={handleLoginLogout}
                    classes={{ label: classes.buttonLabel }} // Apply custom label class
                  >
                      {isAuthenticated ? 'Log Out' : 'Log In'}
                  </Button>
              </Toolbar>
          </AppBar>
      </Box>
    );
}

export default Navigation;
