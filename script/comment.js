
// document.getElementById('submit').addEventListener('click', function(){
//     const commentBox = document.getElementById('comment');
//     const commentBoxText = commentBox.value;
//     console.log(commentBoxText);
// })

document.getElementById('submit').addEventListener('click', function(){
    const commentBox = document.getElementById('comment');
    const commentBoxText = commentBox.value;
    
    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');

    p.innerText = commentBoxText;

    commentContainer.appendChild(p);

})




