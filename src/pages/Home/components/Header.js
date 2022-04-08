import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import  Toolbar from '@material-ui/core/Toolbar';
const useStyles = makeStyles({
    appBar:{
        boxShadow: 'none',
    }
});

function Header(){
    const classes = useStyles();
    return(
        <AppBar position='fixed' color='inherit' className={classes.appBar}>
            <Toolbar>
                <img src="/images/logo.png" alt="logo"/>
                {/*<div>
                    <a href="/">Conecta Dev</a>
                    <input type="text"></input>
                </div>
                <div >
                    <Button color= 'primary' variant="contained">
                        Novo Post
                    </Button>
                        <span>img1</span>
                        <span>img2</span>
                </div>*/}
            </Toolbar>
        </AppBar>
    );
}

export default Header;