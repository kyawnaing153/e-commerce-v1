importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-auth.js');

firebase.initializeApp({
    apiKey: "AIzaSyBRS1HsOoUscDP7krj3W70rNdHPsN7lp2g",
    authDomain: "testproject-80592.firebaseapp.com",
    projectId: "testproject-80592",
    storageBucket: "testproject-80592.firebasestorage.app",
    messagingSenderId: "436206177782",
    appId: "1:436206177782:web:5336610adeef1a08564bd7",
    measurementId: "G-ZSN67NE3X1"
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    return self.registration.showNotification(payload.data.title, {
        body: payload.data.body || '',
        icon: payload.data.icon || ''
    });
});