import app from './app'

const port: number = +(process.env.PORT || 3001)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
