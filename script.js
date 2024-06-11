// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Google login
document.getElementById('google-login').addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            console.log('User signed in:', result.user);
        })
        .catch((error) => {
            console.error('Error during sign-in:', error);
        });
});

// Apple login
document.getElementById('apple-login').addEventListener('click', () => {
    const provider = new firebase.auth.OAuthProvider('apple.com');
    auth.signInWithPopup(provider)
        .then((result) => {
            console.log('User signed in:', result.user);
        })
        .catch((error) => {
            console.error('Error during sign-in:', error);
        });
});

// Register new user
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('User registered:', userCredential.user);
        })
        .catch((error) => {
            console.error('Error during registration:', error);
        });
});
