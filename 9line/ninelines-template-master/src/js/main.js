import './vendor';
$(document).ready(function(){ 
    $("#name").on("keypress", function(e) {
  
        let char = /[A-Za-zА-Яа-яЁё]/;
        let val = String.fromCharCode(e.which);
        let test = char.test(val);
        
        if(!test) return false
      })
});