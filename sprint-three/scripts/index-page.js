const apiUrl = "https://project-1-api.herokuapp.com/comments";
const apiKey = "?api_key=heather-ross";
// const commentEndpoint = "/comments";

function getComments() {
    axios.get(apiUrl + apiKey)
    .then((response) => {
       let commentData = response.data;
       response.data.sort(function(x, y) {
        return y.timestamp - x.timestamp;
      })
       displayComments(commentData);
    }) 
    .catch((error) => {
        console.log('Uh oh ' + error);
    })
}
getComments();


let commentStream = document.querySelector('.comments__stream'); 

function displayComments(comment) {

    comment.forEach(function(singleComment) { 
        
    let commentContainer = document.createElement('article');
    commentContainer.classList.add('comments__container');
    
    let commentAvatar = document.createElement('div');
    commentAvatar.classList.add('comments__avatar');
    commentContainer.appendChild(commentAvatar);
 
    let commentBlock = document.createElement('div');
    commentBlock.classList.add('comments__block');
    commentContainer.appendChild(commentBlock);

    let commentName = document.createElement('h5');
    commentName.classList.add('comments__block--name');
    commentName.innerText = singleComment.name;
    commentContainer.appendChild(commentBlock);
    commentBlock.appendChild(commentName);

    let commentDate = document.createElement('date');
    commentDate.classList.add('comments__block--date');
    const today = new Date(singleComment.timestamp);
    commentDate.innerText = today.toLocaleDateString();
    commentContainer.appendChild(commentBlock);
    commentBlock.appendChild(commentDate);

    let commentText = document.createElement('p');
    commentText.classList.add('comments__block--comment');
    commentText.innerText = singleComment.comment;
    commentStream.appendChild(commentContainer);
    commentContainer.appendChild(commentBlock);  
    commentBlock.appendChild(commentText);
    }) 
}


const commentForm = document.getElementById('commentForm');
commentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    commentStream.innerHTML = '';
    const userNameValue = e.target.userNameInput.value; //reference 'Forms in Detail' page synapse
    const addCommentValue = e.target.commentInput.value;
   
    axios.post(apiUrl + apiKey, {name: userNameValue, comment: addCommentValue}) //linking to the API array
    .then(() => { 
        getComments();
    })
    .catch((error) => {
        console.log('You wrong ' + error);
    })
    e.target.reset();// resets list to only default comments on page when reloaded
    // displayComments(comment);
})

