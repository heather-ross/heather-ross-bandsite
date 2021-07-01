const apiUrl = "https://project-1-api.herokuapp.com/showdates";
const apiKey = "?api_key=3a373fee-e06d-4ee0-a561-dd8ad911b899";

// Begin building shows HTML structure
let showsContainer = document.querySelector('.shows');

// Main Heading for section
let showsTitle = document.createElement('h2');
showsTitle.classList.add('shows__title');
showsTitle.innerText = 'Shows';
showsContainer.appendChild(showsTitle);

// Wrap for all shows elements
let showsWrap = document.createElement('section');
showsWrap.classList.add('shows__wrap');
showsContainer.appendChild(showsWrap);

// Function to display shows data
const displayShows = (content) => {

  content.forEach(showContent => {

    // div to wrap each shows row  
    let showsRow = document.createElement('div');
    showsRow.classList.add('shows__row');
    showsWrap.appendChild(showsRow);

    // Date Wrap
    let showsDateWrap = document.createElement('div');
    showsDateWrap.classList.add('shows__content');
    showsRow.appendChild(showsDateWrap);

    let showsHeadingDate = document.createElement('h5');
    showsHeadingDate.classList.add('shows__heading');
    showsHeadingDate.innerText = 'DATE';
    showsDateWrap.appendChild(showsHeadingDate);

    let showsTextDate = document.createElement('p');
    showsTextDate.classList.add('shows__text');
    showsTextDate.innerText = new Date(showContent.date - 0).toDateString();
    showsDateWrap.appendChild(showsTextDate);

    //Venue Wrap
    let showsVenueWrap = document.createElement('div');
    showsVenueWrap.classList.add('shows__content');
    showsRow.appendChild(showsVenueWrap);

    let showsHeadingVenue = document.createElement('h5');
    showsHeadingVenue.classList.add('shows__heading');
    showsHeadingVenue.innerText = 'VENUE';
    showsVenueWrap.appendChild(showsHeadingVenue);

    let showsTextVenue = document.createElement('p');
    showsTextVenue.classList.add('shows__text');
    showsTextVenue.innerText = showContent.place;
    showsVenueWrap.appendChild(showsTextVenue);

    //Location Wrap
    let showsLocationWrap = document.createElement('div');
    showsLocationWrap.classList.add('shows__content');
    showsRow.appendChild(showsLocationWrap);

    let showsHeadingLocation = document.createElement('h5');
    showsHeadingLocation.classList.add('shows__heading');
    showsHeadingLocation.innerText = 'LOCATION';
    showsLocationWrap.appendChild(showsHeadingLocation);

    let showsTextLocation = document.createElement('p');
    showsTextLocation.classList.add('shows__text');
    showsTextLocation.innerText = showContent.location;
    showsLocationWrap.appendChild(showsTextLocation);

    // Buy tickets button
    let showsBtn = document.createElement('button');
    showsBtn.classList.add('shows__button');
    showsBtn.innerText = "BUY TICKETS";
    showsBtn.onclick = () => {
      modal.style.display = "block";
    }
    showsRow.appendChild(showsBtn);
  })
}

// Function to get show data
const getShows = () => {
  axios.get(apiUrl + apiKey)
    .then(response => {
      let showData = response.data;
      displayShows(showData);
    })
    .catch(err => {
      console.error(err);
    })
}
getShows();

// Modal pop-up on button click
let modal = document.getElementById("modal");
let modalCloseX = document.getElementsByClassName("modal__close")[0];
let modalCloseBtn = document.getElementsByClassName("modal__closeBtn")[0];
modalCloseX.onclick = () => {
  modal.style.display = "none";
}
modalCloseBtn.onclick = () => {
  modal.style.display = "none";
}
window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
