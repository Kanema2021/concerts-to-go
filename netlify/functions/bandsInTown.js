
const fetch = require('node-fetch')
const key = 'a3cf4c822335efb2d9c716c941c4a393'
// const artistName = document.getElementById('artistName')



exports.handler = async function () {
     const concertApi = 'https://rest.bandsintown.com/artists?q=' + artistName.val() +'&appid=' + key 
    const data = await response.json (concertApi)
    return {
        statusCode: 200,
        body:JSON.stringify(data)
    }
}
