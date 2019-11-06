import './vendor';
$(document).ready(function(){ 
    $("#name").on("keypress", function(e) {
  
        var char = /[A-Za-zА-Яа-яЁё]/;
        var val = String.fromCharCode(e.which);
        var test = char.test(val);
        
        if(!test) return false
      })
});