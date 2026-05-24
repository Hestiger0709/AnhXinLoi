document.addEventListener('DOMContentLoaded', () => {
    // 1. TỰ ĐỘNG QUÉT VÀ TÌM NÚT "KHÔNG BAO GIỜ" DỰA TRÊN CHỮ HIỂN THỊ
    let btnNo = null;
    const allButtons = document.querySelectorAll('button, a');
    
    allButtons.forEach(btn => {
        if (btn.textContent.trim().includes('Không bao giờ') || btn.textContent.trim().includes('không bao giờ')) {
            btnNo = btn;
        }
    });

    // Nếu tìm thấy nút từ chối, ép nó phải chạy trốn
    if (btnNo) {
        btnNo.style.position = 'fixed';
        btnNo.style.zIndex = '99999';
        btnNo.style.transition = 'all 0.1s ease';

        function moveButton() {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            // Tính toán vị trí ngẫu nhiên cách rìa màn hình tối thiểu 50px
            const randomX = Math.floor(Math.random() * (windowWidth - btnNo.offsetWidth - 50));
            const randomY = Math.floor(Math.random() * (windowHeight - btnNo.offsetHeight - 50));

            btnNo.style.left = randomX + 'px';
            btnNo.style.top = randomY + 'px';
        }

        // Kích hoạt né tránh khi rê chuột (máy tính) hoặc chạm tay (điện thoại)
        btnNo.addEventListener('mouseover', moveButton);
        btnNo.addEventListener('touchstart', function(e) {
            e.preventDefault(); // Chặn đứng lệnh click chọn trên điện thoại
            moveButton();
        });
        btnNo.addEventListener('click', function(e) {
            e.preventDefault(); // Chặn đứng lệnh nếu cố tình click nhanh
            moveButton();
        });
    }

    // 2. TỰ ĐỘNG TÌM NÚT "EM CHẤP NHẬN" ĐỂ GẮN HIỆU ỨNG HOA VÀ TRÁI TIM
    let btnYes = null;
    allButtons.forEach(btn => {
        if (btn.textContent.trim().includes('Em chấp nhận') || btn.textContent.trim().includes('em chấp nhận')) {
            btnYes = btn;
        }
    });

    if (btnYes) {
        // Đảm bảo nút chấp nhận luôn đứng yên tại chỗ
        btnYes.style.position = 'static';
        
        btnYes.addEventListener('click', () => {
            createHeartsAndFlowers();
        });
    }
});

// Hàm tạo hiệu ứng lãng mạn sau khi ấn "Em chấp nhận"
function createHeartsAndFlowers() {
    // Đổi giao diện thành lời cảm ơn ngọt ngào
    document.body.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background-color: #ffe5ec; font-family: Arial, sans-serif; text-align: center; box-sizing: border-box; padding: 20px;">
            <h1 style="color: #ff4d6d; font-weight: bold; font-size: 38px; margin: 0; padding-bottom: 20px; animation: pulse 1s infinite;">Yêuuu bé nhất trên đời! 💖🌹</h1>
            <p style="color: #ff758f; font-size: 19px; margin: 0; line-height: 1.5;">Cảm ơn em vì đã chấp nhận tha lỗi cho anh nhaaa nhóoo~ 🥰</p>
        </div>
    `;

    const items = ['💖', '❤️', '🌹', '🌸', '💐', '💕'];

    // Tạo hiệu ứng thả vật thể rơi ngẫu nhiên
    for (let i = 0; i < 120; i++) {
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
        }, i * 40);
    }
}

// Style hiệu ứng nhịp đập cho chữ chúc mừng
const style = document.createElement('style');
style.innerHTML = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.06); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);
