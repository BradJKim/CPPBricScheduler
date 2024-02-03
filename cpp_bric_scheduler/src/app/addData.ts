import { db  } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default async function addData(data: any) {
    let result = null;
    let error = null;

    try {
        result = await addDoc(collection(db, "schedules"), {
            Monday: data.monday,
            Tuesday: data.tuesday,
            Wednesday: data.wednesday,
            Thursday: data.thursday,
            Friday: data.friday,
            Saturday: data.saturday,
            Sunday: data.sunday,
            identifier: data.identifier,
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}