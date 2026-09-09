# CASE STUDY 5

[Gitstar ranking](https://gitstar-ranking.com/repositories) là một trang web thú vị để thống kê các trang được đánh giá sao nhiều nhất trên Github. Nhiệm vụ trong bài này là dựng một crawler có thể thu thập được thông tin các bản release của 5000 repository nhiều sao nhất Github.

## Gợi ý triển khai

Ngoài cách crawl trên trang chủ, có thể sử dụng [API này](https://docs.github.com/en/rest) để thu thập dữ liệu cần sử dụng. Các bạn có thể dùng các công cụ như [scrapy](https://scrapy.org/) (Python), [cheerio](https://github.com/cheeriojs/cheerio) (NodeJS), [Selenium](https://www.selenium.dev/), v.v.

Các trang web trên có thể chặn lưu lượng truy cập bất thường dù dùng thông qua API chính chủ, với vấn đề này có thể sử dụng proxy, VPN hoặc Tor, v.v.

## Dữ liệu

Các thông tin cần thu thập bao gồm tên bản release, nội dung release và các commit thay đổi trong bản release đó. Schema của cơ sở dữ liệu mẫu nằm trong file `schema.db` (mở bằng `sqlite`).

## Yêu cầu triển khai

| Mức độ | Mô tả |
|--|--|
| ![Static Badge](https://img.shields.io/badge/REQUIRED-easy-green) | Triển khai được crawler cơ bản, thu thập tự động (có thể bị chặn) |
| ![Static Badge](https://img.shields.io/badge/REQUIRED-easy-green) | Đánh giá và nêu nguyên nhân của các vấn đề gặp phải |
| ![Static Badge](https://img.shields.io/badge/REQUIRED-hard-red) | Cải tiến và so sánh hiệu suất với phiên bản ban đầu |
| ![Static Badge](https://img.shields.io/badge/OPTIONAL-easy-green) | Tối ưu quá trình đọc ghi database |
| ![Static Badge](https://img.shields.io/badge/OPTIONAL-medium-yellow) | Song song hoá (đa luồng) quá trình crawl |
| ![Static Badge](https://img.shields.io/badge/OPTIONAL-medium-yellow) | Giải quyết vấn đề crawler bị trang web chặn khi truy cập quá nhiều bằng một số kỹ thuật hoặc design pattern tương ứng |
| ![Static Badge](https://img.shields.io/badge/OPTIONAL-medium-yellow) | Đánh giá các giải pháp tối ưu khác nhau |
  

Ngoài ra, các bạn có thể tuỳ chọn bổ sung thêm một số phần triển khai khác.