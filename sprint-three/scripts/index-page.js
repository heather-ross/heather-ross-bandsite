const apiUrl = "https://project-1-api.herokuapp.com/comments";
const apiKey = "?api_key=bd8144bc-4fe8-4d7d-a292-4c48539cecb5";

function getComments() {
    axios.get(apiUrl + apiKey)
    .then(response => {
       let commentData = response.data;
       response.data.sort(function(x, y) {
        return y.timestamp - x.timestamp;
      })
       displayComments(commentData);
    }) 
    .catch(err => {
        alert("Please try again " + err);
    })
}
getComments();

    let commentStream = document.querySelector('.comments__stream'); 

function displayComments(comments) {

    comments.forEach(function(comment) { 
        
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
    commentName.innerText = comment.name;
    // commentContainer.appendChild(commentBlock);
    commentBlock.appendChild(commentName);

    let commentDate = document.createElement('date');
    commentDate.classList.add('comments__block--date');
    const today = new Date(comment.timestamp);
    commentDate.innerText = today.toLocaleDateString();
    // commentContainer.appendChild(commentBlock);
    commentBlock.appendChild(commentDate);

    let commentText = document.createElement('p');
    commentText.classList.add('comments__block--comment');
    commentText.innerText = comment.comment;
    commentStream.appendChild(commentContainer);
    // commentContainer.appendChild(commentBlock);  
    commentBlock.appendChild(commentText);

    
    // let deleteButton = document.createElement('button');
    // deleteButton.classList.add('comments__deleteBtn')
    // deleteButton.innerText = 'DELETE';
    // commentBlock.appendChild(deleteButton);
    // deleteButton.addEventListener('click', deleteComment);
    // function deleteComment(e) {
    //     e.target.parentNode.parentNode.remove();
    // }
    }) 
}

const commentForm = document.getElementById('commentForm');
commentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    while (commentStream.firstChild) commentStream.firstChild.remove();
        const userNameValue = e.target.userNameInput.value; 
        const addCommentValue = e.target.commentInput.value;
   
    axios.post(apiUrl + apiKey, {name: userNameValue, comment: addCommentValue})
    .then(() => { 
        getComments();
    })
    .catch(err => {
        alert("Please try again " + err);
    })
    e.target.reset();
})

