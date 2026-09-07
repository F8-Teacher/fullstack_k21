# Npm = node package manager

1. Khởi tạo dự án npm

```
npm init -y
```

2. Cài đặt thư viện

2.1. Cài đặt tất cả thư viện có trong package.json

npm i hoặc npm install

2.2. Cài đặt thư viện cụ thể

npm i tenthuvien

npm i tenthuvien@phienban

2.3. Cài đặt thư viện ở chế độ dev

Trong npm chia 2 loại dependency: simple dependency và devlopment dependency

- simple dependency: Các thư viện bắt buộc phải có để chạy dự án
- devlopment dependency: Chỉ cần khi phát triển (Dev)

npm i tenthuvien --save-dev
npm i tenthuvien@phienban --save-dev

Nếu chỉ muốn cài đặt các dependency ở simple

npm i --production

3. Gỡ bỏ thư viện

npm un tenthuvien

4. Cập nhật

npm update tenthuvien --> Mặc định cập nhật 2 số sau

npm update --> Cập nhật tất cả thư viện (Nguy hiểm)

5. Sự khác nhau giữa package.json và package-lock.json

package-lock.json: Khóa phiên bản tại thời điểm đầu tiên cài thư viện

Khi chạy npm i --> Đọc package-lock.json trước, không có đọc package.json

Khi chạy npm update -> Bỏ qua package-lock.json, đọc package.json luôn. Sau khi update thành công -> Cập lại package-lock.json

6. Scripts

npm run ten-script
