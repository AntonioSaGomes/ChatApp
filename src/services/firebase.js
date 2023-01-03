import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

async function loginWithGoogle() {
    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        const { user } = await signInWithPopup(auth, provider);

        console.log(user);

        return { uid: user.uid, displayName: user.displayName, photo: user.photoURL };
    } catch (error) {
        if (error.code !== 'auth/cancelled-popup-request') {
            console.error(error);
        }

        return null;
    }
}

export { loginWithGoogle };