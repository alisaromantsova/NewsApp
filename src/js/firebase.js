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
// import { fetchPopularNews } from "./fetches";
// import { successCallback, failureCallback } from './weather';
import { onMount } from "./onmount";
import { renderMarkup } from "./addtofavorite";
import { buttonChanging, renderReadMarkup } from "./read-page";

export const refs = {
    authContainer:document.querySelector('.auth__container'),
    userContainer:document.querySelector('.user__container'),
    showModalBtnSingUp:document.querySelector("#signUpBtn"),
    showModalBtnSignIn:document.querySelector("#signInBtn"),
    showModalBtnSignInMob:document.querySelector("#mob-signInBtn"),
    showModalBtnSignUpMob:document.querySelector("#mob-signUpBtn"),
    backdropMobMenu:document.querySelector(".backdrop"),
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
    btnLogoutMob:document.querySelector("#mob-logoutBtn"),
    btnAdd:document.querySelector("#add"),
    btnShowBDB:document.querySelector("#showBDB"),
    
    authOperation:null,
    logedUser:null,
    logedUserName:null,
    favoriteLocal:[],
    readLocal:[],
    isReadLocal:{},

    firstUserRender:true,

    ulListNews:document.querySelector('.list-news'),
    errorBox:document.querySelector('.error-box'),

    pending:true,
    

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
        // console.log('logedUserName',refs.logedUserName)
        refs.headerUserName.textContent = refs.logedUserName
        refs.modal.classList.remove('modal-active')
        refs.authContainer.classList.add("is-hidden");
        refs.userContainer.classList.remove("is-hidden");

        });
        const favorite = ref(database, "/favorites/" + refs.logedUser.uid);
        onValue(favorite, (snapshot) => {
            const data = snapshot.val();
            if(data?.favorite){
                // console.log('fav',data.favorite)
                refs.favoriteLocal = data.favorite
            }
            if(data?.read){
                // console.log('red',data.read)
                refs.readLocal = data.read
            }
            if(data?.isread){
                // console.log('isred',data.isread)
                refs.isReadLocal = data.isread
            }
            // console.log("data",data)
            // updateStarCount(postElement, data);
          });
          refs.backdropMobMenu.classList.remove('is-open')
          
    } catch (error) {
        console.log(error)
        showLoginError(error)
    }
}

//function create user on email&password
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
            });

            refs.backdropMobMenu.classList.remove('is-open')
    } catch (error) {
        console.log(error)
        showLoginError(error)
    }
}

// function monitoring changes on realtime database
export async function monitorAuthState(){

    const favoriteListNews = document.querySelector('.list-news')
    const preloader = document.querySelector('.preloader')
    const readContainer = document.querySelector('.container__read')
    if(favoriteListNews)favoriteListNews.classList.add('is-hidden')
    if(readContainer)readContainer.classList.add('is-hidden')
    if(preloader)preloader.classList.remove('loaded')

    await onAuthStateChanged(auth,(user)=>{
        if(user){
           
            // console.log('a',a)
            // console.log('b',b)
            // console.log(user)
            // console.log('User logged')
            refs.btnLogoutMob.classList.remove('is-hidden')
            refs.showModalBtnSignInMob.classList.add('is-hidden')
            refs.showModalBtnSignUpMob.classList.add('is-hidden')
            refs.logedUser = user

            const favorite = ref(database, "/favorites/" + refs.logedUser.uid);
            const db = ref(database,);
            
            onValue(db, async(snapshot) => {
                const data = await snapshot.val();
                refs.logedUserName = data.users[refs.logedUser.uid].name
                console.log('logedUserName',refs.logedUserName)
                refs.headerUserName.textContent = refs.logedUserName
                refs.modal.classList.remove('modal-active')
                refs.authContainer.classList.add("is-hidden");
                refs.userContainer.classList.remove("is-hidden");
            });

            if(refs.logedUser){
                
                onValue(favorite, async(snapshot) => {
                    const data =  await snapshot.val();
                    if(data?.favorite){
                        // console.log('fav',data.favorite)
                        refs.favoriteLocal = data.favorite
                    }
                    if(data?.read){
                        // console.log('red',data.read)
                        refs.readLocal = data.read
                    }
                    if(data?.isread){
                        // console.log('isRed',data.isread)
                        refs.isReadLocal = data.isread
                    }

                    if(refs.firstUserRender && window.location.pathname === '/index.html' ||
                    window.location.pathname === '/NewsApp/' ||
                    window.location.pathname === '/' ||
                    window.location.pathname === '/NewsApp/index.html'){
                        onMount()
                        refs.firstUserRender = false        
                    } 

                    if(window.location.pathname === '/favorite.html' ||
                    window.location.pathname === '/NewsApp/favorite.html'){
                        console.log(window.location.pathname)
                        renderMarkup(); 
                    }
                    if(window.location.pathname === '/read.html'||
                    window.location.pathname === '/NewsApp/read.html'){
                        await renderReadMarkup()
                        await buttonChanging()
                    }
                    if(preloader)preloader.classList.add('loaded')
                    if(favoriteListNews)favoriteListNews.classList.remove('is-hidden')
                    if(readContainer)readContainer.classList.remove('is-hidden') 
                }); 
              
            }
            
        }else{
            console.log('Loggout or not enter')
            refs.logedUser=null
            refs.logedUserName=null
            if(preloader)preloader.classList.add('loaded')
            if(favoriteListNews)favoriteListNews.classList.remove('is-hidden')
            if(readContainer)readContainer.classList.remove('is-hidden') 
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
        refs.btnLogoutMob.classList.add('is-hidden')
        refs.showModalBtnSignInMob.classList.remove('is-hidden')
        refs.showModalBtnSignUpMob.classList.remove('is-hidden')
        refs.errorHandler.textContent = ''
        refs.logedUser = null
        refs.logedUserName= null
        refs.favoriteLocal = []
        refs.readLocal = []
        refs.isReadLocal = {}
        if(window.location.pathname === '/index.html'||
        window.location.pathname === '/NewsApp/' ||
        window.location.pathname === '/' ||
        window.location.pathname === '/NewsApp/index.html'){
            onMount()  
            refs.firstUserRender = true
        }
        if(window.location.pathname === '/favorite.html'||
        window.location.pathname === '/NewsApp/favorite.html'){
            renderMarkup()
        }
        if(window.location.pathname === '/read.html'||
        window.location.pathname === '/NewsApp/read.html'){
            renderReadMarkup();
        }         
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
refs.btnLogoutMob.addEventListener('click',logout)
refs.showModalBtnSignIn.addEventListener('click',toggleModalSignIn)
refs.showModalBtnSingUp.addEventListener('click',toggleModalSignUp)
refs.showModalBtnSignInMob.addEventListener('click',toggleModalSignIn)
refs.showModalBtnSignUpMob.addEventListener('click',toggleModalSignUp)
refs.modal.addEventListener('click',closeModal)


// show modal whith signIn operations 
function toggleModalSignIn(e) {
    e.preventDefault();
    refs.authOperation = 'signIn'
    refs.errorHandler.textContent = ''
    refs.modalText.textContent = 'Sign In please in account'
    refs.singFormBtn.textContent = 'Sign In'
    refs.name.parentElement.classList.add("is-hidden")
    reset()
    refs.modal.classList.add('modal-active')
    document.addEventListener('keyup',closeModal)
}
//show modal whith signUp opertions 
function toggleModalSignUp(e) {
    e.preventDefault();
    refs.authOperation = 'signUp'
    refs.errorHandler.textContent = ''
    refs.modalText.textContent = 'Sign Up please for more'
    refs.singFormBtn.textContent = 'Sign Up'
    refs.name.parentElement.classList.remove("is-hidden")
    reset()
    refs.modal.classList.add('modal-active')
    document.addEventListener('keyup',closeModal)
}
//close modal 
function closeModal(e){
    if(e.target === refs.modalCloseBtn || e.target === refs.modalBackdrop || e?.key ==="Escape" ){
        refs.modal.classList.remove('modal-active');
        refs.authOperation = null
        document.removeEventListener('keyup',closeModal)
    }
    
}

function showLoginError(error){
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
export const database = getDatabase(app);
// console.log(database)

// function add user in readlite db on user registration 
function writeUserData(userId,email,name) {
    // const db = getDatabase();
    set(ref(database, 'users/' + userId), {
        email:email,
        name:name,
    });
  }

//fucntion add user read & favorite arrays
 export function writeNewPost(user, fav,red,isRead) { 
    const updates = {};
    updates['/favorites/' + user.uid + '/favorite/'] = fav;
    updates['/favorites/' + user.uid + '/read/'] = red;
    updates['/favorites/' + user.uid + '/isread/'] = isRead;
    return update(ref(database), updates);
  }  

//   refs.btnAdd.addEventListener('click',()=>{
//     writeNewPost(refs.logedUser,refs.favoriteLocal,refs.readLocal)
//   })

  refs.btnShowBDB.addEventListener('click',()=>{
    console.log("refs.favoriteLocal",refs.favoriteLocal)
    console.log("refs.readLocal",refs.readLocal)
    console.log("refs.isReadLocal",refs.isReadLocal)

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