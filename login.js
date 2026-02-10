const PASSCODE = "2609";
let input = "";

/* 🔴 QUAN TRỌNG
   MỖI LẦN VÀO TRANG LOGIN → BẮT BUỘC RESET TRẠNG THÁI
*/
localStorage.removeItem("loggedIn");
localStorage.removeItem("role");

function press(num) {
    const sound = document.getElementById("keySound");
    sound.currentTime = 0;
    sound.play();

    if (input.length >= 4) return;

    input += num;
    updateDots();

    if (input.length === 4) {
        setTimeout(checkPass, 200);
    }
}

function del() {
    input = input.slice(0, -1);
    updateDots();
}

function updateDots() {
    document.querySelectorAll(".dots span").forEach((dot, i) => {
        dot.classList.toggle("filled", i < input.length);
    });
}

function checkPass() {
    const box = document.querySelector(".ios-lock");

    if (input === PASSCODE) {
        // ✅ ĐĂNG NHẬP THÀNH CÔNG
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("role", "user");
        window.location.replace("index.html");
    } else {
        box.classList.add("shake");
        setTimeout(() => box.classList.remove("shake"), 350);
        input = "";
        updateDots();
    }
}

function guestLogin() {
    // ✅ VÀO CHẾ ĐỘ KHÁCH
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("role", "guest");
    window.location.replace("index.html");
}
