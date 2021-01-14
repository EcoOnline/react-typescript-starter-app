import path from 'path'
import express from 'express'

const app: express.Express = express()
const port: number = +(process.env.PORT || 3001)
const buildDir: string = path.join(process.cwd() + '/build')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(buildDir))

app.get('/home', (req: express.Request, res: express.Response) => {
    res.json({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
})

app.get('/*', function (req, res) {
    res.sendFile(path.join(buildDir, 'index.html'))
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

export default app
