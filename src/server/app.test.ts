import request from 'supertest'
import app from './app'

describe('Integration tests: App', () => {
    test('GET /health should return 200 response with body', (done) => {
        request(app)
            .get('/health')
            .end((err, res) => {
                expect(res.status).toBe(200)
                expect(res.body.status).toEqual('healthy')
                done()
            })
    })

    test('GET /home should return 200 response with body', (done) => {
        request(app)
            .get('/home')
            .end((err, res) => {
                expect(res.status).toBe(200)
                expect(res.body.express).toEqual('YOUR EXPRESS BACKEND IS CONNECTED TO REACT')
                done()
            })
    })
})
