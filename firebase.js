import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAv4GFNHHr-kiapjlx2pyt2-xTpUsiQRns",
    authDomain: "react-native-food-app-b05a7.firebaseapp.com",
    projectId: "react-native-food-app-b05a7",
    storageBucket: "react-native-food-app-b05a7.appspot.com",
    messagingSenderId: "74799144358",
    appId: "1:74799144358:web:d0a85dd7e9ac31928c8367"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
/*
    // Import the functions you need from the SDKs you need
        import { initializeApp } from "firebase/app";
    // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
*/
