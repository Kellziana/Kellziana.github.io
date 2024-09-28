import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore"; 

const auth = getAuth(firebase_app);
const db = getFirestore(firebase_app);

export default async function signUp(email, password, username) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);

        // Store additional user information (like username) in Firestore
        await setDoc(doc(db, "users", result.user.uid), {
            username: username,
            email: email,
        });
    } catch (e) {
        error = e;
        console.error('Firebase Error Code:', error.code);
        console.error('Firebase Error Message:', error.message);
    }

    return { result, error };
}
