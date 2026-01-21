import { storage, auth } from "./firebase.js";
import { ref, uploadBytes } from
"https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";

upload.onclick = async () => {
  const file = document.getElementById("file").files[0];
  if (!file) return alert("No file selected");

  if (!file.name.endsWith(".json")) {
    alert("Only .json files allowed");
    return;
  }

  const user = auth.currentUser;
  const fileRef = ref(storage, `configs/${user.uid}/${file.name}`);

  await uploadBytes(fileRef, file);
  alert("Config uploaded");
};
