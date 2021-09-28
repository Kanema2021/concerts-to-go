


const fetch = require("node-fetch")
const bandsInTown = "https://rest.bandsintown.com/artists/coldplay/?api_id=a3cf4c822335efb2d9c716c941c4a393"

// function getConcerts() {
const concertSearch = document.querySelector('#artistName').value

exports.handler = async function () {
    try {
        const data = await fetch(bandsInTown)
            // .then(function (response) {
            //     return response.json();
            // })
            .then(function (data) {
                console.log(data)
                return {
                    statusCode: 200,
                    body: JSON.stringify(data)
                }
            })
    }
    catch (err) {
        console.log('----------', err)
    }
}

// }




// const axios = require("axios")
// const key = 'a3cf4c822335efb2d9c716c941c4a393'

// // const getEvents = ({ artists, venue }) => `https://rest.bandsintown.com/artists/?=${artists}&venue=${venue}/?api_id=` + key

// function getRandomInt(max) {
//     return Math.floor(math.random() * max)
// }
// exports.handler = async (event) => {
//     const getEvents = (artists, venue) => `https://rest.bandsintown.com/artists/coldplay/?api_id=a3cf4c822335efb2d9c716c941c4a393`
//     const data = await axios.fetch(getEvents).then(function(response) {
//        console.log(response)
//     })


// }







    // const getEvents = ({ artists, venue }) => `https://rest.bandsintown.com/artists/?=${artists}&venue=${venue}/?api_id=` + key
//     const {data} = await axios.get(getEvents).then(function (response) {
//         console.log(response.data)
//     })
//         .catch(function (error) {
//             console.error(error)
//         })
//         const results = data.artist.event.map(({venue}) => {
//             return {venue: venue.artists.split(' ').join('')}
//         })

//     }

// exports.handler = async function () {
//      const concertApi = 'https://rest.bandsintown.com/artists/{{artist_name}}' + key 
//     const data = await response.json (concertApi)
//     return {
//         statusCode: 200,
//         body:JSON.stringify(data)
//     }
// }
