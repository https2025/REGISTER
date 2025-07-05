import { auth } from "../firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const db = getFirestore();

onAuthStateChanged(auth, async (user) => {
  if (!user || !user.emailVerified) {
    alert("Harus login & verifikasi email.");
    window.location.href = "login.html";
  } else {
    const snap = await getDoc(doc(db, "users", user.uid));
    const data = snap.data();

    document.getElementById("username").textContent = data.firstName + " " + data.lastName;
    document.getElementById("useremail").textContent = data.email;
    document.getElementById("userphone").textContent = data.phone;
  }
});

document.getElementById("logoutBtn").addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "login.html";
});
