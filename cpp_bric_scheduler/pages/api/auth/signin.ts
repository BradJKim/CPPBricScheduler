import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";

export default async function signup (email: string, password: string){
    return createUserWithEmailAndPassword(auth, email, password); 
}