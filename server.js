const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const parks = {
    'yosemite': {
        'name': 'Yosemite',
        'state': 'California',
        'icons': 'Halfdome, El Capitan',
        'terrain': 'Mountains'
    },
    'yellowstone': {
        'name': 'Yellowstone',
        'state': 'Wyoming',
        'icons': 'Old Faithful',
        'terrain': 'Mountains, Plains'
    },
    'unknown': {
        'state': 'unknown',
        'icons': 'unknown',
        'terrain': 'unknown'
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:park', (request, response) => {
    const parkName = request.params.park.toLocaleLowerCase()
    if (parks[parkName]) {
        response.json(parks[parkName])
    } else {
        response.json(parks['unknown'])
    }
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}`)
})