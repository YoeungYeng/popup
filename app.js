$(document).ready(function(){
    // console.log("Love Sokrong");
    const body = $('body'); 
    const popup =`<div class="popup"></div>`;
    const btnAdd = $('.btn-add');
    btnAdd.click(function(){
        // console.log("Love Sokrong")
        body.append(popup)
    })
})