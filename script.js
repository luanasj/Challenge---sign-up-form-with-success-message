
function signUp() {
    let email = window.document.querySelector('input#email')
    let useremail = email.value
    

    console.log(useremail)
   
    if((useremail.length < 1) || (useremail.search("@")==-1) || (useremail.search(" ")==1) || (useremail.search(".") ==-1)) {
        
        let error = window.document.querySelector('div#error-message');
        error.style.display='inline-block';
        email.style.borderColor='crimson';
        email.style.color='crimson';
        email.style.backgroundColor='rgba(220, 20, 60, 0.258)';
    
    }

    else{

        let b = document.querySelector('b');
        let signUp = document.querySelector('main');
        // let signUp2 = document.querySelector('aside.signUpForm');

        let success = document.querySelector('#success-message');
       
        

        b.innerHTML = useremail

        signUp.style.display='none';
        // signUp2.style.display='none';
        success.style.display='flex';

    }

    
}

