/*
 * Created by Arthur Gurjinyan @ArtStyle
 */

function checkpass(object){    
    
    console.log('initialized');
    init(object);
    $(object).keyup(function(){    
        check(object);
    });
}
function init(object){
    $(object).after('<br><label class="lengthcheck">At least 8 characters long</label><br><label class="uppercheck">Contains upper case letters</label><br><label class="lowercheck">Contains lower case letters</label><br><label class="numbercheck">Contains numbers</label>')
}
function check(object){
    lengthcheck(object);
    uppercheck(object);
    lowercheck(object);
    numbercheck(object);
    }
function lengthcheck(object){
    var l = $(object).val().length;
    if(l < 8){        
        $('.lengthcheck').css('color', '#ff0000');
        return false;               
    } else {       
         $('.lengthcheck').css('color', '#00ff00');
        return true;
    }    
}
function uppercheck(object){
    var str = $(object).val();
    if(str.toLowerCase() != str){
        $('.uppercheck').css('color', '#00ff00');
    } else {
        $('.uppercheck').css('color', '#ff0000');
    }   
}
function lowercheck(object){
    var str = $(object).val();
    if(str.toUpperCase() != str){
        $('.lowercheck').css('color', '#00ff00');
    } else {
        $('.lowercheck').css('color', '#ff0000');
    } 
}

function numbercheck(object){
    var str = $(object).val();
    if(/\d/.test(str)){
        $('.numbercheck').css('color', '#00ff00');
    } else {
        $('.numbercheck').css('color', '#ff0000');
    }
    
}