document.addEventListener('DOMContentLoaded', () => {
    // 1. Đảm bảo nút Chấp nhận nằm cố định tại vị trí ban đầu
    const btnYes = document.querySelector('.btn-yes') || document.querySelector('button:not([id*="no"])');
    if (btnYes) {
        btnYes.style.position = 'static';
        btnYes.addEventListener('click', () => {
            createHeartsAndFlowers();
        });
    }

    // 2. Định vị xử lý nút "Không bao giờ" tự động chạy trốn
    // Tự động tìm kiếm linh hoạt theo id hoặc class nút từ chối của mã nguồn gốc
    const btnNo = document.getElementById('btn-no-run') || document.querySelector('.btn-no') || document.getElementById('btnNo');
    
    if (btnNo) {
        // Cấu hình bắt buộc để nút có thể tự do di chuyển tự do trên mọi loại màn hình
        btnNo.style.position = 'fixed';
        btnNo.style.zIndex = '9999';
        btnNo.style.transition = 'all 0.1s ease';

        function moveButton() {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            // Tính toán vị trí ngẫu nhiên an toàn (cách rìa màn hình tối thiểu 40px)
            const randomX = Math.floor(Math.random() * (windowWidth - btnNo.offsetWidth - 40));
            const randomY = Math.floor(Math.random() * (windowHeight - btnNo.offsetHeight - 40));

            btnNo.style.left = randomX + 'px';
            btnNo.style.top = randomY + 'px';
        }

        // Kích hoạt né tránh ngay lập tức khi di chuột (máy tính) hoặc chạm tay vào (điện thoại)
        btnNo.addEventListener('mouseover', moveButton);
        btnNo.addEventListener('touchstart', function(e) {
            e.preventDefault(); // Ngăn hành vi bấm mặc định trên điện thoại
            moveButton();
        });
        btnNo.addEventListener('click', function(e) {
            e.preventDefault();
            moveButton();
        });
    }
});

// Hàm khởi tạo màn hình chúc mừng lãng mạn ngập tràn trái tim và hoa hồng rơi
function createHeartsAndFlowers() {
    document.body.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background-color: #ffe5ec; font-family: Arial, sans-serif; text-align: center; box-sizing: border-box; padding: 20px;">
            <h1 style="color: #ff4d6d; font-weight: bold; font-size: 38px; margin: 0; padding-bottom: 20px; animation: pulse 1s infinite;">Yêuuu bé nhất trên đời! 💖🌹</h1>
            <p style="color: #ff758f; font-size: 19px; margin: 0; line-height: 1.5;">Cảm ơn em vì đã chấp nhận tha lỗi cho anh nhaaa nhóoo~ 🥰</p>
        </div>
    `;

    const items = ['💖', '❤️', '🌹', '🌸', '💐', '💕'];

    // Tạo vòng lặp thả liên tục các icon rơi từ trên xuống
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

// Tạo hiệu ứng nhịp đập phóng to thu nhỏ nhẹ cho dòng chữ chúc mừng
const style = document.createElement('style');
style.innerHTML = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.06); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);
