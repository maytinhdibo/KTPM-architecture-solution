# CASE STUDY 1
Dưới đây là một chương trình đơn giản sử dụng `express.js`, có mục tiêu để rút gọn link. Chương trình có thể chưa hoàn toàn được tối ưu.

## Hướng dẫn cài đặt
```sh
# Cài đặt các gói liên quan
$ npm install
# Tạo folder cho database
$ mkdir db
# Khởi chạy ứng dụng
$ npm start
```

## Mô Tả
| Endpoint | Phương thức | Mục tiêu
|--|:--:|--|
| /short/:id | GET | Trả về đường dẫn gốc
| /create?url= | POST | Trả về ID được thu gọn


## Yêu cầu
 - Tối ưu chương trình trên (nếu cảm thấy cần thiết)
 - Triển khai thành web hoàn chỉnh (tuỳ chọn)
 - Thêm lớp persistent bằng cách sử dụng ORM (Object-Relational Mapping)
 - *Đánh giá* và *cải tiến* hiệu năng dựa trên một mẫu kiến trúc tuỳ chọn.
