const searchicon1 = document.querySelector('#searchicon1');
const srchicon1 = document.querySelector('#srchicon1');
const search1 = document.querySelector('searchinput1');

searchicon1.addEventListener('click' , function(){
    search1.style.display = 'flex ';
    searchicon1.style.display = 'none'
})

const searchicon2 = document.querySelector('#searchicon2');
const srchicon2 = document.querySelector('#srchicon2');
const search2 = document.querySelector('searchinput2');



const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');





document.getElementById("searchicon1").addEventListener("click", function() {
    const searchInput = document.getElementById("searchinput1");
    searchInput.classList.toggle("show");
});


