export class Firebase{
static create(users) {
 return   fetch('https://news-app-4f469-default-rtdb.firebaseio.com/users.json', {
method:"POST",
body:JSON.stringify(users),
headers: {
    'Content-Type': 'application/json'
}
    })
    .then(response =>response.json())
    .then(response=>{
    console.log(response)
    })
}
    
}
