import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';

const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);


export default firestore;