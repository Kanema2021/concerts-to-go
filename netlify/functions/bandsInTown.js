
const fetch = require("node-fetch")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

exports.handler = async function (event) {
    try {
        console.log("here")
        const artistName = event.queryStringParameters.artist 
        const bandsInTown = `https://rest.bandsintown.com/artists/${artistName}/events/?app_id=a3cf4c822335efb2d9c716c941c4a393`
        const data = await fetch(bandsInTown)
        const response = await data.json()
        console.log(response)
        const ourResponse = response.map(e => ({
            image: e.artist?.thumb_url,
            location: e.venue.location,
            date:e.datetime.substring(0, 10),
            bandName: e.lineup[0]

        }))
            console.log(ourResponse)
    return {
        statusCode: 200,
        body:JSON.stringify(ourResponse)
    }
            // const events = document.getElementById('event')
            // const artist = document.createElementById("h2")
            // artist.textContent = event.
            
            
           
    }
    catch (err) {
        console.log('----------', err)
    }
}



// async function getevents() {
//     const events = await handler()
//     let html = '';
//     events.foreach(event => {
//         const artistName = (response.artist.name)
//         console.log (response.artist.name)
//     })
// }



