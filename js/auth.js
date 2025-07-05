import { auth } from "../firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Register
const regBtn = document.getElementById("registerBtn");
if (regBtn) {
  regBtn.addEventListener("click", async () => {
    const email = document.getElementById("regEmail").value;
    const pass = document.getElementById("regPassword").value;
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, pass);
      await sendEmailVerification(userCred.user);
      alert("Registrasi berhasil. Cek email untuk verifikasi.");
    } catch (err) {
      alert(err.message);
    }
  });
}

// Login
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPassword").value;
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, pass);
      if (!userCred.user.emailVerified) {
        alert("Email belum diverifikasi.");
        return;
      }
      alert("Login sukses!");
      window.location.href = "/";
    } catch (err) {
      alert(err.message);
    }
  });
}
