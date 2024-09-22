$(document).ready(function(){

//$('div').click(function(){
//      $(this).hide()






$('.hide').click(function(){
$('.text').hide()
})

$('.show').click(function(){
    $('.text').show()
})

$('#toggle').click(function(){
$('.text').toggle()

if($(this).text() == 'Hide'){
   $(this).text('Show')
}else{
    $(this).text('Hide')
}

})
})