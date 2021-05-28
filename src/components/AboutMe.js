import React from 'react';
import './AboutMe.css';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles ((theme) => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        height: 140,
        width: 100,
      },
      control: {
        padding: theme.spacing(2),
      },
}));


const AboutMe = () => {
    const classes = useStyles();

    return ( 
            <div className="aboutme">
                <Helmet>
                    <title>About Me | Jeremy Shih</title>
                </Helmet>
                
                {/* <div className="flex-container">
                    <div className="flex-item"> 1</div>
                    <div className="flex-item"> 2</div>
                </div> */}
                
                <Grid container justify="center" spacing={10}>
                    <Grid item xs={6}>
                        <h3>About Me</h3>
                        <br/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi voluptas numquam totam odio fuga, quos ducimus quaerat aliquid inventore, pariatur enim animi corporis expedita? Dicta ipsam necessitatibus nihil nisi exercitationem.</p>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} />
                    </Grid>
                </Grid>

                <Grid container justify="center" spacing={2}>
                    <Grid item xs={4}>
                        email IMAGE
                    </Grid>
                    <Grid item xs={4}>
                        <p>jeremyshih12@gmail.com</p>
                    </Grid>
                </Grid>

                <Grid container justify="center" spacing={2}>
                    <Grid item xs={4}>
                        house IMAGE
                    </Grid>
                    <Grid item xs={4}>
                        <p>Toronto, Ontario, Canada</p>
                    </Grid>
                </Grid>

                <Grid container justify="center" spacing={2}>
                    <Grid item xs={4}>
                        Phone IMAGE
                    </Grid>
                    <Grid item xs={4}>
                        <p>+1(647)-449-6001</p>
                    </Grid>
                </Grid>

                <Grid container justify="center" spacing={1}>
                    <Grid item xs={2}>
                        Kaggle Image
                    </Grid>
                    <Grid item xs={2}>
                        Github Image
                    </Grid>
                    <Grid item xs={2}>
                        Linkedin Image
                    </Grid>
                    <Grid item xs={2}>
                        Facebook Image
                    </Grid>
                    <Grid item xs={2}>
                        Instagram Image
                    </Grid>
                    <Grid item xs={2}>
                        Email Image
                    </Grid>
                </Grid>

            </div>
     );
}
 
export default AboutMe;