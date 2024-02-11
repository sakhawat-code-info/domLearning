
// addEventListener('focus')
// addEventListener('blur')
// addEventListener('keydown')
// addEventListener('keypress')
// document.getElementById('inputFild').addEventListener('keyup', function (event) {
//     console.log(event.target.value);
// })




document.getElementById('item-2').addEventListener('click', function(event){
    console.log('btn clicked');
    // event.stopPropagation(); viva quesiton
})

document.getElementById('list_ul').addEventListener('click', function(){
    console.log('ul btn added');
})

document.getElementById('section_container').addEventListener('click', function(){
    console.log("section also clicked");
})






























