
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
            
    return {
        statusCode: 200,
        body:JSON.stringify(response)
    }
            // const events = document.getElementById('event')
            // const artist = document.createElementById("h2")
            // artist.textContent = event.
            // events.appendChild(artistOneame)
            
           
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



//         let htmlSegment = `<div class="event">
//         <img src="${event.response.venue}" >
//         <h1>${ response.artist}
//   
//     </div>`
//     )
// }

// .then(function (response) {
            //     return response.json();
            // })

            // const data = await response.json (concertApi)

            // .then(function (data) {
            //     console.log(data)
            //     return {
            //         statusCode: 200,
            //         body: JSON.stringify(data)
            //     }
            // })
