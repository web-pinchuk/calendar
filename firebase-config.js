// Firebase web app settings (Project settings -> Your apps -> SDK setup and configuration).
// These values identify the project and are meant to be public; access is protected by the
// Google sign-in and the Firestore security rules. Set to null to keep the calendar local only.
window.FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCr-l22z5HKSDvvU8LZLm2oiNOofDZ6R68',
  authDomain: 'calendar-373bd.firebaseapp.com',
  projectId: 'calendar-373bd',
  storageBucket: 'calendar-373bd.firebasestorage.app',
  messagingSenderId: '51647562460',
  appId: '1:51647562460:web:beb2af1db0c3345b0cea19',
};

// Account id of the site owner. Only the owner, and the invited people the owner allows,
// may keep a calendar of their own here (the same id is written in firestore.rules).
window.OWNER_UID = 'j1NM8SN6ApOFAK55Ro0UU3jPFxx2';

// Google Analytics 4 measurement id (G-XXXXXXXXXX). Empty: no analytics is loaded.
window.GA_ID = 'G-1DZT3GLGNJ';

// Address of the Google Apps Script that sends invitation letters from the owner's Gmail
// (see invite-script.gs). Empty: the site opens a ready letter in Gmail instead.
window.INVITE_URL = '';
