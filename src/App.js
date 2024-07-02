import odd_logo from './odd_logo.jpg';
import webpage_img from './odd_vector.png';
import './App.css';
import { Box, Button, Typography, Grid, Fade } from '@mui/material';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import UpdateIcon from '@mui/icons-material/Update';
import SourceIcon from '@mui/icons-material/Source';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import { useState, useEffect } from 'react';

function App() {
  const [rotation, setRotation] = useState(0);
  const [fadeTrigger, setFadeTrigger] = useState({
    trigger1: true,
    trigger2: false,
    trigger3: false,
  });

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;

    const triggerHeight1 = 900; 
    const triggerHeight2 = 1300; 

    if (scrollPosition >= triggerHeight2) {
      setRotation(180); // Rotate to 180 degrees
      setFadeTrigger({ trigger1: false, trigger2: false, trigger3: true });
    } else if (scrollPosition >= triggerHeight1) {
      setRotation(90); // Rotate to 90 degrees
      setFadeTrigger({ trigger1: false, trigger2: true, trigger3: false });
    } else {
      setRotation(0); // Default rotation
      setFadeTrigger({ trigger1: true, trigger2: false, trigger3: false });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <Box display="flex" flexDirection="column" height="100vh">

      <Box>
        <Box display="flex" flexDirection="row" alignItems="center" sx={{paddingTop:5, paddingLeft:10}}>
          <img src={odd_logo} width={200}/>
        </Box>

        <Grid container>
          <Grid item sm={12} md={6} padding={8}>
            <Box display="flex" flexDirection="column" textAlign="center" justifyContent="center" alignItems="center">
              <Typography variant="h3" marginBottom={5}>
              Giving your data scientists that unfair advantage.
              </Typography>

              <Typography variant="body2" marginBottom={5}>
              Better and quicker data science, without the heavy lifting.
              </Typography>

              <Fade in={fadeTrigger.trigger1} timeout={500}>
                <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" width={300} marginTop={10}>
                  <SourceIcon color="primary" sx={{fontSize:60}}/>
                  <Typography variant="h6"> 
                    Plug & Play
                  </Typography>
                  <Typography variant="body2">
                    Works with GCP, Azure, AWS, most ERP and CRMs.
                  </Typography>
                </Box>
              </Fade>

              <Fade in={fadeTrigger.trigger2} timeout={500}>
                <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" width={300} marginTop={10}>
                  <AnalyticsIcon color="primary" sx={{fontSize:60}}/>
                  <Typography variant="h6"> 
                    Build for any Use Case
                  </Typography>
                  <Typography variant="body2">
                    Build your own data science solution with a smaller team of engineers.
                  </Typography>
                </Box>
              </Fade>

              <Fade in={fadeTrigger.trigger3} timeout={500}>
                <Box display="flex" flexDirection="column" sx={{marginBottom:5, marginTop: 5}} alignItems="center" justifyContent="center" textAlign="center" width={300}>
                  <UpdateIcon color="primary" sx={{fontSize:60}}/>
                  <Typography variant="h6"> 
                    Real time Data Hypothesisation
                  </Typography>
                  <Typography variant="body2">
                  Monitor for data patterns without the HR or computing costs as before.
                  </Typography>
                </Box>
              </Fade>

            </Box>
          </Grid>

          <Grid item sm={0} md={6} padding={15} sx={{display: {xs: 'none', md: 'flex'}, overflow: 'hidden'}}>
            <img
              src={webpage_img}
              alt="Rotating"
              style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.5s' }}
              height={800}
            />
          </Grid>
        </Grid>

        <Box display="flex" flexDirection="column" sx={{gap:2}} alignItems="center" textAlign="center" marginTop={10} alignSelf="center" paddingBottom={3}>
          <Typography variant="body2"> 
            Speak with us to find out more!
          </Typography>

          <Button variant="contained" size="medium" sx={{width:200, marginBottom:5}} href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3veUkDqnSNlBlc6zM04NB0XiocmJh7bYi5LFSb8nD1_rOYdrYR6eQbEx8Q1pIjGFFeLnSdgNYy">
            Contact Us
          </Button>

          <Typography variant="body2">
            OpenDeepData.ai 2024 | All rights reserved.
          </Typography>
        </Box>
      </Box>

    </Box>
    </ThemeProvider>
  );
}

export default App;
