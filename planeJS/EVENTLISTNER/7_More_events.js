// change events 
// if value get change then its get acctivated ---> works for input, textarea, select 
// SIRF VALUE CHANGE 

// ye sirf intial and final value ko track karega means if maine input diya and uske baad orr kahi click kr diya 
// 'abcd'----> so it will not track a ,b ,  c, d it will track only abcd 
form.addEventListener("submit",function(event){
    event.preventDefault();

});


let user = document.querySelector('#user');
user.addEventListener('change',function(){
    
    console.log("change event is trigger ");
    
    // this will track only initial and final value 
    // ""
    // "abcd" 
    console.log("final value = ",this.value);
});
//




//  
user.addEventListener('input',function(){
    
    console.log("input event is trigger ");
    
    // this will track only initial and final value 
    // ""
    // "a" 
    // "ab" 
    // "abc" 
    // "abcd" 
    // arrow keys will not get  trigger not assicii keys input evenet ko trigger nahi krti hai  
    console.log("final value = ",this.value);
});




