import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAJlWvsHebdK5Woa7IM0UtO0Dq5wC4m9YI",
  authDomain: "article-management-syste-d75aa.firebaseapp.com",
  databaseURL: 'https://article-management-syste-d75aa-default-rtdb.firebaseio.com/',
  projectId: "article-management-syste-d75aa",
  storageBucket: "article-management-syste-d75aa.appspot.com",
  messagingSenderId: "541164323142",
  appId: "1:541164323142:web:ffacb25211895a155ee547"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
