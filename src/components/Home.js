import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  TextField,
  Link
} from '@material-ui/core';

function Home() {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h2" gutterBottom>
          Understanding Microfrontends
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Microfrontend architecture is a design approach in which a frontend app is decomposed into individual,
          semi-independent "micro" apps working loosely together.
        </Typography>

        <img src="https://source.unsplash.com/featured/?technology,programming" alt="Technology"
             style={{marginTop: 16, width: '100%', height: 'auto'}}/>

        <Paper elevation={3} style={{padding: 16, marginTop: 8, marginBottom: 8}}>
          <Typography variant="h4" gutterBottom>
            Pros of Microfrontends
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="body2">
                Microfrontends allow for better scalability, smaller, more cohesive codebases, and the possibility to
                use multiple frameworks. They enable autonomous teams to develop, deploy, and scale their services
                independently.
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <Paper elevation={3} style={{padding: 16, marginTop: 8, marginBottom: 8}}>
          <Typography variant="h4" gutterBottom>
            Cons of Microfrontends
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="body2">
                However, this approach can lead to challenges with maintaining a consistent UI/UX, increased complexity
                of the overall system, and potential for duplicated dependencies across micro apps.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Link></Link>

        <Button variant="contained" color="secondary" fullWidth={true} size="large" style={{marginTop: 20}}
                disableElevation>
          Course
        </Button>
      </Box>

      <Paper elevation={3} style={{padding: 16, margin: '16px auto'}}>
        <Typography variant="h4" component="h1" gutterBottom>
          Stay Updated
        </Typography>
        <Typography variant="subtitle1" component="h2" gutterBottom>
          Subscribe to our newsletter
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={5}>
            <TextField fullWidth id="name-input" label="Your Name" variant="outlined"/>
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField fullWidth id="email-input" label="Your Email" variant="outlined"/>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button fullWidth variant="contained" color="primary" disableElevation>
              Subscribe
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Container maxWidth="sm">
        <Typography variant="body2" color="textSecondary" align="center" style={{padding: 16}}>
          <Link color="inherit" href="#">
            Terms of Service
          </Link>
          <Typography variant="caption">
            •
          </Typography>
          <Link color="inherit" href="#">
            Privacy Policy
          </Link>
        </Typography>
      </Container>

    </Container>
  );
}

export default Home;
