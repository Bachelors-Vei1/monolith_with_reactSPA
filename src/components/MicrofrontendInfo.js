import React from 'react';
import Button from '@material-ui/core/Button';
import { Container, Typography, Box, Grid, Paper, Link } from '@material-ui/core';

function MicrofrontendInfo() {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          Monolith Architecture
        </Typography>
        <Typography variant="body1" gutterBottom>
          Discover how microfrontend architecture breaks up the monolithic frontend into manageable pieces,
          making updates and maintenance a breeze for development teams.
        </Typography>
        <Paper elevation={3} style={{ padding: 16, marginTop: 8, marginBottom: 8 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Advantages
              </Typography>
              <Typography variant="body2">
                - Decoupled codebases enable independent updates<br/>
                - Teams can choose technology stacks that best suit their module<br/>
                - Scaling becomes more manageable as teams can focus on specific frontends
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Considerations
              </Typography>
              <Typography variant="body2">
                - Coordination is required to ensure consistency across the user experience<br/>
                - Overhead can increase with numerous independent deployments<br/>
                - Integration and end-to-end testing may become more complex
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Button variant="contained" color="secondary" style={{ marginTop: 16 }}>
          Explore Learning Courses
        </Button>
        {/* Replace 'your_image_id' with the Unsplash Image ID */}
        <img src="https://source.unsplash.com/your_image_id/800x600" alt="Microfrontend Concept" style={{ marginTop: 16, width: '100%', height: 'auto' }} />
      </Box>
      <Box component="footer" borderTop={1} my={3}>
        <Container maxWidth="sm">
          <Typography variant="body2" color="textSecondary" align="center">
            {/* Replace '#' with actual links */}
            <Link color="inherit" href="#">
              Terms of Service
            </Link> |
            <Link color="inherit" href="#">
              Privacy Policy
            </Link>
          </Typography>
        </Container>
      </Box>
    </Container>
  );
}

export default MicrofrontendInfo;