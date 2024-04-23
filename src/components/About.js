import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f9',
        color: '#333',
        lineHeight: 1.6,
    },
    profilePic: {
        width: 150,
        height: 150,
        borderRadius: '50%',
        border: '3px solid #333',
    },
    title: {
        color: '#555',
        fontStyle: 'italic',
        margin: '20px 0 5px',
    },
    description: {
        width: '80%',
        maxWidth: 600,
        margin: '20px auto',
    },
    link: {
        margin: '0 10px',
        textDecoration: 'none',
        color: '#333',
        borderBottom: '2px solid transparent',
        '&:hover': {
            borderBottom: '2px solid #333',
        },
    }
}));

function AboutMe() {
    const classes = useStyles();

    const name = 'Nikita Hvoina';
    const jobTitle = 'Dotnet Developer';
    const description = "This is my demo for my bachelor's thesis. It was pain.";

    return (
      <div className={classes.container}>
          <div>
              <img
                src="https://via.placeholder.com/150"
                alt="Profile Picture"
                className={classes.profilePic}
              />
          </div>
          <h1>{name}</h1>
          <p className={classes.title}>{jobTitle}</p>
          <p className={classes.description}>{description}</p>
          <div>
              <a href="https://lv.linkedin.com/in/nikita-hvoina-995959212" className={classes.link}>
                  LinkedIn
              </a>
              <a href="https://github.com/Vei1x" className={classes.link}>
                  GitHub
              </a>
          </div>
      </div>
    );
}

export default AboutMe;
