import { auth } from "../firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

document.getElementById("registerBtn").addEventListener("click", async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
    await sendEmailVerification(userCredential.user);
    alert("Pendaftaran berhasil! Silakan verifikasi email kamu.");
  } catch (err) {
    alert(err.message);
  }
});

document.getElementById("loginBtn").addEventListener("click", async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
    if (!userCredential.user.emailVerified) {
      alert("Email belum diverifikasi!");
      return;
    }
    window.location.href = "/dashboard.html";
  } catch (err) {
    alert(err.message);
  }
});
