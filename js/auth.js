import { auth } from "../firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Register
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
const db = getFirestore();

const regBtn = document.getElementById("registerBtn");
if (regBtn) {
  regBtn.addEventListener("click", async () => {
    const email = document.getElementById("regEmail").value;
    const pass = document.getElementById("regPassword").value;
    const confirm = document.getElementById("regConfirm").value;
    const fname = document.getElementById("firstName").value;
    const lname = document.getElementById("lastName").value;
    const phone = document.getElementById("phoneNumber").value;

    if (pass !== confirm) return alert("Password tidak sama.");

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, pass);
      await sendEmailVerification(userCred.user);

      await setDoc(doc(db, "users", userCred.user.uid), {
        firstName: fname,
        lastName: lname,
        email,
        phone,
        createdAt: new Date().toISOString()
      });

      alert("Akun berhasil dibuat. Silakan verifikasi email.");
    } catch (err) {
      alert(err.message);
    }
  });
}

// Show password
const showPass = document.getElementById("showPass");
if (showPass) {
  showPass.addEventListener("change", () => {
    document.getElementById("regPassword").type = showPass.checked ? "text" : "password";
    document.getElementById("regConfirm").type = showPass.checked ? "text" : "password";
  });
}
