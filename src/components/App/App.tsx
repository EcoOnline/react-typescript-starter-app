import React from 'react'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'

const useStyles = makeStyles(() => ({
    body: {
        margin: 0,
    },
    code: {
        fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
    },
    app: {
        textAlign: 'center',
    },
    appLogo: {
        height: '40vmin',
        pointerEvents: 'none',
    },
    appHeader: {
        backgroundColor: '#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
    },
    appLink: {
        color: '#61dafb',
    },
}))

export default function App() {
    const classes = useStyles()
    const [data, setData] = React.useState<string | undefined>()
    const [hasComponentInitialized, setHasComponentInitialized] = React.useState<boolean>(false)

    const fetchData = React.useCallback(async () => {
        const result = await fetch('/home')
        const response = await result.json()
        setData(response.express)
    }, [])

    React.useEffect(() => {
        if (!data && !hasComponentInitialized) {
            fetchData()
            setHasComponentInitialized(true)
        }
    }, [data, hasComponentInitialized, fetchData])

    return (
        <Box className={clsx(classes.body, classes.app)}>
            <Typography variant="h1" className={classes.appHeader}>
                <img src="/logo.svg" className={classes.appLogo} alt="logo" />
                <Typography>Welcome to react-typescript-starter-app</Typography>
                {!!data && <Typography>Server Response: {data}</Typography>}
            </Typography>
        </Box>
    )
}
