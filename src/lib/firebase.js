// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  query, 
  where, 
  orderBy, 
  onSnapshot, 
  serverTimestamp 
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvNdhbT6MtKxuBNepI7Du8wxoaxiWumwQ",
  authDomain: "shloki-8d195.firebaseapp.com",
  projectId: "shloki-8d195",
  storageBucket: "shloki-8d195.firebasestorage.app",
  messagingSenderId: "711703561397",
  appId: "1:711703561397:web:414190e4a480b2fb616afc",
  measurementId: "G-WM9R5233PF"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// ============================================================
//  REVIEW SERVICE FUNCTIONS
// ============================================================

// 1. Listen to Real-Time Reviews for a specific book
// This connects your app to the "reviews" collection in the cloud
export const subscribeToReviews = (bookId, callback) => {
  const q = query(
    collection(db, "reviews"),
    where("bookId", "==", bookId),
    orderBy("createdAt", "desc")
  );

  // This creates a live listener. Whenever the database changes, this runs.
  return onSnapshot(q, (snapshot) => {
    const reviews = snapshot.docs.map(doc => {
      const data = doc.data();
      // Convert timestamp to readable date safely
      const date = data.createdAt?.toDate 
        ? data.createdAt.toDate().toLocaleDateString() 
        : 'Just now';
      return { id: doc.id, ...data, date };
    });
    callback(reviews);
  });
};

// 2. Post a New Review
// This sends data from your form to the cloud database
export const postReview = async (bookId, user, rating, text) => {
  try {
    await addDoc(collection(db, "reviews"), {
      bookId,
      user: user || "Anonymous Seeker",
      rating,
      text,
      createdAt: serverTimestamp() // Uses server time for accuracy
    });
    return true;
  } catch (error) {
    console.error("Error posting review:", error);
    return false;
  }
};