import React from 'react'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    App: {
        textAlign: 'center',
    },
    AppLogo: {
        height: '40vmin',
        pointerEvents: 'none',
        animation: `$AppLogoSpin 1s ${theme.transitions.easing.easeInOut}`,
    },
    AppHeader: {
        backgroundColor: '#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
    },
    AppLink: {
        color: '#61dafb',
    },
    '@keyframes AppLogoSpin': {
        from: {
            transform: 'rotate(0deg)',
        },
        to: {
            transform: 'rotate(360deg)',
        },
    },
}))

export default function App() {
    const classes = useStyles()

    return (
        <Box className={classes.App}>
            <Typography variant="h1" className={classes.AppHeader}>
                <img src="/logo.svg" className={classes.AppLogo} alt="logo" />
                <Typography>
                    Edit <code>src/App.tsx</code> and save to reload.
                </Typography>
                <a className={classes.AppLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </Typography>
        </Box>
    )
}
