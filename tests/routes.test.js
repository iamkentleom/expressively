const axios = require('axios')
const { BASE_URL, TIMEOUT } = require('./test_config.json')
const { version } = require('../package.json')

test('Home route message', async () => {
    const expected = {
        message: `Welcome to expressively v${ version }!`
    }
    const result = await axios.get(BASE_URL)
    expect(result.data).toEqual(expected)
}, TIMEOUT)

test('About route message', async () => {
    const expected = {
        message: "This is the about route."
    }
    const result = await axios.get(`${ BASE_URL }/about`)
    expect(result.data).toEqual(expected)
}, TIMEOUT)