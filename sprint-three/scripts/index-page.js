const apiUrl = "https://project-1-api.herokuapp.com/comments";
const apiKey = "?api_key=bd8144bc-4fe8-4d7d-a292-4c48539cecb5";

const getComments = () => {
    axios.get(apiUrl + apiKey)
        .then(response => {
            let commentData = response.data;
            response.data.sort(function (x, y) {
                return y.timestamp - x.timestamp;
            })
            displayComments(commentData);
        })
        .catch(err => {
            console.error(err);
        })
}
getComments();

let commentStream = document.querySelector('.comments__stream');

const displayComments = (comments) => {

    comments.forEach(comment => {

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
        commentBlock.appendChild(commentName);

        let commentDate = document.createElement('date');
        commentDate.classList.add('comments__block--date');
        const today = new Date(comment.timestamp);
        commentDate.innerText = today.toLocaleDateString();
        commentBlock.appendChild(commentDate);

        let commentText = document.createElement('p');
        commentText.classList.add('comments__block--comment');
        commentText.innerText = comment.comment;
        commentStream.appendChild(commentContainer);
        commentBlock.appendChild(commentText);

        let commentDelete = document.createElement('img');
        commentDelete.classList.add('comments__block--delete');
        commentDelete.setAttribute('src', './assets/icons/delete-x.png')
        commentBlock.appendChild(commentDelete);
        commentDelete.addEventListener('click', handleDelete);
        function handleDelete(e) {
            e.preventDefault();
            axios.delete(`${apiUrl}/${comment.id}${apiKey}`)
                .then(() => {
                    location.reload()
                    return true;
                })
                .catch(err => {
                    console.error(err);
                })
        }
    })
}
const commentForm = document.getElementById('commentForm');
commentForm.addEventListener('submit', function (e) {
    e.preventDefault();
    while (commentStream.firstChild) commentStream.firstChild.remove();
    const userNameValue = e.target.userNameInput.value;
    const addCommentValue = e.target.commentInput.value;
    axios.post(apiUrl + apiKey, { name: userNameValue, comment: addCommentValue })
        .then(() => {
            getComments();
        })
        .catch(err => {
            console.error(err);
        })
    e.target.reset();
})
