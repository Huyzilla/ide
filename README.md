# Web luyện tập C++ cho học sinh

## Chạy thử

Ở thư mục project chạy `python -m http.server 8000`, rồi mở `http://localhost:8000/`. Không mở trực tiếp `file://` vì trình duyệt sẽ chặn tải lịch JSON. GitHub Pages: chọn branch và thư mục root trong Settings → Pages.

Cần kết nối đến `https://ce.judge0.com` để dùng Run/Submit. Judge0 có thể giới hạn, thay đổi chính sách API hoặc chặn CORS (quyền gọi khác nguồn) trên GitHub Pages; nếu có lỗi, giao diện sẽ hiển thị HTTP status (mã trạng thái). Không đưa API key bí mật vào JavaScript tĩnh. Các test ở `problems/` hiển thị công khai trong mã nguồn và chỉ phù hợp luyện tập, không chống gian lận.