# CASE STUDY 4
Dưới đây là một chương trình đơn giản sử dụng `express.js`, để ghi các giá trị vào database theo cặp key-value. Chương trình cung cấp một trang web liên tục cập nhật giá trị của key để gửi về kết quả mới, có thể được ứng dụng để cập nhật giá vàng, thông số theo *thời gian thực*. Chương trình có thể chưa hoàn toàn được tối ưu.

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
| /add | POST | Thêm/chỉnh sửa giá trị trong database
| /get/:keyID | GET | Trả về giá trị của keyID
| /viewer/:keyID | GET | Trang web theo dõi giá trị của keyID


## Yêu cầu triển khai
| Mức độ | Mô tả |
|--|--|
| ![Static Badge](https://img.shields.io/badge/OPTIONAL-medium-yellow)  | Tối ưu chương trình trên |
| ![Static Badge](https://img.shields.io/badge/OPTIONAL-easy-green) | Bổ sung giao diện web hoàn chỉnh hơn |
| ![Static Badge](https://img.shields.io/badge/OPTIONAL-easy-green) | Thay thế cơ sở dữ liệu hiện tại |
| ![Static Badge](https://img.shields.io/badge/REQUIRED-easy-green) | Thay thế công nghệ sử dụng cho việc gọi request liên tục trong `viewer.html` (VD: socket.io, ...) |
| ![Static Badge](https://img.shields.io/badge/REQUIRED-medium-yellow) | Thêm lớp persistent bằng cách sử dụng ORM (Object-Relational Mapping) |
| ![Static Badge](https://img.shields.io/badge/REQUIRED-medium-yellow) | Triển khai theo kiến trúc Publisher-Subscriber và cài đặt message broker tuỳ chọn |
| ![Static Badge](https://img.shields.io/badge/REQUIRED-medium-yellow) | Nêu các vấn đề chương trình gốc đang gặp phải về các thuộc tính chất lượng và *đánh giá* hiệu năng sau khi nâng cấp |

Ngoài ra, các bạn có thể tuỳ chọn bổ sung thêm một số phần triển khai khác.

