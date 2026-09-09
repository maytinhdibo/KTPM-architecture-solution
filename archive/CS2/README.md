# CASE STUDY 2
Dưới đây là một chương trình có nhiệm vụ chuyển file ảnh tiếng Anh sang một file `pdf` tiếng Việt. Các bước xử lý lần lượt bao gồm: chuyển đổi ảnh sang text, dịch tiếng Anh sang tiếng Việt, chuyển đổi nội dung text thành file `pdf`. Chương trình chính chỉ demo các tính năng này tuần tự.

## Hướng dẫn cài đặt
Yêu cầu cài đặt trước [tesseract](https://tesseract-ocr.github.io/tessdoc/Installation.html) trên hệ điều hành của bạn. 

```sh
# Cài đặt các gói liên quan
$ npm install
# Tạo folder cho output
$ mkdir output
# Khởi chạy ứng dụng demo
$ npm start
```

## Mô Tả
| File | Chức năng |
|--|:--|
| utils/ocr.js | Chuyển đổi ảnh sang text |
| utils/translate.js | Dịch tiếng Anh sang tiếng Việt |
| utils/pdf.js | Chuyển đổi text sang PDF |


## Yêu cầu triển khai
| Mức độ | Mô tả |
|--|--|
| ![Static Badge](https://img.shields.io/badge/OPTIONAL-easy-green) | Triển khai thành web hoàn chỉnh |
| ![Static Badge](https://img.shields.io/badge/OPTIONAL-hard-red) | Sử dụng cache để tăng hiệu suất ứng dụng |
| ![Static Badge](https://img.shields.io/badge/OPTIONAL-medium-yellow) | Lựa chọn số lượng filter tối ưu nhất với hạ tầng phần cứng |
| ![Static Badge](https://img.shields.io/badge/REQUIRED-warning-orange)  | Không thay đổi thư viện của từng chức năng |
| ![Static Badge](https://img.shields.io/badge/REQUIRED-easy-green)  | Hoàn thiện chương trình sử dụng `express.js` cho phép upload một file ảnh và tải về một file `pdf` tương ứng |
| ![Static Badge](https://img.shields.io/badge/REQUIRED-medium-yellow) | Sử dụng `message queue` cho chương trình trên (ví dụ: Kafka, RabbitMQ,...) |
| ![Static Badge](https://img.shields.io/badge/REQUIRED-medium-yellow) | *Đánh giá* và *so sánh* hiệu năng dựa trên kiến trúc đã triển khai |

Ngoài ra, các bạn có thể tuỳ chọn bổ sung thêm một số phần triển khai khác.
