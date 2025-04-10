document.getElementById('myForm').addEventListener('submit',function(event){
            
    event.preventDefault();

    const fullname= document.getElementById('fullname').value;
    const email= document.getElementById('email').value;
   

    if(!fullname){
        alert("you need to enter your name.");
        return;

    }
    if(!email){
        alert("you need to enter your email.");
        return;

    }

    const formData = {
        fullname: fullname,
        email: email,
    
    }

    const xhr = new XMLHttpRequest ();
    xhr.open ("GET", "submit.json", true);
    xhr.setRequestHeader ("Content-Type", "application/json; charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr. readyState === 4 && xhr.status == 200) {
            //alert ('Form submitted successfully.');
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myForm").innerHTML = "";

        } else if (xhr.readyState === 4){ 
            alert ('Error submitting form.');
            //event.preventDefault(); this prevents form submission

        }

    };
    xhr.send(JSON. stringify(formData));
    //alert("Form Submitted");
    console.log(formData);

    
})