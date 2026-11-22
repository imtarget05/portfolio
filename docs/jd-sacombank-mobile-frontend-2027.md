# 🏦 Cẩm Nang Ứng Tuyển & Bảo Vệ Phỏng Vấn: Chuyên Viên Phát Triển Nền Tảng Di Động / Frontend — Sacombank (Khối CNTT)

> **Vị trí tuyển dụng:** Chuyên viên Phát triển Nền tảng Di động / Frontend  
> **Đơn vị:** Phòng Phát triển ứng dụng – Khối Công nghệ Thông tin – Ngân hàng TMCP Sài Gòn Thương Tín (Sacombank)  
> **Link JD tham chiếu:** [Sacombank Career / UB Academy](https://ub.edu.vn/tuyen-dung-ngan-hang/chuyen-vien-phat-trien-nen-tang-di-dong-frontend-phong-phat-trien-ung-dung-khoi-cntt-sacombank-53385944/)  
> **Thời điểm tuyển dụng mục tiêu:** Q1/2027

---

## 🎯 1. Bảng Đối Chiếu Năng Lực Trực Diện (JD Mapping Matrix)

| Yêu Cầu Từ JD Sacombank | Giải Pháp Kỹ Thuật Đã Triển Khai Trong Codebase | Vị Trí Code Thực Chứng | Kết Quả Kiểm Thử (Evidence) |
|---|---|---|---|
| **Phát triển ứng dụng di động đa nền tảng (Flutter / React Native)** | Xây dựng ứng dụng di động ngân hàng & kho quỹ bằng **Flutter 3.x (Dart)**: Maker-Checker approval flow, offline cache, cash drawer, biometric PIN gate. | `QuanLyKho/frontend/lib/` | `flutter test` passed, 355 frontend tests verified |
| **Phát triển Web Frontend hiện đại (React, TypeScript, Redux/Context, Tailwind)** | Xây dựng Single Page App ngân hàng số & tài liệu thông minh bằng **React 18 + TypeScript + Vite + Tailwind CSS**. | `Enterprise-Document-Intelligence.../frontend/src/` | 246 vitest passed, coverage: lines 84.45%, branches 78.82% |
| **Bảo mật giao dịch di động & Anti-Tampering (OWASP Top 10)** | Client-side **OAuth2 PKCE (RFC 7636)** + Ký số request **SHA-256 Nonce/Timestamp** chống Replay Attack & Man-In-The-Middle. | `frontend/src/utils/bankingSecurityClient.ts` | `bankingSecurityClient.test.ts` (5/5 tests PASS) |
| **Xử lý đồng thời & Chống Double-Tap khi chuyển tiền** | **In-Flight Request Deduplication** + Tự động inject **`X-Idempotency-Key`** ngăn chặn việc người dùng bấm nút "Xác nhận chuyển tiền" 2 lần liên tiếp do lag mạng. | `bankingSecurityClient.ts` (`IdempotentBankingClient`) | Verified: 2 concurrent taps chỉ sinh 1 network call duy nhất |
| **Tích hợp API Ngân Hàng (RESTful, SSE, WebSocket)** | Xử lý streaming sự kiện thời gian thực (SSE), tự động kết nối lại khi rớt mạng (Exponential Backoff with Jitter). | `frontend/src/context/` + Spring Boot SSE Manager | `LiveDemoPagesFunction.acceptance.test.ts` |
| **Hiểu biết Back-End Java / Spring Boot Microservices** | Kiến trúc Microservice **Java 17 / Spring Boot**, Transactional Outbox, Lock-Free Concurrency, Distributed Redis Sliding-Window. | `FlashSale-Backend/src/payment-service-java/` | 177 unit & integration tests PASS |

---

## 🛡️ 2. Các Bài Toán Kỹ Thuật Cốt Lõi Khi Phỏng Vấn Tại Sacombank

### Câu 1: "Tại sao trên Mobile App và Single Page App (SPA) của Sacombank, chúng ta tuyệt đối không được dùng chuẩn Authorization Code thông thường với `client_secret`? Bạn triển khai PKCE như thế nào?"
* **Trả lời của ứng viên**:
  1. **Lỗ hổng của Public Client**: Ứng dụng di động (Android/iOS) hay SPA (React/Vue) chạy trên thiết bị của người dùng cuối. Bất kỳ ai cũng có thể decompile APK/IPA hoặc mở Developer Tools trên trình duyệt để trích xuất `client_secret`. Nếu kẻ tấn công có được `client_secret`, họ có thể giả mạo ứng dụng ngân hàng để chiếm đoạt token.
  2. **Giải pháp PKCE (RFC 7636)**: Thay vì dùng secret tĩnh, mỗi phiên đăng nhập của người dùng sẽ sinh một cặp mã ngẫu nhiên động một lần:
     - `code_verifier`: Chuỗi ngẫu nhiên cryptographically secure (32 bytes base64url).
     - `code_challenge`: Băm SHA-256 của `code_verifier` (`BASE64URL(SHA256(code_verifier))`).
  3. **Quy trình bắt tay an toàn**:
     - Client chỉ gửi `code_challenge` lên Identity Provider (IdP/Keycloak) khi bắt đầu đăng nhập.
     - Sau khi người dùng xác thực thành công, Client gửi `code` kèm `code_verifier` nguyên bản để đổi lấy Access Token.
     - IdP tự tính lại băm SHA-256; nếu khớp mới cấp token $\rightarrow$ Ngăn chặn triệt để mã độc chặn bắt Authorization Code.
  4. **Code thực chứng**: Đã triển khai và test tại `bankingSecurityClient.ts` (`generatePkcePair()`).

---

### Câu 2: "Khi khách hàng chuyển tiền trên app di động ở vùng sóng yếu (3G/4G chập chờn), họ bấm 'Xác nhận' nhưng không thấy phản hồi nên bấm liên tục 3–4 lần. Bạn giải quyết bài toán Concurrency & Idempotency này từ Client đến Server như thế nào?"
* **Trả lời của ứng viên**:
  Tôi giải quyết theo mô hình **Phòng thủ 3 lớp (3-Tier Defensive Architecture)**:
  1. **Lớp 1 — Client UI Debounce & In-Flight Lock**:
     - Ngay khi người dùng chạm vào nút "Xác nhận", UI lập tức chuyển sang trạng thái disabled + hiển thị spinner để chặn hành vi click vật lý.
     - Ở tầng HTTP Interceptor (`IdempotentBankingClient`), tôi duy trì một Map các request đang bay (`inFlightRequests`). Nếu phát hiện một request thứ 2 có cùng URL và Payload đến khi request 1 chưa hoàn tất, client **không gửi thêm request lên mạng** mà tái sử dụng luôn `Promise` của request 1.
  2. **Lớp 2 — Client Idempotency-Key Injection**:
     - Mỗi phiên giao dịch được gán một mã định danh duy nhất (`X-Idempotency-Key: UUIDv4`). Nếu người dùng tắt app bật lại hoặc bấm Retry, cùng một `Idempotency-Key` được gửi lại.
  3. **Lớp 3 — Server Authoritative Persistence (Database Invariant)**:
     - Tại Backend (Java Spring Boot / FastAPI), server thực hiện `INSERT INTO payment_records ... ON CONFLICT (idempotency_key) DO NOTHING`. Request thứ 2 đến sau sẽ nhận được kết quả đã commit trước đó (Winner Replay, HTTP 200) thay vì trừ tiền lần thứ hai.
  4. **Code thực chứng**: Đã chứng minh bằng unit test `should deduplicate simultaneous double-tap requests into a single network call` (gọi 2 lần đồng thời nhưng `fetch` chỉ bị trigger đúng 1 lần duy nhất).

---

### Câu 3: "Làm thế nào để bảo vệ ứng dụng ngân hàng số khỏi các cuộc tấn công Replay Attack (bắt trộm gói tin rồi phát lại) và Tampering (sửa số tiền / tài khoản thụ hưởng giữa đường truyền)?"
* **Trả lời của ứng viên**:
  Dù có HTTPS (TLS), kẻ xấu vẫn có thể cài chứng chỉ giả mạo (SSL Pinning bypass) trên máy đã Root/Jailbreak để sửa gói tin qua Burp Suite. Do đó cần **Payload Stamping & Integrity Check**:
  1. **Header kiểm soát**:
     - `X-Timestamp`: Thời gian tại máy khách (ISO 8601). Server từ chối mọi request có độ lệch thời gian quá $\pm 60$ giây (chống Replay Attack trong tương lai hoặc quá khứ).
     - `X-Nonce`: Chuỗi ngẫu nhiên UUID dùng 1 lần. Server lưu cache Redis các nonce đã dùng trong 60 giây; nếu nonce bị trùng $\rightarrow$ Từ chối ngay.
     - `X-Payload-Checksum`: Băm `SHA-256(Payload + Timestamp + Nonce)`.
  2. **Toàn vẹn dữ liệu**: Nếu kẻ tấn công thay đổi số tiền từ `10.000 VND` thành `100.000.000 VND`, checksum trên server tính lại sẽ không khớp $\rightarrow$ Ngay lập tức từ chối và ghi log cảnh báo an ninh.

---

### Câu 4: "Ứng dụng ngân hàng cần hiển thị biến động số dư và thông báo phê duyệt hồ sơ tức thì. Bạn chọn công nghệ nào và xử lý ra sao khi thiết bị bị mất kết nối mạng?"
* **Trả lời của ứng viên**:
  1. **Lựa chọn công nghệ**: Tôi chọn **Server-Sent Events (SSE)** hoặc **WebSocket**. Với luồng thông báo 1 chiều từ ngân hàng đến client (thông báo tiền về, thay đổi trạng thái hồ sơ), SSE tối ưu hơn WebSocket vì:
     - Chạy trên HTTP tiêu chuẩn (dễ dàng đi qua tường lửa doanh nghiệp / WAF mà không cần cấu hình socket riêng).
     - Tự động hỗ trợ kết nối lại (`reconnect`) và đồng bộ vị trí bản tin qua header `Last-Event-ID`.
  2. **Xử lý sự cố rớt mạng (Network Resilience)**:
     - Phía Client triển khai chiến lược **Exponential Backoff với Jitter** (thử lại sau 1s, 2s, 4s, 8s... cộng thêm độ trễ ngẫu nhiên $\pm 20\%$ để tránh hiện tượng Thundering Herd làm sập API Gateway khi trạm thu phát sóng phục hồi).
     - Kết hợp lắng nghe sự kiện `ConnectivityResult` trên Flutter / `navigator.onLine` trên Web để kích hoạt sync ngay khi có mạng trở lại.

---

### Câu 5: "Làm thế nào bạn tối ưu hiệu năng để ứng dụng Web / Mobile Banking tải nhanh và không bị Memory Leak?"
* **Trả lời của ứng viên**:
  1. **Tối ưu Bundle & Startup Time**:
     - **Route-based Code Splitting**: Dùng `React.lazy()` và `Suspense` để tách nhỏ các module nghiệp vụ nặng (ví dụ: module Thẩm định Tín dụng, module Báo cáo Sao kê, PDF Viewer) thành các chunks riêng biệt. Chỉ tải khi người dùng click vào chức năng đó.
     - Giảm kích thước bundle ban đầu xuống dưới 200KB, đạt chỉ số **LCP (Largest Contentful Paint) < 1.8s**.
  2. **Quản trị bộ nhớ & Chống Memory Leak**:
     - Trong React: Luôn dọn dẹp (cleanup function trong `useEffect`) cho các listener, SSE connections, WebSocket subscriptions và `AbortController`.
     - Trong Flutter: Triệt để gọi `dispose()` trên các `AnimationController`, `TextEditingController`, `ScrollController` và cancel các `StreamSubscription` khi widget rời khỏi màn hình.

---

## 📋 3. Kịch Bản Demo 3 Phút Thuyết Phục Hội Đồng Phỏng Vấn

1. **Phút 0:00 – 1:00 (Kiến trúc & Tầm nhìn)**:
   - "Chào anh/chị Hội đồng tuyển dụng Khối CNTT Sacombank. Em tiếp cận vị trí Chuyên viên Phát triển Nền tảng Di động/Frontend dưới góc nhìn của một kỹ sư giải quyết bài toán giao dịch ngân hàng số có độ tin cậy cao (High-Reliability Financial Frontend)."
2. **Phút 1:00 – 2:00 (Trình diễn bằng chứng thực tế)**:
   - "Trên máy em đã chạy toàn bộ test tự động kiểm chứng:
     - `bankingSecurityClient.test.ts`: Chứng minh cơ chế OAuth2 PKCE và bộ lọc chống Replay/Double-Tap (5/5 tests pass).
     - `LockFreeAdmissionGateTest.java`: Chứng minh cơ chế xử lý đồng thời cực hạn ở tầng Backend Java mà ứng dụng di động kết nối vào (200 threads đồng thời tranh chấp, 0% oversell).
     - Hệ thống quản lý sổ cái kho quỹ Flutter/FastAPI hỗ trợ Maker-Checker hai người phê duyệt."
3. **Phút 2:00 – 3:00 (Khả năng đáp ứng ngay cho Sacombank)**:
   - "Với kinh nghiệm thực chiến từ kiến trúc bảo mật OAuth2/PKCE, khả năng làm chủ cả Frontend di động (Flutter, React, TypeScript) lẫn Backend microservices (Java Spring Boot, Python), em có thể lập tức tham gia vào các dự án nâng cấp nền tảng ứng dụng Sacombank Pay, Sacombank mBanking hay các cổng vận hành nội bộ của ngân hàng."
