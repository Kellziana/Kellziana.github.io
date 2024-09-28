import firebase_app from "../config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function addData(collection, id, data) {
    let error = null;

    try {
        await setDoc(doc(db, collection, id), data, { merge: true });
    } catch (e) {
        error = e;
        console.error("Firestore error:", error);
    }

    return { error };
}
