let submitbtn = document.getElementById('submit-btn')

let useremail = document.getElementById('useremail')

let emailError = document.getElementById('emailError')


useremail.addEventListener('input', ()=>{
    const email = useremail.value;

    if(validemail(email)){
        emailError.innerHTML = "";
    }
    
    else{
        emailError.innerHTML = "Valid email required";
    }
})



submitbtn.addEventListener('click', function(e){

    e.preventDefault();

    const email = useremail.value;

    if(validemail(email)){
        emailError.innerHTML = "";
        window.location.href = 'success.html'
    }
    
    else{
        emailError.innerHTML = "Valid email required";
    }
})
 function validemail (email){
   const  validemailpattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validemailpattern.test(email)
}

 function storeemail (email){
    localStorage.setItem('useremail',email)
}
// export function validemail (email){
//    const  validemailpattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return validemailpattern.test(email)
// }

//  export function storeemail (email){
//     localStorage.setItem('useremail',email)
// }