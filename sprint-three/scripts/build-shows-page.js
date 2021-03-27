const apiUrl = "https://project-1-api.herokuapp.com/showdates";
const apiKey = "?api_key=bd8144bc-4fe8-4d7d-a292-4c48539cecb5";

function getShows() {
    axios.get(apiUrl + apiKey)
    .then(response => {
       let commentData = response.data;
       displayShows(commentData);
    }) 
    .catch(err => {
        alert("Please try again " + err);
    })
}
getShows();

    let showsContainer = document.querySelector('.shows'); 

    let showsTitle = document.createElement('h2');
    showsTitle.classList.add('shows__title');
    showsTitle.innerText = 'Shows';
    
    let showsWrap = document.createElement('section');
    showsWrap.classList.add('shows__wrap');
    
    showsContainer.appendChild(showsTitle);
    showsContainer.appendChild(showsWrap);


function displayShows(content) {    
    
    content.forEach(showContent => {
          
    let showsRow = document.createElement('div');
    showsRow.classList.add('shows__row');

    //Date Wrap
    let showsDateWrap = document.createElement('div');
    showsDateWrap.classList.add('shows__content');

    let showsHeadingDate = document.createElement('h5');
    showsHeadingDate.classList.add('shows__heading');
    showsHeadingDate.innerText = 'DATE';

    let showsTextDate = document.createElement('p');
    showsTextDate.classList.add('shows__text');
    showsTextDate.innerText = showContent.date;

    //Venue Wrap
    let showsVenueWrap = document.createElement('div');
    showsVenueWrap.classList.add('shows__content');

    let showsHeadingVenue = document.createElement('h5');
    showsHeadingVenue.classList.add('shows__heading');
    showsHeadingVenue.innerText = 'VENUE';

    let showsTextVenue = document.createElement('p');
    showsTextVenue.classList.add('shows__text');
    showsTextVenue.innerText = showContent.place;

    //Location Wrap
    let showsLocationWrap = document.createElement('div');
    showsLocationWrap.classList.add('shows__content');

    let showsHeadingLocation = document.createElement('h5');
    showsHeadingLocation.classList.add('shows__heading');
    showsHeadingLocation.innerText = 'LOCATION';

    let showsTextLocation = document.createElement('p');
    showsTextLocation.classList.add('shows__text');
    showsTextLocation.innerText = showContent.location;

    let showsBtn = document.createElement('button');
    showsBtn.classList.add('shows__button');
    showsBtn.innerText = "BUY TICKETS";

    showsWrap.appendChild(showsRow);
    showsRow.appendChild(showsDateWrap);
    showsDateWrap.appendChild(showsHeadingDate);
    showsDateWrap.appendChild(showsTextDate);
    showsRow.appendChild(showsVenueWrap);
    showsVenueWrap.appendChild(showsHeadingVenue);
    showsVenueWrap.appendChild(showsTextVenue);
    showsRow.appendChild(showsLocationWrap);
    showsLocationWrap.appendChild(showsHeadingLocation);
    showsLocationWrap.appendChild(showsTextLocation);
    showsRow.appendChild(showsBtn);
    }) 
}