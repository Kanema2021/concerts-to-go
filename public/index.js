

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
        responseText.innerText = JSON.stringify(response)
    })
    // fetchBtn.click(function(event){
    //   event.preventDefault()
    //   exports.handler()
    // })
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



// async function signUpForm(event) {
//     event.preventDefault();
//     const username = document.getElementById('username').value.trim();
//     const password = document.getElementById('password').value.trim();

//     if (username && password) {
//         const response = await fetch('/api/users', {
//             method: 'POST',
//             body: JSON.stringify(body),
//             headers: { 'Content-Type': 'application/json' }
//         });
//         if (response.ok) {
//             //TODO: Take user to dashboard page
//             console.log('success');
//         } else {
//             alert(response.statusText);
//         }
//     }
// }

// const registerBtn = document.getElementById('register-btn');
// registerBtn.addEventListener('click', signUpForm());

// function viewConcerts() {
//     document.getElementById('concertSearchResults').setAttribute('style', 'display: block');
//   }
//   document.getElementById('closeBtn').addEventListener('click', function(event) {
//     event.preventDefault();
//     this.parentNode.style.display = 'none';
//   }, false);

