import { auth } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";


window.signup = () => {
createUserWithEmailAndPassword(auth, email.value, password.value)
.then(() => location = 'dashboard.html');
};


window.login = () => {
signInWithEmailAndPassword(auth, email.value, password.value)
.then(() => location = 'dashboard.html');
};
