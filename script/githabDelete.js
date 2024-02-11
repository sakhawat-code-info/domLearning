// step one 

// document.getElementById('deleteBtn').addEventListener('click', function(){
//     const hideThis = document.getElementById('hide_this');
//     hideThis.style.display = 'none';
// })


// step 2 

document.getElementById('inputFild').addEventListener('keyup', function(event){
    const inputValue = event.target.value;
    const deleteBtn = document.getElementById('deleteBtn');

    if (inputValue === 'delete') {
        deleteBtn.removeAttribute('disabled');
    }else{
        deleteBtn.setAttribute('disabled', true); // true is importent
    }
})

document.getElementById('deleteBtn').addEventListener('click', function(){
    const hideThis = document.getElementById('hide_this');
    hideThis.style.display = 'none';
})








