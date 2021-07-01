const apiUrl = "https://project-1-api.herokuapp.com/comments";
const apiKey = "?api_key=3a373fee-e06d-4ee0-a561-dd8ad911b899";

// Begin building comments HTML structure
let commentStream = document.querySelector('.comments__stream');

// Function to display comment data
const displayComments = (comments) => {

    commentStream.innerText = "";

    comments.forEach(comment => {

        // Article containing each comment
        let commentContainer = document.createElement('article');
        commentContainer.classList.add('comments__container');

        // User profile picture div
        let commentAvatar = document.createElement('div');
        commentAvatar.classList.add('comments__avatar');
        commentContainer.appendChild(commentAvatar);

        // Comment name, date, text content wrap
        let commentBlock = document.createElement('div');
        commentBlock.classList.add('comments__block');
        commentContainer.appendChild(commentBlock);

        // Comment user name 
        let commentName = document.createElement('h5');
        commentName.classList.add('comments__block-name');
        commentName.innerText = comment.name;
        commentBlock.appendChild(commentName);

        // Comment timestamp
        let commentDate = document.createElement('date');
        commentDate.classList.add('comments__block-date');
        const today = new Date(comment.timestamp);
        commentDate.innerText = today.toLocaleDateString();
        commentBlock.appendChild(commentDate);

        // Comment text
        let commentText = document.createElement('p');
        commentText.classList.add('comments__block-comment');
        commentText.innerText = comment.comment;
        commentStream.appendChild(commentContainer);
        commentBlock.appendChild(commentText);

        // Delete comment button
        let commentDelete = document.createElement('img');
        commentDelete.classList.add('comments__block-delete');
        commentDelete.setAttribute('src', './assets/icons/delete-x.png');
        commentDelete.id = comment.id;
        commentBlock.appendChild(commentDelete);

        // Delete comments when clicked
        commentDelete.addEventListener('click', e => {
            let commentId = e.target.id;
            axios.delete(`${apiUrl}/${commentId}${apiKey}`)
                .then(() => {
                    getComments();
                })
                .catch(err => {
                    console.log(err)
                })
        })
        // Like button 
        let likeBtn = document.createElement('img');
        likeBtn.classList.add('comments__block-like');
        likeBtn.setAttribute('src', './assets/icons/heart.png');
        likeBtn.id = comment.id;
        commentBlock.appendChild(likeBtn);

        // Like counter
        let likeCounter = document.createElement('p');
        likeCounter.classList.add('comments__block-likes');
        likeCounter.innerText = comment.likes;
        commentBlock.appendChild(likeCounter);

        // Like comments when clicked
        likeBtn.addEventListener('click', e => {
            let likeId = e.target.id;
            axios.put(`${apiUrl}/${likeId}/like${apiKey}`)
                .then(res =>
                    likeCounter.innerText = res.data.likes
                )
                .catch(err =>
                    console.error(err)
                );
        });
    })
}
// Function to get comment data
getComments = () => {
    axios.get(apiUrl + apiKey)
        .then(res => {
            // Sort comments to display newest comments first
            displayComments(res.data.sort(function (x, y) {
                return y.timestamp - x.timestamp;
            }));
        })
        .catch(err => {
            console.error(err);
        })
}
getComments();


const commentForm = document.getElementById('commentForm');
// Event listener to submit comments
commentForm.addEventListener('submit', e => {

    // Prevent from reloading on submit
    e.preventDefault();
    // while (commentStream.firstChild) commentStream.firstChild.remove();

    // Post new comments 
    axios.post(apiUrl + apiKey, {
        name: e.target.userNameInput.value,
        comment: e.target.commentInput.value
    })
        .then(() => {
            getComments();
        })
        .catch(err => {
            console.error(err);
        })

    // Reset form fields
    e.target.reset();
})
