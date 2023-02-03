import React from 'react'
import NavBar from '../components/NavBar'
import about_banner from '../images/about-banner-1.png';
import about_banner_2 from '../images/about-banner-2.png';
import sm_fb from '../images/sm-fb.png';
import sm_ig from '../images/sm-ig.png';
import sm_ln from '../images/sm-ln.png';
import sm_p from '../images/sm-p.png';
import sm_tumb from '../images/sm-tumb.png';
import sm_tw from '../images/sm-tw.png';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, useNavigate } from 'react-router-dom'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import axios from 'axios'


const About = (props) => {

  return (
    <div>

      <NavBar theme={props.theme} setTheme={props.setTheme} />


      <div id="about_banner">
        <img src={about_banner} alt={"about_banner"} />
      </div>

      <div>
        <img src={about_banner_2} alt={"about_banner_2"} />
      </div>

      <div id="about" className="container-sm text-center mt-4">
        <h3>Who We Are</h3>
        <p>We are Budget Guard. A team of friendly and caring builders that have risen
          from the depths of the Coding Dojo. With the mission of helping families, friends,
          and couples outsmarting money together, everyone can conquer their own finances and
          expenditures.  We believe that building better financial tools represent our greatest
          opportunity to liberate families from financial stress.  We contribute to huan progress
          by cultivating trust and transparency, delivering clarity and insight, enriching
          autonomy and wellness.</p>
        <h3>Our Story</h3>
        <p>In 2023, John and Austin started Budget Guard to help friends and families develop better
          financial literacy and habits. After seeing that most friends were using spreadsheets to
          manage their finances, Budget Guard was launched to disentangle the difficulties of people's
          financial troubles with the thought in mind of a friendly, easy-to-use user interface.
        </p>
        <h3>Our Team</h3>
        <p>Our small team consists of passionate entrepreneurs, designers, and builders
          hoping ot make a long-lasting impact on the lives of millions.
        </p>
      </div>

      <div id={props.theme === 'dark' ? "about-contact" : "about-contact-2"}>
        <Container component="main" maxWidth="sm" className="rounded" sx={props.theme === 'dark' ? { backgroundColor: "rgb(18,18,18)" } : { backgroundColor: "rgb(255,255,255)" }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar id={props.theme === 'dark' ? "contact-icon-1" : "contact-icon-2" } sx={{ m: 1 }}>
              <MailOutlineIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Contact Us
            </Typography>
            <Typography component="p" variant="p" className="text-center mt-2">
            If you wish to contact us, please fill out the form below and one of our team representatives will reach out within 48 hours.
            </Typography>
            {/* {
            errors.map((err, i) => <p key={i}>{err}</p>)
          } */}
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="name"
                    label="Name"
                    type="name"
                    id="name"
                    autoComplete="new-name"
                  // onChange={e => setPassword(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="email"
                    fullWidth
                    id="email"
                    label="Email"
                  // onChange={e => setEmail(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="message"
                    label="Message"
                    type="message"
                    id="message"
                  // onChange={e => setConfirmedPassword(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Container>


        {/* SOCIAL MEDIA ICONS */}
        < div id="sm-icons" className="d-flex justify-content-center mt-5" >
          <div className="d-flex gap-4">
            <img src={sm_fb} alt={sm_fb} />
            <img src={sm_ig} alt={sm_ig} />
            <img src={sm_ln} alt={sm_ln} />
            <img src={sm_tw} alt={sm_tw} />
            <img src={sm_p} alt={sm_p} />
            <img src={sm_tumb} alt={sm_tumb} />
          </div>
        </div >

      </div >

    </div>
  )

}

export default About