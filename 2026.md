## Đề bài
Đề bài: các nhóm cần thực hiện hai pha. Pha 1 bao gồm việc xây dựng hệ thống với các chức năng cơ bản theo yêu cầu. Pha 2 dựa vào dự án từ pha 1 để đưa ra các cải tiến liên quan đến các thuộc tính chất lượng.

## Yêu cầu Pha 1

Mỗi nhóm chọn một nghiệp vụ (rạp phim, giỏ hàng, bãi đỗ xe,...) và xây dựng một dịch vụ backend thỏa các yêu cầu sau.

**API:**
- Sử dụng REST API, giao tiếp qua JSON.
- Gồm tối thiểu các endpoint có method: POST, GET, DELETE.
- Có tài liệu API (OpenAPI/Swagger).

**Cấu trúc cơ bản:**
- Phân tầng rõ: API → Nghiệp vụ → Truy cập dữ liệu. Tầng nghiệp vụ không import framework web hay thư viện DB.
- Truy cập dữ liệu qua Repository/Data Access Layer phía dưới dùng ORM hoặc data mapper tùy chọn.

**Bảo mật:**
- Hỗ trợ đăng nhập.
- Ít nhất 1 endpoint GET và 1 endpoint POST cần xác thực.
- Xác thực qua middleware/filter/interceptor của framework, không viết lặp trong từng endpoint.

**Triển khai:**
- Ngôn ngữ: Không cố định.
- Có hỗ trợ đóng gói gói Docker.

**Yêu cầu chung:**
- Các nhóm có Github công khai và commit cẩn thận. File readme.md mô tả kiến trúc và đặc tả của dự án.
- Chỉ triển khai chức năng cơ bản, không cần tối ưu.
- Kiểm thử tải trên Kaggle CPU.

## Gợi ý Pha 2:
- Dựa vào đánh giá hệ thống đã có hoặc đặc tả của bài toán để đề xuất các kiến trúc phù hợp.
- Cần có đánh giá trước và sau khi cải tiến, chỉ rõ lý do tại sao có các cải tiến trên.
- Cần đánh giá duy nhất trên một cấu hình phần cứng, để cố định, nhóm nên sử dụng CPU trên Kaggle.
- Triển khai các kiến trúc phù hợp với từng bài toán.