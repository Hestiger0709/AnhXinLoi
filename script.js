document.addEventListener('DOMContentLoaded', () => {
    // 1. CHỨC NĂNG: Làm nút "Không bao giờ" nhảy trốn
    const btnNo = document.getElementById('btn-no-run');
    
    if (btnNo) {
        // Cấu hình bắt buộc để nút nhảy tự do trên màn hình
        btnNo.style.position = 'fixed';
        btnNo.style.zIndex = '9999';
        btnNo.style.transition = 'all 0.1s ease';

        function moveButton() {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            // Tính toán vị trí ngẫu nhiên cách rìa màn hình tối thiểu 30px
            const randomX = Math.floor(Math.random() * (windowWidth - btnNo.offsetWidth - 30));
            const randomY = Math.floor(Math.random() * (windowHeight - btnNo.offsetHeight - 30));

            btnNo.style.left = randomX + 'px';
            btnNo.style.top = randomY + 'px';
        }

        // Nhảy khi di chuột (máy tính) hoặc chạm (điện thoại)
        btnNo.addEventListener('mouseover', moveButton);
        btnNo.addEventListener('touchstart', function(e) {
            e.preventDefault();
            moveButton();
        });
        btnNo.addEventListener('click', function(e) {
            e.preventDefault();
            moveButton();
        });
    }

    // 2. CHỨC NĂNG: Ấn vào "Em chấp nhận" -> Hiện hiệu ứng lãng mạn
    const btnYes = document.querySelector('.btn-yes');
    if (btnYes) {
        btnYes.addEventListener('click', () => {
            createHeartsAndFlowers();
        });
    }
});

// Hàm tạo màn hình chúc mừng với hiệu ứng trái tim và hoa rơi
function createHeartsAndFlowers() {
    // Đổi toàn bộ nội dung hiển thị thành lời chúc ngọt ngào
    document.body.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background-color: #ffe5ec; font-family: Arial, sans-serif; text-align: center; box-sizing: border-box; padding: 20px;">
            <h1 style="color: #ff4d6d; font-weight: bold; font-size: 38px; margin: 0; padding-bottom: 20px; animation: pulse 1s infinite;">Yêuuu bé nhất trên đời! 💖🌹</h1>
            <p style="color: #ff758f; font-size: 18px; margin: 0;">Cảm ơn em vì đã chấp nhận tha lỗi cho anh nhaaa nhóoo~ 🥰</p>
        </div>
    `;

    const items = ['💖', '❤️', '🌹', '🌸', '💐', '💕'];

    // Tạo hiệu ứng vật thể rơi liên tục trong 5 giây
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const element = document.createElement('div');
            element.innerText = items[Math.floor(Math.random() * items.length)];
            element.style.position = 'fixed';
            element.style.left = Math.random() * 100 + 'vw';
            element.style.top = '-50px';
            element.style.fontSize = Math.random() * (45 - 20) + 20 + 'px';
            element.style.zIndex = '10000';
            element.style.pointerEvents = 'none';
            element.style.transition = `transform ${Math.random() * (4 - 2) + 2}s linear, opacity ${Math.random() * (4 - 2) + 2}s ease`;
            
            document.body.appendChild(element);

            setTimeout(() => {
                element.style.transform = `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`;
                element.style.opacity = '0';
            }, 100);

            setTimeout(() => { element.remove(); }, 4000);
        }, i * 50);
    }
}

// Thêm animation nhịp đập cho chữ
const style = document.createElement('style');
style.innerHTML = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.08); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);
