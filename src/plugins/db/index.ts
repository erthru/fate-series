import { DB_API_KEY, DB_APP_ID, DB_AUTH_DOMAIN, DB_DATABASE_URL, DB_MEASUREMENT_ID, DB_MESSAGING_SENDER_ID, DB_PROJECT_ID, DB_STORAGE_BUCKET } from "../../helpers/contants";
import firebaseApp from "firebase/app";
import "firebase/firestore";

const config = {
    apiKey: DB_API_KEY,
    authDomain: DB_AUTH_DOMAIN,
    databaseURL: DB_DATABASE_URL,
    projectId: DB_PROJECT_ID,
    storageBucket: DB_STORAGE_BUCKET,
    messagingSenderId: DB_MESSAGING_SENDER_ID,
    appId: DB_APP_ID,
    measurementId: DB_MEASUREMENT_ID,
};

firebaseApp.initializeApp(config);

export default firebaseApp.firestore();
