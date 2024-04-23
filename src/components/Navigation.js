import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'; // useHistory instead of useNavigate for v4

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
        a: {
            textDecoration: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
          theme.palette.type === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
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
          <AppBar
            position="static"
            color="default"
            elevation={0}
            className={classes.appBar}
          >
              <Toolbar className={classes.toolbar}>
                  <Typography
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={classes.grow}
                    onClick={() => history.push('/')}
                    style={{ cursor: 'pointer' }} // Add cursor pointer for better UX
                  >
                      Home
                  </Typography>
                  <Button
                    color="primary"
                    variant="outlined"
                    className={classes.link}
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
