document.getElementById('myForm').addEventListener('submit',function(event){
            
    event.preventDefault();

    const fullname= document.getElementById('fullname').value;
    const email= document.getElementById('email').value;
    const pass = document.getElementById('password').value;

    if(!fullname){
        alert("you need to enter your name.");
        return;

    }
    if(!email){
        alert("you need to enter your email.");
        return;

    }
    if(!pass){
        alert("you need to enter your pass.");
        return;

    }

    const formData = {
        fullname: fullname,
        email: email,
        password: pass,
    }

    const xhr = new XMLHttpRequest ();
    xhr.open ("POST", "submit. json", true);
    xhr.setRequestHeader ("Content-Type", "application/json; charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr. readyState === 4 && xhr.status == 200) {
            alert ('Form submitted successfully.');
        } else if (xhr.readyState === 4){ 
            alert ('Error submitting form.');
            //event.preventDefault(); this prevents form submission

        }
    };
    xhr.send(JSON. stringify(formData));
    alert("Form Submitted");
    console.log(formData);

    
})