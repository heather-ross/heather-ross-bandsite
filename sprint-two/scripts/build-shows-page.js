let showsArray = [
    {
    showDate: 'Mon Dec 17 2018', 
    showVenue: 'Ronald Lane',
    showLocation: 'San Fancisco, CA'
    },
    {
    showDate: 'Tue Jul 18 2019', 
    showVenue: 'Pier 3 East',
    showLocation: 'San Fancisco, CA'
    },   
    {
    showDate: 'Fri Jul 22 2019', 
    showVenue: 'View Loungue',
    showLocation: 'San Fancisco, CA'
    },
    {
    showDate: 'Sat Aug 12 2019', 
    showVenue: 'Hyatt Agency',
    showLocation: 'San Fancisco, CA'
    },
    {
    showDate: 'Fri Sep 05 2019', 
    showVenue: 'Moscow Center',
    showLocation: 'San Fancisco, CA'
    },   
    {
    showDate: 'Wed Aug 11 2019', 
    showVenue: 'Pres Club',
    showLocation: 'San Fancisco, CA'
    },
]

let showsContainer = document.querySelector('.shows'); 

let showsTitle = document.createElement('h2');
    showsTitle.classList.add('shows__title');
    showsTitle.innerText = 'Shows';
    showsContainer.appendChild(showsTitle);

let showsWrap = document.createElement('section');
    showsWrap.classList.add('shows__wrap');
    showsContainer.appendChild(showsWrap);


function displayShows(content) {    

let showsRow = document.createElement('div');
    showsRow.classList.add('shows__row');
    showsWrap.appendChild(showsRow);

    //Date Wrap
let showsDateWrap = document.createElement('div');
    showsDateWrap.classList.add('shows__content');
    showsRow.appendChild(showsDateWrap);

let showsHeadingDate = document.createElement('h5');
    showsHeadingDate.classList.add('shows__heading');
    showsHeadingDate.innerText = 'DATE';
    showsDateWrap.appendChild(showsHeadingDate);

let showsTextDate = document.createElement('p');
    showsTextDate.classList.add('shows__text');
    showsTextDate.innerText = content.showDate;
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
    showsTextVenue.innerText = content.showVenue;
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
    showsTextLocation.innerText = content.showLocation;
    showsLocationWrap.appendChild(showsTextLocation);

let showsBtn = document.createElement('button');
    showsBtn.classList.add('shows__button');
    showsBtn.innerText = "BUY TICKETS";
    showsRow.appendChild(showsBtn);
}

 function addNewShow() { 
    showsArray.forEach(function(showsArray) { 
        displayShows(showsArray);
    }) 
}
addNewShow();