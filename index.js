// Add your code here
function submitData(name, email) {
    fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( {
            name,
            email
        })  
    })
    .then(res=>res.json())
    .then(obj=>document.body.innerHTML = obj["id"])
    .catch(error=>document.body.innerHTML = error.message)
   }
    