document.addEventListener('DOMContentLoaded', () => {
    // 1. CHỨC NĂNG: Làm cho nút "không bao giờ" nhảy lung tung
    // Tìm đúng nút từ chối dựa theo class gốc (.btn-no) của tác giả
    const btnNo = document.querySelector('.btn-no');
    
    if (btnNo) {
        // Cấu hình cố định để nút có thể nhảy tự do trên màn hình
        btnNo.style.position = 'fixed';
        btnNo.style.zIndex = '9999';
        btnNo.style.transition = 'all 0.1s ease';

        function moveButton() {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            // Tính toán tọa độ ngẫu nhiên không để nút nhảy ra ngoài màn hình
            const randomX = Math.floor(Math.random() * (windowWidth - btnNo.offsetWidth - 20));
            const randomY = Math.floor(Math.random() * (windowHeight - btnNo.offsetHeight - 20));

            btnNo.style.left = randomX + 'px';
            btnNo.style.top = randomY + 'px';
        }

        // Kích hoạt nhảy khi di chuột hoặc chạm màn hình điện thoại vào nút từ chối
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

    // 2. CHỨC NĂNG: Xử lý khi ấn vào nút "Em chấp nhận" (Hiện trái tim và hoa)
    const btnYes = document.querySelector('.btn-yes') || document.querySelector('button:not(.btn-no)');
    if (btnYes) {
        // Đảm bảo nút "Em chấp nhận" đứng yên một chỗ
        btnYes.style.position = 'static'; 

        btnYes.addEventListener('click', () => {
            // Tạo hiệu ứng thả trái tim và hoa bay ngập tràn màn hình
            createHeartsAndFlowers();
        });
    }
});

// Hàm tạo hiệu ứng trái tim và hoa rơi
function createHeartsAndFlowers() {
    // Xóa bớt các chữ cũ trên màn hình để tập trung vào hiệu ứng
    const content = document.querySelector('.content') || document.body;
    content.innerHTML = '<h1 style="color: #ff4d6d; font-family: Arial; font-weight: bold; text-align: center; margin-top: 20%; font-size: 35px; animation: pulse 1s infinite;">Yêuuu bé nhất trên đời! 💖🌹</h1>';

    // Tạo phong nền màu hồng lãng mạn hơn
    document.body.style.backgroundColor = '#ffe5ec';

    // Mảng chứa các biểu tượng trái tim và hoa hồng
    const items = ['💖', '❤️', '🌹', '🌸', '💐', '💕'];

    // Tạo liên tục 80 item rơi xuống trong vòng 3 giây
    for (let i = 0; i < 80; i++) {
        setTimeout(() => {
            const element = document.createElement('div');
            element.innerText = items[Math.floor(Math.random() * items.length)];
            element.style.position = 'fixed';
            element.style.left = Math.random() * 100 + 'vw';
            element.style.top = '-50px';
            element.style.fontSize = Math.random() * (40 - 20) + 20 + 'px';
            element.style.zIndex = '10000';
            element.style.pointerEvents = 'none';
            
            // Tạo hiệu ứng rơi mượt mà
            element.style.transition = `transform ${Math.random() * (5 - 3) + 3}s linear, opacity ${Math.random() * (5 - 3) + 3}s ease`;
            document.body.appendChild(element);

            // Kích hoạt hiệu ứng rơi xuống dưới đáy màn hình
            setTimeout(()
