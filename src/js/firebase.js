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

const refs = {
    authContainer:document.querySelector('.auth__container'),
    userContainer:document.querySelector('.user__container'),
    showModalBtnSingUp:document.querySelector("#signUpBtn"),
    showModalBtnSignIn:document.querySelector("#signInBtn"),
    headerUserName:document.querySelector("#header-user-name"),

    modal:document.querySelector('#auth-modal'),
    modalCloseBtn:document.querySelector('.close-btn'),
    modalBackdrop:document.querySelector('.modal-bgd'),
    modalText:document.querySelector('#auth-modal-text'),

    name: document.querySelector("#user-name"),
    email: document.querySelector("#user-email"),
    password: document.querySelector("#user-password"),
    singFormBtn: document.querySelector("#submit-form-btn"),
    errorHandler:document.querySelector("#error-handler"),




    btnLogout:document.querySelector("#btnLogout"),
    btnAdd:document.querySelector("#add"),
    btnShowBDB:document.querySelector("#showBDB"),
    
    authOperation:null,
    logedUser:null,
    logedUserName:null,
    favoriteLocal:null,
    readLocal:null,

}

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

//function signIn or signUp operation 
function signInOrSignUpFn (e){
    e.preventDefault();
    if(!refs.authOperation){
        console.log('error auth operation')
        return
    }
    if(refs.authOperation === 'signIn'){
        authErrorMiddleware(loginEmailPassword,'signIn')
    }
    if(refs.authOperation === 'signUp'){
        authErrorMiddleware(createAccount,'signUp')
    }

}

//function login user on email&password 
const loginEmailPassword = async (loginEmail,loginPassword)=>{
    try {
        console.log(loginEmail,loginPassword)
        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        refs.logedUser = userCredential.user
       
        // writeUserData(userCredential.user.uid,userCredential.user.email,[],[])
        const db = ref(database,);
        console.log('db',db)
        onValue(db, (snapshot) => {
        const data = snapshot.val();
        refs.logedUserName = data.users[refs.logedUser.uid].name
        console.log('logedUserName',refs.logedUserName)
        refs.headerUserName.textContent = refs.logedUserName
        refs.modal.classList.remove('modal-active')
        refs.authContainer.classList.add("is-hidden");
        refs.userContainer.classList.remove("is-hidden");

        });
    } catch (error) {
        console.log(error)
        showLoginError(error)
    }
}

//function create useron email&password
const createAccount = async (createEmail,createPassword,createName) =>{
    try {
        console.log(createEmail,createPassword,createName)
        const userCredential = await createUserWithEmailAndPassword(auth, createEmail, createPassword)
        
        refs.modal.classList.remove('modal-active')
        refs.authContainer.classList.add("is-hidden");
        refs.userContainer.classList.remove("is-hidden");
        writeUserData(userCredential.user.uid,userCredential.user.email,createName,[],[])
        refs.logedUser = userCredential.user

        const db = ref(database,);
        onValue(db, (snapshot) => {
            const data = snapshot.val();
            refs.logedUserName = data.users[refs.logedUser.uid].name
            refs.headerUserName.textContent = data.users[refs.logedUser.uid].name
            // console.log('refs.favoriteLocal1',refs.logedUserName)
            });
        // console.log("refs.logedUser",refs.logedUser)
        // console.log("refs.favoriteLocal",refs.favoriteLocal)
        // refs.singInFormBtn.textContent = "logout"
    } catch (error) {
        console.log(error)
        showLoginError(error)
    }
}

//function monitoring changes on realtime database
const monitorAuthState = async()=>{
    onAuthStateChanged(auth,(user)=>{
        if(user){
            console.log(user)
            console.log('User logged')
            
            refs.logedUser = user

            const favorite = ref(database, "/favorites/" + refs.logedUser.uid);
            const db = ref(database,);
            onValue(favorite, (snapshot) => {
                const data = snapshot.val();
                refs.favoriteLocal = data
                // console.log("data",data)
                // updateStarCount(postElement, data);
              });
            onValue(db, (snapshot) => {
                const data = snapshot.val();
                refs.logedUserName = data.users[refs.logedUser.uid].name
                console.log('logedUserName',refs.logedUserName)
                refs.headerUserName.textContent = refs.logedUserName
                refs.modal.classList.remove('modal-active')
                refs.authContainer.classList.add("is-hidden");
                refs.userContainer.classList.remove("is-hidden");
              });
        }else{
            console.log('Loggout or not enter')
            refs.logedUser=null
            refs.logedUserName=null
        }
    })
}
monitorAuthState()

// function logout user
const logout = async() =>{
    try {
        await signOut(auth)
        refs.authContainer.classList.remove("is-hidden");
        refs.userContainer.classList.add("is-hidden");
        refs.errorHandler.textContent = ''
        refs.logedUser = null
        refs.logedUserName= null
        refs.favoriteLocal = null
        refs.readLocal = null
    } catch (error) {
        console.log(error)
        //fn can`t logout user, because user is not loged!!!
    }
    
}
//reset form fields 
function reset(){
    refs.email.value = ''
    refs.password.value = ''
    refs.name.value = ''
}

refs.singFormBtn.addEventListener('click',signInOrSignUpFn)


refs.btnLogout.addEventListener('click',logout)
refs.showModalBtnSignIn.addEventListener('click',toggleModalSignIn)
refs.showModalBtnSingUp.addEventListener('click',toggleModalSignUp)
refs.modal.addEventListener('click',closeModal)

// show modal whith signIn operations 
function toggleModalSignIn() {
    refs.authOperation = 'signIn'
    refs.errorHandler.textContent = ''
    refs.modalText.textContent = 'Sign In please in account'
    refs.singFormBtn.textContent = 'Sign In'
    refs.name.parentElement.classList.add("is-hidden")
    reset()
    refs.modal.classList.add('modal-active')
}
//show modal whith signUp opertions 
function toggleModalSignUp() {
    refs.authOperation = 'signUp'
    refs.errorHandler.textContent = ''
    refs.modalText.textContent = 'Sign Up please for more'
    refs.singFormBtn.textContent = 'Sign Up'
    refs.name.parentElement.classList.remove("is-hidden")
    reset()
    refs.modal.classList.add('modal-active')
}
//close modal 
function closeModal(e){
    if(e.target === refs.modalCloseBtn || e.target === refs.modalBackdrop){
        refs.modal.classList.remove('modal-active');
        refs.authOperation = null
    }
}

function showLoginError(error){
    // // divLoginError.style.display = 'block';
    console.log("AuthErrorCodes",AuthErrorCodes)
    if(error.code == AuthErrorCodes.INVALID_PASSWORD){
        // do something
        refs.errorHandler.textContent = 'Wrong password'
            return
    }
    if(error.code == AuthErrorCodes.USER_DELETED){
        // do something
        refs.errorHandler.textContent = 'User not found'
            return
    }
    if(error.code == AuthErrorCodes.EMAIL_EXISTS
        ){
        // do something
        refs.errorHandler.textContent = 'Email already exist'
            return
    }
}


// ====== !! add realtime database !!===== //
const database = getDatabase(app);
console.log(database)

// function add user.uid in readlite db
function writeUserData(userId,email,name) {
    // const db = getDatabase();
    set(ref(database, 'users/' + userId), {
        email:email,
        name:name,
    });
  }

//fucntion add user read & favorite arrays
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
  
  refs.btnAdd.addEventListener('click',()=>{
    // console.log(logedUser)
    writeNewPost(refs.logedUser,fav,red)
  })

  refs.btnShowBDB.addEventListener('click',()=>{
    // const userDB = ref(database);
    // onValue(userDB, (snapshot) => {
    //     const data = snapshot.val();
    //     // console.log("userDB",data)
    //     favoriteLocal = data
    console.log(refs.favoriteLocal)
    // updateStarCount(postElement, data);
    //   });
  })
// ====== !! add realtime database !!===== //




// frontend error guard 
  function authErrorMiddleware(callback,type){
    if(type === 'signIn'){
        if(refs.email.value === '' || refs.password.value === ''){
            refs.errorHandler.textContent = 'Please fill all fields'
            return
        }
        callback(refs.email.value,refs.password.value)
        return
    }
    if(type === 'signUp'){
        if(refs.name.value === '' || refs.email.value === ''){
            refs.errorHandler.textContent = 'Please fill all fields'
            return
        }
        if(refs.password.value.length <6){
            refs.errorHandler.textContent = 'Password must be more than 6 symbols'
            return
        }
        callback(refs.email.value,refs.password.value,refs.name.value)
        return
    }
    reset()
  }