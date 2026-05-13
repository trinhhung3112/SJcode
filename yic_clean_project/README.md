# YIC Clean Project

Cấu trúc đã tách riêng:

- `index.html` — phần HTML chính
- `css/style.css` — toàn bộ giao diện
- `js/main.js` — xử lý chuyển trang, đồng hồ, hiệu ứng, tương tác
- `assets/videos/hero-1.mp4` ... — video đã được tách khỏi base64 và dùng bằng đường dẫn file

## Cách đổi video
Trong `index.html`, tìm:

```html
<source src="assets/videos/hero-1.mp4" type="video/mp4">
```

Đổi tên file thành video của bạn, ví dụ:

```html
<source src="assets/videos/main-video.mp4" type="video/mp4">
```

Sau đó đặt file video vào thư mục `assets/videos/`.

## Cách chạy
Mở trực tiếp `index.html` bằng trình duyệt, hoặc dùng Live Server trong VS Code.
