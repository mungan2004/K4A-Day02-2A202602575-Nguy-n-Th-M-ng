# 03 — Individual Reflection

> Viết bằng lời của bạn (Phase 7 trong `01-worksheet.md`). Có thể dùng AI gợi ý câu hỏi tự soi, không dùng AI viết thay. 8-12 câu, có chuyện cụ thể.

## Thông tin cá nhân

- Họ và tên: Nguyễn Thị Mừng
- Mã học viên: 2A202602575
- Nhóm: K4A
- Candidate problem nhóm chọn: Trông trẻ em nằm nôi

---

## 1. Tôi đã tham gia vào phần nào?

Ghi việc cụ thể + kết quả cụ thể. Không ghi chung chung kiểu "tham gia thảo luận".

| Hoạt động | Tôi đã làm gì? (việc cụ thể) | Kết quả / ảnh hưởng tới nhóm |
|---|---|---|
| Scan cá nhân | Quét 10 vấn đề thực tiễn từ gia đình, siêu thị đến đời sống. | Chọn ra top 3 đa dạng, có độ thực tiễn cao để thuyết phục nhóm. |
| Pitch Problem Card | Đề xuất ý tưởng AI giám sát nôi trẻ vì nỗi đau túc trực hàng chục tiếng. | Thuyết phục nhóm chọn ý tưởng vì tính nhân văn và impact cực lớn tới sức khỏe. |
| Challenge bài của bạn khác | Nhận xét ý tưởng code CRUD của Hùng và FB Ads của Trường. | Chỉ ra ranh giới mong manh giữa việc dùng Template và việc dùng AI Agent thực thụ. |
| Gom trùng / cluster | Chủ động phân loại 12 ideas của nhóm thành 3 nhóm (Cá nhân, Dev, Marketing). | Giúp nhóm có cái nhìn tổng quan, dễ dàng pick ra 3 bài Shortlist. |
| Chọn candidate problem | Bảo vệ luận điểm tại sao Trông trẻ em xứng đáng được điểm cao nhất (34/35). | Nhóm đồng thuận tuyệt đối chọn bài của tôi làm đồ án cuối cùng. |
| Validation / research | Lập giả định phỏng vấn và tìm case study thực tế (CuboAi, Nanit). | Chốt định hướng thiết kế hệ thống Camera (Non-invasive) thay vì thiết bị đeo tay. |
| Workflow nhóm | Vẽ workflow thủ công (trước AI) và workflow sau AI. | Làm rõ bottleneck lớn nhất là "120 phút canh chừng liên tục" của phụ huynh. |
| Problem Statement | Hoàn thiện PS v0 và v1, định nghĩa các chỉ số đo lường (FPR, Latency). | Xác định rõ ranh giới: AI chỉ cảnh báo, con người vẫn phải vào dỗ bé. |
| Rule / Workflow / Agent | Phân tích bài toán theo 3 mức độ công nghệ. | Chốt hạ dùng "Workflow" vì dữ liệu cần kết hợp Video + Audio liên tục. |
| Decision | Trình bày lý do chọn GO và phương án dự phòng. | Lập ra kế hoạch Pilot an toàn (thu data offline trước khi streaming). |

**Dấu tay rõ nhất của tôi trong artifact cuối (1-2 câu):**

```text
Toàn bộ ý tưởng "Trông trẻ em nằm nôi" là do tôi trực tiếp scan từ thực tế làm mẹ, pitch cho nhóm và tự tay dẫn dắt việc xây dựng luồng Workflow cũng như chốt hạ các metrics đo lường hiệu quả.
```

---

## 2. Bảng dùng AI (mỗi dòng 1 phase có dùng AI — 2 cột cuối bắt buộc)

| Phase | Tôi dùng AI để làm gì? | AI hữu ích ở đâu? | AI sai / hời hợt ở đâu? | Tôi sửa gì bằng nhận định của mình? |
|---|---|---|---|---|
| Scan | Brainstorming để gom gọn ý tưởng vào 10 dòng súc tích. | Định dạng bảng markdown nhanh, đẹp. | AI thường đưa ra các ví dụ chung chung như "thức khuya". | Tôi tự chèn số liệu thực tế "10 tiếng/ngày" vào để bài toán sắc bén hơn. |
| Problem Card | Hỗ trợ lập cấu trúc Card và gợi ý metric đo lường. | Gợi ý một số thuật ngữ hay như "False Positive Rate". | Đề xuất metric quá lố (CSAT 100%, Latency 0s). | Hạ metric xuống mức thực tế (Accuracy >90%, Latency <2s). |
| Workflow | Nhờ AI format bảng biểu cho sạch đẹp. | Trình bày trực quan, dễ so sánh Before/After. | AI định tự vẽ luôn luồng rẽ nhánh rất phức tạp. | Tôi ép AI giữ lại đúng luồng tuyến tính đi thẳng vì AI giám sát chỉ cần 1 chiều. |
| Research | Dùng AI tìm hiểu đối thủ như CuboAi, Nanit. | Trích xuất nhanh các tính năng cốt lõi của họ. | AI hay "bịa" (hallucinate) các thông số kỹ thuật ảo của hãng. | Chủ động đọc lại tài liệu trên trang chủ của họ để ghi nhận rủi ro thực tế. |
| Problem Statement | Không dùng AI ở phần định nghĩa nội dung. | | | Tự viết bằng tay toàn bộ để đảm bảo đúng mindset của nhóm. |
| Rule / Workflow / Agent | Hỏi AI sự khác biệt cốt lõi giữa Rule và Workflow cho dữ liệu Audio. | Giải thích rất dễ hiểu về giới hạn của if-else. | Khuyên nhóm dùng thẳng Agent cho xịn. | Bác bỏ lời khuyên của AI, chọn mức Workflow để phù hợp khả năng của nhóm. |
| Decision | Không dùng AI. | | | Nhóm tự tranh luận và chốt GO dựa trên bảng điểm tự chấm. |

> Nếu phase nào không dùng AI, ghi `Không dùng` và vì sao tự làm.

---

## 3. Reflection câu hỏi mở

Chọn 3-4 câu trong 6 câu dưới để viết thành đoạn 8-12 câu (không trả lời bullet 1 dòng):

**Reflection:**

```text
Tôi đã học được rất nhiều góc nhìn mới mẻ khi lắng nghe Top 3 problem của các bạn như Hùng và Trường, nhất là các bài toán liên quan đến technical và marketing. Tuy nhiên, trong quá trình thảo luận, đã có những khoảnh khắc nhóm bị cuốn vào bẫy "solution-first", đòi làm một con Agent tự động gửi mail báo cáo Facebook hoặc tự động code CRUD cho thật "ngầu". Sau khi bị challenge liên tục về tính khả thi, tôi đã bảo vệ và thuyết phục cả nhóm quay lại bài toán "Trông trẻ nằm nôi" vì nỗi đau ở đây quá chân thực và impact trực tiếp đến sức khỏe con người. Điều khó nhất đối với tôi khi viết Problem Statement chính là xác định đúng Boundary. Nhóm từng tranh cãi liệu AI có nên tự động bật loa ru ngủ hay không, và cuối cùng chúng tôi thống nhất phải rạch ròi: AI chỉ đóng vai trò phân tích và báo động (cảnh báo sớm), còn việc trực tiếp dỗ dành hay can thiệp y tế phải luôn là con người. Nếu được làm lại, tôi sẽ challenge nhóm mạnh hơn nữa ở khâu Validation, yêu cầu các bạn thu thập thêm dữ liệu về mức độ chấp nhận báo động giả (False Positive) từ phụ huynh để củng cố hơn nữa cho quyết định chốt mức AI Workflow. Dù vậy, nhờ vượt qua được các vòng tranh luận khắt khe đó, tôi cảm thấy rất tự hào khi đóng góp lớn vào artifact cuối cùng. Cụ thể là phần Workflow Transformation và hệ thống Success Metrics đều mang đậm "dấu tay" thực tiễn của một người mẹ. Toàn bộ quá trình này giúp tôi nhận ra rằng: AI chỉ thực sự có giá trị khi nó được sinh ra để giải quyết đúng nút thắt cổ chai (bottleneck) đau đớn nhất của con người.
```

---

## 4. Tự kiểm cuối bài (check trước khi nộp repo)

- [x] [12đ] Cá nhân có 5+ problems + top 3 Problem Cards
- [x] [12đ] Tôi đã pitch rõ + challenge nhóm đúng trọng tâm (ghi ở bảng mục 1)
- [x] Nhóm có nhật ký hội tụ từ candidates về 1 bài
- [x] [15đ] Nhóm có workflow trước/sau
- [x] [20đ] Nhóm có PS v0/v1 với metric + boundary rõ
- [x] [15đ] Nhóm có so sánh No AI / Rule / Workflow / Agent
- [x] [10đ] Nhóm có Go / Not Yet / No-Go + lý do rõ
- [x] [10đ] Reflection này có vai trò thật + AI giúp/sai ở đâu + điều học được + nếu làm lại đổi gì
- [x] [6đ] Tôi tự giải thích được mạch problem → workflow → metric → boundary → độ phù hợp AI
