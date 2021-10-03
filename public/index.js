document.addEventListener('DOMContentLoaded', () => {

    const fetchBtn = document.getElementById('fetch-btn')
    const responseText = document.getElementById('response-output')

    // const venueName = document.getElementById('venueName')

    fetchBtn.addEventListener('click', async () => {
        const artistName = document.getElementById('artistName')
        console.log(artistName.value)
        const response = await fetch(`../.netlify/functions/bandsInTown?artist=${artistName.value}`)
            .then(response => response.json()).
            catch(err => console.error('error in fetch: ', err))
        console.log('response is: ', response)
        // responseText.innerText = JSON.stringify(response)
        const image = response[0].image
        const eventCards = response.map(e => createEventCard(image, e))
        eventCards.forEach(e => responseText.appendChild(e))
    })

    function createEventCard(image, event) {
        const eventCard = document.createElement("div");
        const eventCardArtist = document.createElement("h1");
        eventCardArtist.textContent = event.bandName;
        eventCard.appendChild(eventCardArtist);
        const eventCardImg = document.createElement("img");
        eventCardImg.src = image;
        eventCard.appendChild(eventCardImg);
        const eventCardVenue = document.createElement("h4");
        eventCardVenue.textContent = event.location;
        eventCard.appendChild(eventCardVenue);
        const eventCardDate = document.createElement("h5");
        eventCardDate.textContent = event.date;
        eventCard.appendChild(eventCardDate);
        const eventCardDescription = document.createElement("div");
        eventCardDescription.textContent = event.description;
        eventCard.appendChild(eventCardDescription);
    
        return eventCard
    }
})



let myIndex = 0;
carousel();

function carousel() {
    let i;
    let x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 4000);
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    let x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}


