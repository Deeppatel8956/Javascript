document.getElementById('sampleForm').addEventListener('submit',function (event) {
  event.preventDefault()

    // preveus message
    document.querySelectorAll('.error-message').forEach(function (errorElement) {
        errorElement.style.display = 'none';
    })
    var name=document.getElementById('name').value.trim()
    var email=document.getElementById('email').value.trim()
    var age=document.getElementById('age').value
    var message=document.getElementById('message').value.trim()
    var isvaild=true

    if (!name) {
        document.getElementById('nameError').textContent='Name is required'
        document.getElementById('nameError').style.display='block'
        isvaild=false
    }

    if (!email) {
        document.getElementById('emailError').textContent='Email is required'
        document.getElementById('emailError').style.display='block'
        isvaild=false
    } else if(!/\S+@\S+\.\S+/.test(email)) {
         document.getElementById('emailError').textContent='Email is invalid'
        document.getElementById('emailError').style.display='block'
        isvaild=false
    }

    if (!age) {
         document.getElementById('ageError').textContent='Age is required'
        document.getElementById('ageError').style.display='block'
        isvaild=false
    } else if(age <1 ||age >100) {
         document.getElementById('ageError').textContent='Age is invaild'
        document.getElementById('ageError').style.display='block'
        isvaild=false
    }

    if (!message) {
         document.getElementById('messageError').textContent='Message is required'
        document.getElementById('messageError').style.display='block'
        isvaild=false
    }

    if (!isvaild) {
        return 
    }
    
    var formdata={
        name: name,
        email: email,
        age: age,
        message: message
    }

    console.log('Form Data Submitted:', formdata);

    // Display feedback to the user
    var feedback = document.getElementById('feedback');
    feedback.textContent = 'Form submitted successfully!';
    feedback.style.color = 'green';

    // Reset the form
    document.getElementById('sampleForm').reset();
})