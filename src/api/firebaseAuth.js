// src/api/firebaseAuth.js
import { signInAnonymously, signOut } from 'firebase/auth';

function handleSignIn(auth) {
    return signInAnonymously(auth)
        .then(response => (response))
        .catch(error => (error));
}
function handleSignOut(auth) {
    return signOut(auth)
        .then(response => ({response}))
        .catch(error => ({error}));
}

export { handleSignIn, handleSignOut };