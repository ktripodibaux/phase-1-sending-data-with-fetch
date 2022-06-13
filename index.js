// Add your code here
function submitData (object) {
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json",
        },
        body: JSON.stringify(object)
    }).then(response => response.json()).then(data => objectToDom(data)).catch(function(error) {
        console.log(error.message);
    })
}

function objectToDom(object) {
    const h1 = document.createElement('h1');
    const h12 = document.createElement('h1');

    h1.textContent = object.userName;
    h12.textContent = object.userEmail;

    document.querySelector('body').append(h1, h12);
}

const formData = {
    name : 'Kurt',
    email: 'kurt@kurt.com'
}