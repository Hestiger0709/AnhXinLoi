// Đợi giao diện tải xong hoàn toàn
document.addEventListener('DOMContentLoaded', () => {
    // Tìm nút từ chối trong code gốc (nút màu đỏ nhỏ xíu)
    // Tác giả gốc đặt tên thẻ chứa nút này là .btn-no hoặc #btn-no tùy phiên bản, 
    // đoạn code dưới đây sẽ tự động quét và tìm đúng nút đó cho bạn.
    const btnNo = document.querySelector('.btn-no') || document.querySelector('#btn-no') || document.querySelector('button:not(.btn-yes)');
    
    if (btnNo) {
        // Bắt buộc ép nút sử dụng vị trí tuyệt đối để có thể tự do di chuyển khắp màn hình
        btnNo.style.position = 'fixed';
        btnNo.style.zIndex = '9999';
        btnNo.style.transition = 'all 0.1s ease';

        // Hàm xử lý nhảy sang vị trí ngẫu nhiên
        function moveButton() {
            // Lấy kích thước màn hình điện thoại/máy tính hiện tại
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            // Tính toán tọa độ ngẫu nhiên sao cho nút không bị nhảy ra ngoài rìa màn hình
            const randomX = Math.floor(Math.random() * (windowWidth - btnNo.offsetWidth - 20));
            const randomY = Math.floor(Math.random() * (windowHeight - btnNo.offsetHeight - 20));

            // Cập nhật vị trí mới cho nút
            btnNo.style.left = randomX + 'px';
            btnNo.style.top = randomY + 'px';
        }

        // Khi di chuột vào (trên máy tính) -> nút nhảy liền
        btnNo.addEventListener('mouseover', moveButton);

        // Khi cố tình ấn/chạm vào (trên điện thoại) -> nút cũng nhảy liền và không kích hoạt lệnh bấm
        btnNo.addEventListener('touchstart', function(e) {
            e.preventDefault();
            moveButton();
        });
        btnNo.addEventListener('click', function(e) {
            e.preventDefault();
            moveButton();
        });
    }
});
