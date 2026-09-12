# 02 — Group Problem Statement (Bản nộp nhóm)

> Làm chung 1 bản, mỗi thành viên copy vào repo cá nhân. Đi theo Phase 3 → 6 trong `01-worksheet.md`. Nhóm chỉ chọn **candidate problem** ở Phase 3, viết Problem Statement sau khi validate + vẽ workflow.

## Thành viên nhóm

| STT | Họ và tên | Mã học viên | Vai trò trong nhóm (VD: facilitator, workflow, research, writer) |
|-----|-----------|-------------|---------------------------------------------------------------|
| 1 | Nguyễn Thị Mừng | 2A202602575 | Pitch Problem, Vẽ Workflow, Định nghĩa Metrics |
| 2 | Nguyễn Huy Hùng | 2A202602990 | Đóng góp ý tưởng, Phản biện kỹ thuật |
| 3 | Lê Đức Tùng | 2A202603005 | Tìm kiếm tài liệu, Research các giải pháp AI |
| 4 | Đào Thanh Trường | 2A202602683 | Phân tích Impact, Đánh giá rủi ro (Risk) |
| 5 | Trường Thị Như Ý | 2A202602372 | Gom nhóm (Cluster) ý tưởng, Củng cố báo cáo |

**Candidate problem nhóm chọn (1 câu):**
Trông trẻ em nằm nôi bằng.
---

## Phase 3 — Group Convergence: từ 9-12 candidates về 1

### 3.1. Trình bày top 3 mỗi người (mỗi candidate 1-2 phút)

| # | Người đưa ra | Candidate problem | Người gặp vấn đề | Điểm nghẽn | Cảm nhận nhanh của nhóm |
|---|---|---|---|---|---|
| 1 | Nguyễn Thị Mừng | Túc trực trông trẻ em nằm nôi | Phụ huynh / Người trông trẻ | Không thể theo dõi liên tục 24/7 | Nỗi đau lớn (thiếu ngủ, lo âu), impact xã hội cao |
| 2 | Nguyễn Thị Mừng | Nhập mã vạch thủ công khi máy quét lỗi | Nhân viên thu ngân | Mất thời gian đọc mờ và gõ tay | Vấn đề rõ ràng, đo lường được nhưng impact hẹp |
| 3 | Nguyễn Thị Mừng | Chuẩn bị cắm cơm hàng ngày | Người nội trợ | Lặp đi lặp lại tốn thời gian | Có thể dùng giải pháp phần cứng tự động hóa |
| 4 | Như Ý (2A202602372) | Tìm/so sánh framework khi bắt đầu dự án mới | Lập trình viên | Tốn 3-5 tiếng, lặp lại mỗi dự án | "Đủ tốt" để chọn framework là gì — khó đo chất lượng, chỉ đo được thời gian |
| 5 | Như Ý (2A202602372) | Lên cấu trúc triển khai (kiến trúc, chia module) | Lập trình viên | Phải làm lại 2-3 lần (bottleneck rõ) | Chưa tách rõ AI hỗ trợ bước nào vì cấu trúc phụ thuộc đề bài |
| 6 | Như Ý (2A202602372) | Review code cho bạn cùng nhóm đồ án | Cả nhóm | Tốn 4-5 tiếng, có thể cả ngày | Chưa rõ AI review code có phát hiện đúng loại lỗi nhóm hay gặp không |
| 7 | Nguyễn Huy Hùng | Code cấu trúc CRUD/module tương tự nhau lặp đi lặp lại | Bản thân và các teammate | Copy/tuỳ chỉnh thủ công, phải giải thích lại structure cho teammate | Chưa thảo luận nhóm |
| 8 | Nguyễn Huy Hùng | Search, Filter thông tin kỹ thuật | Bản thân | Đọc lướt để lọc nguồn dùng được trong số 8-10 nguồn đã mở | Chưa thảo luận nhóm |
| 9 | Nguyễn Huy Hùng | Viết lại nội dung tổng hợp tiến độ nhóm trước mỗi buổi họp | Bản thân | Đọc lướt tìm cập nhật tiến độ lẫn trong các tin nhắn rải rác | Chưa thảo luận nhóm |
| 10 | Đào Thanh Trường (2A202602386) | Tổng hợp câu hỏi, tỉ lệ đặt hàng và hiệu quả chiến dịch Facebook | Người bán hàng / Marketer | Đọc và gom thủ công dữ liệu từ nhiều tab sang báo cáo | Rất khả thi tự động hóa; tác động rõ ràng lên doanh thu/chi phí |
| 11 | Đào Thanh Trường (2A202602386) | Check tin nhắn, thông báo, Gmail | Sinh viên / Freelancer | Đọc lướt lượng lớn tin rác để nhặt deadline và việc quan trọng | Nhu cầu hàng ngày cao; cần chú ý phân quyền/bảo mật dữ liệu chat |
| 12 | Đào Thanh Trường (2A202602386) | Lên lịch Google Calendar dựa trên thời khóa biểu và công việc | Sinh viên / Người đi làm | Nhập tay từng ca làm/buổi học từ file ảnh/PDF vào Calendar | Rõ ràng, dễ đo lường; AI OCR kết hợp trích xuất lịch rất chuẩn xác |

### 3.2. Gom trùng / cluster (gom 9-12 ý thành 3-4 cụm)

| Cluster | Candidates included | Pattern chung | Ghi chú |
|---|---|---|---|
| A: Đời sống cá nhân & Gia đình | 1, 3, 11, 12 | Các công việc lặp đi lặp lại hàng ngày tốn thời gian hoặc cần sự chú ý liên tục | Pain point cao, dễ đo lường impact trực tiếp |
| B: Lập trình & Phát triển PM | 4, 5, 6, 7, 8 | Các tác vụ kỹ thuật lặp lại của Dev (CRUD, module, review, search thư viện) | Dễ so sánh R/W/A, nhưng khó tách bạch ranh giới AI |
| C: Quản lý & Xử lý Dữ liệu | 2, 9, 10 | Đọc lướt và tổng hợp thông tin thủ công từ nhiều nguồn (Ads, Chat, Barcode) | AI có thể dùng OCR/LLM để tự động hóa tốt |
| D (nếu có) | | | |

### 3.3. Shortlist (giữ 2-3 bài trả lời được 7 câu hỏi worksheet)

| Candidate | Vì sao vào shortlist (2-3 ý) | Rủi ro / điều chưa rõ |
|---|---|---|
| Túc trực trông trẻ em nằm nôi (Mừng) | Nỗi đau cực lớn (mất ngủ, SIDS). Actor và Metric rất rõ ràng. Cực kỳ khả thi với CV/Audio AI. | Rủi ro báo động sai (False Positive) gây khó chịu. |
| Code cấu trúc CRUD/module (Hùng) | Vấn đề lặp lại thực tế, ai cũng gặp. Có thể dùng Rule/Workflow. Dữ liệu code có cấu trúc tốt. | Khó đo lường ROI chính xác. Mức độ phức tạp đôi khi chỉ cần Template thay vì AI. |
| Tổng hợp dữ liệu FB Ads (Trường) | Impact trực tiếp tới doanh thu. Tốn nhiều thời gian đọc gom tay. AI OCR/LLM làm rất tốt. | Phụ thuộc vào thay đổi UI của Facebook Ads. Bảo mật dữ liệu. |

### 3.4. Score để đồng thuận (chấm 1-5, ép nói rõ vì sao cho 5 / cho 3)

| Candidate | Actor rõ | Workflow rõ | Pain có evidence | Impact đo được | Làm trong lab | So sánh R/W/A được | Nhóm hiểu domain | Tổng |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Trông trẻ em nằm nôi | 5 | 5 | 5 | 5 | 4 | 5 | 5 | 34 |
| Code cấu trúc CRUD | 5 | 4 | 4 | 4 | 5 | 4 | 5 | 31 |
| Tổng hợp dữ liệu FB | 4 | 4 | 4 | 5 | 4 | 5 | 4 | 30 |

**Candidate nhóm chọn (1 bài duy nhất):**

```text
Trông trẻ em nằm nôi

(Ghi chú Problem Statement của thành viên Nguyễn Thị Mừng đưa ra để nhóm tham khảo:
1. Problem Statement: Phụ huynh không thể theo dõi liên tục 24/7 để kịp thời phát hiện nguy cơ.
2. Painpoint: Trẻ ngủ 14-17h/ngày, nguy cơ ngạt thở/SIDS cao, phụ huynh kiệt sức, baby monitor hạn chế.
3. Hướng giải quyết: Dùng Computer Vision, Audio AI phát hiện nguy hiểm, tự động báo động và dỗ dành.
4. Đo lường: Độ chính xác >90%, Latency <2 giây, FPR <5%, CSAT >85%.)
```

**Vì sao chọn (4-5 câu):**

```text
Ý tưởng giải quyết được một vấn đề rất đau đớn là chứng mất ngủ và căng thẳng của phụ huynh khi phải túc trực 24/7. Trẻ sơ sinh ngủ từ 14-17 giờ/ngày, nguy cơ ngạt thở/SIDS rất cao nếu không có người quan sát. Hiện tại baby monitor chỉ truyền âm thanh/hình ảnh thụ động, không có khả năng phân tích cảnh báo. Sử dụng AI (CV + Audio) giúp giải quyết dứt điểm bottleneck là sức người, tạo ra impact vô cùng lớn về mặt sức khỏe tinh thần và thể chất cho gia đình.
```

**Vì sao KHÔNG chọn các candidate còn lại (mỗi bài 2-3 câu):**

```text
- Nhập mã vạch thủ công: Vấn đề có thể giải quyết dứt điểm bằng cách nâng cấp máy quét laser mới thay vì dùng AI OCR.
- Chuẩn bị cắm cơm: Giải pháp phù hợp nhất là phần cứng cơ khí (máy đong gạo) hơn là xử lý bằng AI phức tạp.
- Code cấu trúc CRUD (Shortlist 2): Rất thiết thực, nhưng ở mức độ hiện tại thì đôi khi chỉ cần dùng Template/Snippet cứng là giải quyết được 80%, chưa bắt buộc phải có AI phức tạp.
- Tổng hợp dữ liệu FB Ads (Shortlist 3): Cần kết nối nhiều API của bên thứ 3 và cấu trúc web hay thay đổi, rủi ro maintain cao. Nhóm cũng chưa thạo nghiệp vụ Marketing bằng kỹ năng IT.
```

**Disagreement (nếu có — ai lo gì, chốt ra sao):**

```text
- Hùng và Trường lo ngại bài toán Trông trẻ có mức độ khó cao về kỹ thuật (phải xử lý cả Video và Audio streaming realtime).
- Chốt lại: Nhóm quyết định Go với Trông trẻ vì tính nhân văn và impact quá lớn. Để giảm độ khó, nhóm thống nhất sẽ làm pilot trên video/audio quay sẵn (offline classification) thay vì làm streaming realtime ngay từ đầu.
```

---

## Phase 4 — Quick Validation + Research

### 4.1. Quick validation (ít nhất 1 cách: interview 2-3 người hoặc survey 5-10 người)

| Nguồn | Số người / mẫu | Tín hiệu xác nhận (kèm quote nguyên văn) | Tín hiệu phản bác | Nhóm sửa problem thế nào |
|---|---:|---|---|---|
| Interview | 3 phụ huynh bỉm sữa | "Đêm nào mình cũng thức 3-4 lần kiểm tra con vì sợ con úp mặt vào chăn." | "Camera thỉnh thoảng báo động giả làm mình mất ngủ hơn." | Cần tối ưu False Positive Rate (<5%) để tránh báo động sai. |
| Survey / poll | 10 người | 8/10 người xác nhận bị kiệt sức vì mất ngủ. | 2 người có người giúp việc nên không bị ảnh hưởng. | Insight tập trung vào phụ huynh tự chăm con không có bảo mẫu. |
| Log / ticket / review (nếu có) | | | | |

**Insight sau validation (1-2 câu — pain thật nằm ở đâu):**

```text
Pain thật không chỉ là tốn thời gian, mà là nỗi sợ tột độ về an toàn của trẻ dẫn đến mất ngủ triền miên.
```

Bằng chứng đính kèm (nếu có): [evidence.md](./evidence.md) (Chi tiết trích dẫn y khoa và phỏng vấn)

### 4.2. Research giải pháp đã có (ít nhất 2-3 tools/patterns + 1-2 link kiểm được)

| Nguồn / tool / case | Link | Họ giải quyết bước nào? | Điểm mạnh | Khoảng trống / rủi ro | Bài học cho nhóm |
|---|---|---|---|---|---|
| CuboAi | cuboai.com | Phát hiện úp mặt, ho, khóc | Nhận diện tốt, có ru ngủ | Giá cao, bắt mua phần cứng | AI làm tốt CV trong nôi |
| Nanit Pro | nanit.com | Theo dõi nhịp thở | Áo wearable theo dõi | Gây khó chịu, cộm da bé | Ưu tiên giải pháp Non-invasive |

**Research takeaway (2-3 câu — nên build gì / không build gì):**

```text
Nên build hệ thống giám sát Non-invasive qua Camera AI/Audio AI. Không build thiết bị đeo (wearable) vật lý vào người trẻ.
```

> Lưu ý: không dùng số liệu AI đưa nếu không verify được link chính thức. Ghi rõ giả định chưa chắc.

---

## Phase 5 — Workflow + Problem Statement

### 5.1. Current workflow bản nhóm

Dán workflow hoặc link file: `02-group-problem-statement-workflow.png/pdf/md`

```text
[1 Đặt bé ngủ: 5' - Bố mẹ] → [2 Nằm canh nôi: 120' - Bố mẹ] <-- bottleneck → [3 Phát hiện & Dỗ bé: 10' - Bố mẹ]
```

| Bước | Actor | Input | Output | Thời gian / tần suất | Ghi chú (handoff? bottleneck?) |
|---|---|---|---|---|---|
| 1 | Bố mẹ | Trẻ vào nôi | Bé bắt đầu ngủ | 5' | |
| 2 | Bố mẹ | Bé ngủ | Canh chừng an toàn | 120' | Bottleneck: Tốn sức, liên tục |
| 3 | Bố mẹ | Bé khóc/ọc sữa | Bé nín/an toàn | 10' | |

**Bottleneck chính (2-3 câu):**

```text
Phụ huynh phải liên tục canh chừng (nhìn/nghe) bằng sức người trong suốt giấc ngủ của trẻ (lên tới chục tiếng mỗi ngày). Sự chú ý của con người không thể duy trì 24/7.
```

### 5.2. Future workflow bản nhóm

Phải nhìn ra 5 thứ: bước nào máy (Rule), bước nào AI, bước nào người, boundary ở đâu, fallback khi AI sai.

```text
[1 Đặt bé ngủ: 5' - người] → [2 Giám sát AI: 120' - máy/AI] → [3 Gửi cảnh báo: <2s - máy/AI] → [4 Dỗ bé: 10' - boundary/người]

Fallback: Bé khóc lớn tự nhiên sẽ đánh thức bố mẹ nếu AI/mạng lỗi.
```

**Before/after impact:**

| Metric | Trước | Sau kỳ vọng | Cách đo |
|---|---:|---:|---|
| Tổng thời gian | 120 phút/giấc | 0 phút | Đo thời gian ngồi canh |
| Số bước | 3 | 4 | |
| Số bước thủ công | 3 | 2 | |
| Bottleneck chính | Nằm canh nôi | Chờ AI xử lý | |
| Risk mới | SIDS | AI báo sai | |

### 5.3. Problem Statement v0 (mỗi field 2-3 câu)

| Field | Nội dung |
|---|---|
| **Actor** | Phụ huynh, người trông trẻ |
| **Workflow** | Giám sát qua AI camera -> Phát hiện bất thường -> Tự động bật nhạc/Gửi cảnh báo -> Phụ huynh xử lý. |
| **Bottleneck** | Phụ huynh phải túc trực bằng mắt/tai liên tục không nghỉ. |
| **Impact** | Căng thẳng, kiệt sức, thiếu ngủ, nguy cơ SIDS cao. |
| **Success Metric** | Accuracy >90%, Latency <2 giây, FPR <5%, CSAT >85%. |
| **Boundary** | AI chỉ cảnh báo và dỗ dành cơ bản, bố mẹ vẫn là người trực tiếp can thiệp. |

**Câu hỏi AI phản biện v0 (nếu có):**
- Field nào mơ hồ:
- Tôi sửa gì:

---

## Phase 6 — Rule / Workflow / Agent + Decision

### 6.0. Ma trận độ phù hợp (suy nghĩ nhanh, không thay quyết định cuối)

- Độ mơ hồ: [x] Thấp (có đúng/sai rõ) — Vì sao: Nhận diện bé an toàn hay nguy hiểm là rõ ràng.
- Độ phức tạp: [x] Cao (3+ bước/nguồn, phụ thuộc nhau) — Vì sao: Xử lý 2 nguồn (Video + Audio) liên tiếp.

**Bài toán nhóm nằm ở ô nào:**

```text
AI Workflow
```

**Vì sao (2-3 câu):**

```text
Kết hợp xử lý nhiều nguồn dữ liệu (Camera, Microphone) và phải đi qua nhiều bước mô hình (Audio classification, CV detection) để ra quyết định cuối.
```

### 6.1. So sánh Rule / Workflow / Agent (so trên cùng 1 bài)

| Mức | Phương án cho bài toán nhóm | Khi nào đủ | Rủi ro | Chọn? (Dùng cho bước nào?) |
|---|---|---|---|---|
| **Rule** | Không thể code if-else cho hình ảnh bé. | Không đủ | Bỏ sót case | Không |
| **Workflow** | Dùng AI để phân tích âm thanh/video. | Khi AI chính xác >90% | Báo động sai | Có |
| **Agent** | Không cần AI tự gọi tool. | - | Quá rườm rà | Không |

**5 câu hỏi chốt (trả lời câu đầy đủ):**
1. Rule có giải được 70-80% case không? Không, hình dáng và tiếng khóc không thể code if-else.
2. Các bước có đi thẳng một đường không hay phải rẽ nhánh? Đi thẳng (Ghi nhận -> Phân tích -> Báo động).
3. Có thật sự cần Agent tự lập kế hoạch + gọi tool không? Không cần.
4. Nếu AI sai, ai phát hiện đầu tiên và sửa trong bao lâu? Bố mẹ phát hiện ngay lập tức khi kiểm tra.
5. Có hạ được từ Agent → Workflow → Rule không? Không, bắt buộc dùng Workflow vì dữ liệu phi cấu trúc.

**Mức chọn:**

```text
Workflow
```

**Vì sao chọn (3-4 câu):**

```text
Bài toán đòi hỏi phân tích dữ liệu phi cấu trúc (ảnh, âm thanh) nên Rule không giải quyết được. Tuy nhiên, luồng đi lại rất tĩnh và trực tiếp, không cần AI phải lên kế hoạch hay tự gọi API phức tạp nên không cần Agent. Mức Workflow là vừa đủ và hiệu quả nhất.
```

**Vì sao không chọn mức đơn giản hơn (2-3 câu):**

```text
Không thể dùng Rule vì tiếng khóc và tư thế nằm của bé có vô vàn biến thể, không thể định nghĩa bằng các quy tắc lập trình cứng.
```

### 6.2. Problem Statement v1 (v0 sửa chặt hơn + 3 field cuối)

| Field | Nội dung |
|---|---|
| **Actor** | Phụ huynh, người trông trẻ |
| **Workflow** | Giám sát AI -> Phát hiện bất thường -> Cảnh báo -> Phụ huynh xử lý. |
| **Bottleneck** | Phụ huynh túc trực bằng mắt/tai liên tục. |
| **Impact** | Căng thẳng, kiệt sức, thiếu ngủ. |
| **Success Metric** | Accuracy >90%, Latency <2 giây. |
| **Boundary** (làm / không làm) | Làm: Phân tích, báo động. Không làm: Trực tiếp dỗ dành bé. |
| **AI intervention point** | Can thiệp thay thế bước nằm canh nôi của bố mẹ. |
| **Mức chọn** | Workflow. Vì cần xử lý nhiều model AI (Audio + CV) để ra output. |
| **Rủi ro & kiểm tra** | AI bỏ sót. Bố mẹ thỉnh thoảng liếc qua app/chuông tự nhiên. |

### 6.3. Final decision

| Câu hỏi | Yes / Not Yet / No | Ghi chú (câu đầy đủ) |
|---|---|---|
| Actor + workflow rõ chưa? | Yes | Người dùng là bố mẹ, luồng từ lúc bé ngủ đến báo thức |
| Baseline + metric đo được chưa? | Yes | Giảm từ 120 phút xuống 0 phút túc trực. |
| Data/input đủ dùng chưa? | Yes | Dữ liệu hình ảnh và âm thanh từ Camera. |
| AI sai, hậu quả chấp nhận được không? | Yes | Báo giả thì phiền, báo thiếu thì có tiếng khóc thật. |
| Có người review/owner không? | Yes | Bố mẹ trực tiếp là người review. |
| Có cách non-AI đơn giản hơn không? | No | Monitor truyền thống không có cảnh báo thông minh. |

**Decision:**

```text
[Go]
```

**Lý do (3-4 câu dựa trên bằng chứng):**

```text
Bài toán có Pain point cực kỳ sâu sắc, ảnh hưởng trực tiếp đến sức khỏe. Metric đo lường rõ ràng và có thể kiểm chứng. Các công nghệ Computer Vision và Audio AI hiện nay hoàn toàn đủ khả năng giải quyết tốt.
```

**Nếu Go — pilot nhỏ nhất (data nào, chạy tay ra sao, đo 3 số nào):**

```text
Thu thập data tiếng khóc và video bé ngủ từ 1-2 gia đình. Chạy thử model phân loại offline. Đo 3 số: FPR, Latency và Accuracy.
```

**Nếu Not Yet — cần validate gì trước:**

```text
Không áp dụng (Decision là Go). Tuy nhiên nếu cần validate thêm, nhóm sẽ khảo sát lại mức độ chấp nhận báo động giả (False Positive) của phụ huynh (khoảng 5-10 người) trước khi đầu tư sâu hơn vào thuật toán.
```

**Nếu No-Go — làm gì thay AI:**

```text
Không áp dụng (Decision là Go). Nếu từ bỏ AI, giải pháp thay thế duy nhất là dùng Baby Monitor truyền thống (chỉ truyền hình/tiếng) và phụ huynh phải phân công nhau thức trắng đêm để canh chừng thủ công.
```

**Exit / rollback (khi nào dừng AI, quay về cách cũ):**

```text
Tỷ lệ báo giả quá 10%, bố mẹ tắt thông báo và quay lại dùng baby monitor truyền thống.
```

---

### Self-check nộp phần 02 (nhóm)
- [x] Có nhật ký hội tụ 9-12 → 1 (cluster + shortlist + score)
- [x] Có validation (quote thật) + research (link kiểm được)
- [x] Có workflow trước/sau đủ thời gian, handoff, bottleneck, boundary, fallback
- [x] Có PS v0 → v1, metric có trước/sau + cách đo, boundary có làm/không làm
- [x] Có so sánh Rule/Workflow/Agent + Decision Go/Not Yet/No-Go có lý do
