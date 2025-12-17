function signup() {
  const user = {
    email: email.value,
    coins: 0
  };
  localStorage.setItem("qbits_user", JSON.stringify(user));
  location.href = "dashboard.html";
}

function login() {
  if (!localStorage.getItem("qbits_user")) {
    alert("No account found. Sign up first.");
    return;
  }
  location.href = "dashboard.html";
}
