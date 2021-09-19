const fetch = require("node-fetch")
const bandsInTownApi = "https://rest.bandsintown.com/artists/coldplay/?api_id=a3cf4c822335efb2d9c716c941c4a393"

function getConcerts(max) {
        return Math.floor(math.random() * max);
    }
    exports.handler = async function () {
        try{
            const data = await fetch(bandsInTownApi)
            .then(response => response.json())
            const concertInfo = getConcerts(data.length -1)
            const concertData = data[concertInfo]
            console.log(concertData)
            return {
                statusCode: 200,
                body: JSON.stringify(concertData)
            }
        }
        catch(err){
            console.log('----------', err)
        }
        getConcerts()
    }





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
