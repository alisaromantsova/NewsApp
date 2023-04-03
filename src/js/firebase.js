// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set, onValue, child, push, update } from "firebase/database";
import { getAuth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        AuthErrorCodes,
        onAuthStateChanged,
        signOut,
} from "firebase/auth";

const email = document.querySelector("#email")
const password = document.querySelector("#password")
const btn = document.querySelector("#btnSubmit")
const btnReg = document.querySelector("#btnRegister")
const btnLogout = document.querySelector("#btnLogout")
const btnAdd = document.querySelector("#add")
const btnShowBDB = document.querySelector("#showBDB")

let logedUser = null
let favoriteLocal = null


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCa_ZyHIoH4xQmjf3mZW2ugY9YCczxEcFM",
    authDomain: "news-app-6cfee.firebaseapp.com",
    databaseURL:"https://news-app-6cfee-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "news-app-6cfee",
    storageBucket: "news-app-6cfee.appspot.com",
    messagingSenderId: "484843420821",
    appId: "1:484843420821:web:e8e1da3171a09818caaf9c",
    measurementId: "G-JED1MDZDV7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
console.log(email)
const loginEmailPassword = async ()=>{
    const loginEmail = email.value
    const loginPassword = password.value
    try {
        console.log(loginEmail,loginPassword)
        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        // console.log(userCredential.user)
        btn.textContent = "logout"
        logedUser = userCredential.user

         writeUserData(userCredential.user.uid,userCredential.user.email,[],[])
         const favorite = ref(database,);
         onValue(favorite, (snapshot) => {
            const data = snapshot.val();
            favoriteLocal = data
            // console.log("data",data)
            // updateStarCount(postElement, data);
          });
        //  console.log("favorite",favorite)
    } catch (error) {
        console.log(error)
        // showLoginError(error)
    }
}

const createAccount = async () =>{
    const loginEmail = email.value
    const loginPassword = password.value
    try {
        console.log(loginEmail,loginPassword)
        const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
        // console.log(userCredential.user)
        writeUserData(userCredential.user.uid,userCredential.user.email,[],[])
        logedUser = userCredential.user
        btn.textContent = "logout"
    } catch (error) {
        console.log(error)
        // showLoginError(error)
    }
}

const monitorAuthState = async()=>{
    onAuthStateChanged(auth,(user)=>{
        if(user){
            console.log(user)
            console.log('User logged')
            
            logedUser = user
            const favorite = ref(database, "/favorites/" + logedUser.uid);
            onValue(favorite, (snapshot) => {
                const data = snapshot.val();
                favoriteLocal = data
                // console.log("data",data)
                // updateStarCount(postElement, data);
              });
        }else{
            console.log('Loggout or not enter')
            logedUser=null
        }
    })
}
monitorAuthState()

const logout = async() =>{
    await signOut(auth)
}





btn.addEventListener('click',loginEmailPassword)
btnReg.addEventListener('click',createAccount)
btnLogout.addEventListener('click',logout)

function showLoginError(error){
    // // divLoginError.style.display = 'block';
    // if(error.code == AuthErrorCodes.INVALID_PASSWORD){
    //     // do something
    // }else{
    //     //do something
    // }
}
/////////////////////////////////////////////////////////////////////////////////////////////
const database = getDatabase(app);
console.log(database)

function writeUserData(userId,email, newFavorite,newRead) {
    // const db = getDatabase();
    set(ref(database, 'users/' + userId), {
        email:email,
        // favorite: newFavorite,
        // read: newRead,

    });
  }

  function writeNewPost(user, fav,red,) { 
    const id = Date.now() + ''
       
    // console.log("postData",postData)
    // Get a key for a new Post.
    // const newPostKey = push(child(ref(database), 'users/'+ user.uid)).key;
    // const newPostKey = push(child(ref(database), 'favorites/'+ user.uid + "/favorite/"+ id)).key;
    // console.log("newPostKey",newPostKey)
    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates['/favorites/' + user.uid + '/favorite/'] = fav;
    updates['/favorites/' + user.uid + '/read/'] = red;
    return update(ref(database), updates);
  }
  const fav=[{q:1},{q:1},{q:2}]
  const red=[{q:1},{q:1},{q:2},{q:3}]
  
  btnAdd.addEventListener('click',()=>{
    // console.log(logedUser)
    writeNewPost(logedUser,fav,red)
  })

  btnShowBDB.addEventListener('click',()=>{
    // const userDB = ref(database);
    // onValue(userDB, (snapshot) => {
    //     const data = snapshot.val();
    //     // console.log("userDB",data)
    //     favoriteLocal = data
    console.log(favoriteLocal)
    // updateStarCount(postElement, data);
    //   });
  })