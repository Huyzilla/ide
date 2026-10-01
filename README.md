# HSG Tin học — web luyện tập C++

Dựa trên [judge0/ide](https://github.com/judge0/ide) (MIT), giữ Monaco Editor vendored và giao thức gọi Judge0 từ trình duyệt. Web tĩnh, có thể đặt lên GitHub Pages, không cần server quản lý bài.

## Chạy thử

Ở thư mục project chạy `python -m http.server 8000`, rồi mở `http://localhost:8000/`. Không mở trực tiếp `file://` vì trình duyệt sẽ chặn tải lịch JSON. GitHub Pages: chọn branch và thư mục root trong Settings → Pages.

Cần kết nối đến `https://ce.judge0.com` để dùng Run/Submit. Judge0 có thể giới hạn, thay đổi chính sách API hoặc chặn CORS (quyền gọi khác nguồn) trên GitHub Pages; nếu có lỗi, giao diện sẽ hiển thị HTTP status (mã trạng thái). Không đưa API key bí mật vào JavaScript tĩnh. Các test ở `problems/` hiển thị công khai trong mã nguồn và chỉ phù hợp luyện tập, không chống gian lận.

## Thêm bài

Lịch 92 ngày được xuất từ `Lich_on_HSG_Tin_10-12_2026.xlsx` thành `data/schedule.json`. Ngày chưa có đề vẫn hiển thị lịch và thông báo đang chuẩn bị.

1. Tạo `problems/day12.js` theo cấu trúc `problems/day01.js`, với `id`, `day`, `title`, mô tả, mẫu và `tests` (ít nhất 3 bộ input/output).
2. Import file và ghép mảng vào `problems/index.js`.
3. Commit/push lên nhánh GitHub Pages. Không cần sửa giao diện hoặc luồng chấm.

Code của học sinh và dấu đã đạt lưu trong `localStorage` (bộ nhớ trình duyệt), không đồng bộ giữa thiết bị. Submit so sánh stdout sau khi bỏ khoảng trắng cuối mỗi dòng và newline cuối file; nếu Judge0 báo lỗi biên dịch/chạy, bài không được tính đạt.

## Phân tích base và các phase

- **Phase 1:** `index.html` là entry point (điểm vào). `js/ide.js` khởi tạo GoldenLayout/Monaco trong `require(['vs/editor/editor.main'])`; `run()` mã hóa source/stdin base64, POST `/submissions?base64_encoded=true&wait=false`, rồi `fetchSubmission()` polling (thăm dò) GET theo token và header `X-Judge0-Region`. `loadLangauges()` tải danh sách ngôn ngữ; C++ mặc định là ID 105. CSS chính trước đây là `css/ide.css`, `css/site.css`, `css/semantic.css`.
- **KEEP:** Monaco vendored, mô hình gửi/lấy kết quả Judge0, C++ 105, `LICENSE` và source gốc để tham khảo.
- **MODIFY:** `index.html` dùng giao diện gọn; `js/judge.js` rút luồng Judge0 từ `js/ide.js` để Run và Submit cùng gọi; `css/learning.css` định dạng bố cục.
- **REMOVE khỏi giao diện:** chọn nhiều ngôn ngữ, compiler options, command arguments, AI/Puter, file menu và các menu phụ. File JS cũ giữ trong repo để đối chiếu, không được tải từ entry point mới.
- **ADD:** `data/schedule.json`, `problems/day01.js`, `problems/index.js`, `js/learning.js` với lịch → ngày → bài, Run, Submit và lưu tiến độ.

Luồng V1: trang lịch → danh sách bài một ngày → đề và Monaco → Run với input riêng / Submit qua từng test Judge0 → kết quả. Không có backend ứng dụng riêng.
