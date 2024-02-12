

const li_container = document.getElementById('li_container');

li_container.addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target);
})

// const items = document.getElementsByClassName('list_item');

// for (const item of items) {
//     item.addEventListener('click', function (event) {
//         event.target.parentNode.removeChild(event.target);
//     })
// } this code not work because boubleing tai parent take dorte hobe

const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', function () {
    const li_container = document.getElementById('li_container');

    const li = document.createElement('li');
    li.innerText = "Brand new li";
    li.classList.add('list_item');
    li_container.appendChild(li);
})






































/* ****************************** Comment code ****************************************** */


// const postBtn = document.getElementById('postBtn');

// let postCount = 1;
// postBtn.addEventListener('click', function () {
//     const textFildValue = document.getElementById('textFild').value;
//     const postShow = document.getElementById('postShow');

//     const p = document.createElement('p');
//     p.innerText = postCount + ". " + textFildValue;
//     postShow.appendChild(p)
//     postCount++;
//     document.getElementById('textFild').value = "";
// })



/* ****************************** Delete code ****************************************** */

// const deleteBtn = document.getElementById('deleteBtn');
// const inputFild = document.getElementById('inputFild');

// inputFild.addEventListener('keyup', function (event) {
//     const inputFild = event.target.value;
//     if (inputFild === 'delete') {
//         deleteBtn.removeAttribute('disabled');
//     } else {
//         deleteBtn.setAttribute('disabled', true)
//     }
// })

// deleteBtn.addEventListener('click', function () {
//     const hide_this = document.getElementById('hide_this');
//     hide_this.style.display = 'none';
// })




/* ****************************** tazbi code****************************************** */

// const subahanAllahDisplay = document.getElementById('subahanAllahDisplay');
// const subahanAllahIncrimentBtn = document.getElementById('subahanAllahincrimentBtn');
// const subahanAllahDecrimentBtn = document.getElementById('subahanAllahdecrimentBtn');

// let subahanAllahCount = 0;

// subahanAllahIncrimentBtn.addEventListener('click', function () {
//     if (subahanAllahCount === 33) {
//         return alert("Completed");
//     }
//     subahanAllahCount += 1;
//     subahanAllahDisplay.innerText = subahanAllahCount;
// })

// subahanAllahDecrimentBtn.addEventListener('click', function () {
//     if (subahanAllahCount === 0) {
//         return alert("can't add negative value");
//     }

//     subahanAllahCount -= 1;
//     subahanAllahDisplay.innerText = subahanAllahCount;
// })

// let alhamduAllahCount = 0;

// const alhamduAllahDisplay = document.getElementById('alhamduAllahDisplay');
// const alhamduAllahIncrimentBtn = document.getElementById('alhamduAllahIncrimentBtn');
// const alhamduAllahDecrimentBtn = document.getElementById('alhamduAllahDecrimentBtn');

// alhamduAllahIncrimentBtn.addEventListener('click', function () {
//     if (alhamduAllahCount === 33) {
//         return alert("AlhamduAllah Completed next plz")
//     }
//     alhamduAllahCount += 1;
//     alhamduAllahDisplay.innerText = alhamduAllahCount;
// })

// alhamduAllahDecrimentBtn.addEventListener('click', function () {
//     if (alhamduAllahCount === 0) {
//         return alert('Can not added negative value');
//     }
//     alhamduAllahCount -= 1;
//     alhamduAllahDisplay.innerText = alhamduAllahCount;
// })

// let allahAkbarCount = 0;

// const allahAkbarDisplay = document.getElementById('allahAkbarDisplay');
// const allahAkbarIncrimentBtn = document.getElementById('allahAkbarIncrimentBtn');
// const allahAkbarDecrimentBtn = document.getElementById('allahAkbarDecrimentBtn');


// allahAkbarIncrimentBtn.addEventListener('click', function () {
//     if (allahAkbarCount === 34) {
//         return alert('All Completed')
//     }
//     allahAkbarCount += 1;
//     allahAkbarDisplay.innerText = allahAkbarCount;
// })
// allahAkbarDecrimentBtn.addEventListener('click', function () {
//     if (allahAkbarCount === 0) {
//         return alert('can not minus')
//     }
//     allahAkbarCount -= 1;
//     allahAkbarDisplay.innerText = allahAkbarCount;
// })


// document.getElementById('resetBtn').addEventListener('click', function () {
//     allahAkbarDisplay.innerText = 0;
//     allahAkbarCount = 0

//     alhamduAllahCount = 0;
//     alhamduAllahDisplay.innerText = 0;

//     subahanAllahDisplay.innerText = 0;
//     subahanAllahCount = 0;
// })








