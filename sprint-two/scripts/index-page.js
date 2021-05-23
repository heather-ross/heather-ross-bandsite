let commentsArray = [
    {
    userName: 'Micheal Lyons', 
    postDate: '12/18/2018',
    userComment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
    },
    {
    userName: 'Gary Wong', 
    postDate: '12/12/2018',
    userComment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
    },
    {
    userName: 'Theodore Duncan',
    postDate: '11/15/2018',
    userComment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
    },
]

let commentStream = document.querySelector('.comments__stream'); 

function displayComments(comment) {

    let commentContainer = document.createElement('article');
    commentContainer.classList.add('comments__container');

    let commentAvatar = document.createElement('div');
    commentAvatar.classList.add('.comments__avatar');
    commentContainer.appendChild(commentAvatar);

    let commentName = document.createElement('h5');
    commentName.classList.add('comments__block--name');
    commentName.innerText = comment.userName;
    commentStream.appendChild(commentContainer);
    commentContainer.appendChild(commentName);

    let commentDate = document.createElement('date');
    commentDate.classList.add('comments__block--date');
    commentDate.innerText = comment.postDate;
    commentStream.appendChild(commentContainer);
    commentContainer.appendChild(commentDate);

    let commentText = document.createElement('p');
    commentText.classList.add('comments__block--comment');
    commentText.innerText = comment.userComment;
    commentStream.appendChild(commentContainer);
    commentContainer.appendChild(commentText);  
}

function addNewComment() {
    // commentStream.innerHTML = '';
    while (commentStream.firstChild) commentStream.firstChild.remove();
    //for every comment in commentsArray, run ^^ displayComments ^^function 
    commentsArray.forEach(function(commentsArray) { 
        displayComments(commentsArray);
    }) 
}
addNewComment();

const today = new Date();
const commentForm = document.getElementById('commentForm');
commentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const userNameValue = e.target.userNameInput.value; //reference Forms in Detail page synapse
    const addCommentValue = e.target.commentInput.value;
    const date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear(); //research JS current date
    commentsArray.unshift({ //newest comment at top
        userName: userNameValue,
        postDate: date,
        userComment: addCommentValue,
    })
    e.target.remove();
    addNewComment();
})