# 📚 5,000 English Words - Hành Trình Chinh Phục Từ Vựng

[![Deployed on Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://5000-words-english.vercel.app/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Gemini AI](https://img.shields.io/badge/Gemini%20AI-4285F4?style=for-the-badge&logo=google-gemini&logoColor=white)](https://aistudio.google.com/)

Ứng dụng học từ vựng tiếng Anh thông minh, tinh tế và mạnh mẽ. Được thiết kế để giúp bạn học 5,000 từ vựng phổ biến nhất một cách khoa học, kết hợp với sức mạnh của trí tuệ nhân tạo (AI).

👉 **Trải nghiệm ngay tại:** [https://5000-words-english.vercel.app/](https://5000-words-english.vercel.app/)

---

## ✨ Tính Năng Nổi Bật

### 🤖 Chăm Sóc Bởi Gemini AI
Đừng chỉ học nghĩa từ, hãy thực hành đặt câu! Tính năng **"Kiểm tra câu"** sử dụng **Gemini 1.5 Flash** sẽ:
- Phân tích câu bạn đặt dựa trên từ vừa học.
- Sửa lỗi ngữ pháp và chính tả ngay lập tức.
- Đưa ra lời khuyên và lời khen để bạn tiến bộ nhanh hơn.

### 🚀 Điều Hướng Thông Minh & Hiệu Năng Cao
Với mục tiêu 5,000 từ, ứng dụng được tối ưu hóa để:
- Chia từ vựng thành các nhóm nhỏ (100 từ/nhóm).
- Hệ thống **Range Selector** giúp bạn chuyển đổi giữa các nhóm từ cực nhanh.
- Chỉ render những gì cần thiết để đảm bảo trải nghiệm mượt mà nhất.

### 💾 Lưu Trữ Tiến Độ (LocalStorage)
Học đến đâu, biết đến đó! Trạng thái **"Đã học"** của bạn sẽ được lưu tự động vào trình duyệt.
- Thanh tiến độ (Progress Bar) trực quan.`
- Không lo mất dữ liệu khi làm mới trang hoặc tắt trình duyệt.

### 💎 Thiết Kế Hiện Đại & Responsive
Giao diện được thiết kế theo phong cách tối giản, sang trọng với các hiệu ứng chuyển cảnh mượt mà, hỗ trợ tốt trên cả điện thoại và máy tính.

---

## 🛠️ Công Nghệ Sử Dụng

- **Frontend:** Vanilla JavaScript, CSS3 (Custom Properties, Flexbox, Grid).
- **Build Tool:** [Vite](https://vitejs.dev/) - Siêu nhanh, siêu nhẹ.
- **AI Engine:** [Google Generative AI SDK](https://www.npmjs.com/package/@google/generative-ai).
- **Deployment:** [Vercel](https://vercel.com/).

---

## 💻 Cài Đặt Cục Bộ (Local Setup)

Nếu bạn muốn chạy dự án này trên máy tính cá nhân:

1. **Clone repository:**
   ```bash
   git clone https://github.com/nguyenhoangkha03/5000-words-english.git
   cd 5000-words-english
   ```

2. **Cài đặt dependencies:**
   ```bash
   npm install
   ```

3. **Cấu hình API Key:**
   - Tạo file `.env` tại thư mục gốc.
   - Thêm dòng sau (lấy API Key tại [Google AI Studio](https://aistudio.google.com/)):
     ```env
     VITE_GEMINI_API_KEY=your_api_key_here
     ```

4. **Chạy dev server:**
   ```bash
   npm run dev
   ```

---

## 🎯 Lộ Trình Phát Triển (Roadmap)

- [x] Khởi tạo cấu trúc dự án chuẩn Vite.
- [x] Tích hợp AI Gemini để kiểm tra câu.
- [x] Thiết kế hệ thống điều hướng 5,000 từ.
- [x] Lưu trữ tiến độ qua LocalStorage.
- [ ] Bổ sung đầy đủ dữ liệu cho 5,000 từ.
- [ ] Thêm tính năng "Ôn tập" (Flashcards).
- [ ] Chế độ tối (Dark Mode).

---

## 🤝 Đóng Góp

Mọi đóng góp về dữ liệu từ vựng hoặc tính năng mới đều được chào đón! Hãy mở một Issue hoặc gửi Pull Request.

---

*Made with ❤️ for English Learners.*
