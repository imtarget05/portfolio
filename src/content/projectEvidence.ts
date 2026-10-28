// Claims here describe what the linked repositories document, not independent
// proof of a live production deployment. Snapshot reviewed 25 October 2026.
export const projectEvidence: Record<string, {
  scope: { en: string; vi: string };
  proof: { en: string; vi: string };
  boundary: { en: string; vi: string };
}> = {
  flashsale: {
    scope: { en: 'Order reliability and operations workflows share one repository. The code documents inventory concurrency controls and event handling.', vi: 'Luồng đơn hàng và vận hành nằm trong cùng một repository. Mã nguồn ghi lại cách kiểm soát tồn kho đồng thời và xử lý sự kiện.' },
    proof: { en: 'Architecture notes, recruiter evidence and recorded CI runs are linked below.', vi: 'Tài liệu kiến trúc, ghi chú kiểm chứng và các lần chạy CI được dẫn bên dưới.' },
    boundary: { en: 'Payments are simulated. The latest main CI run checked on 25 Oct 2026 failed.', vi: 'Thanh toán là mô phỏng. Lần chạy CI trên nhánh main được kiểm tra ngày 25/10/2026 đã thất bại.' },
  },
  quanlykho: {
    scope: { en: 'Flutter and FastAPI/PostgreSQL workflows cover warehouse records, approvals and inventory history.', vi: 'Các luồng Flutter và FastAPI/PostgreSQL bao gồm ghi nhận kho, phê duyệt và lịch sử tồn kho.' },
    proof: { en: 'The repository documents the employee app and links a recorded CI run.', vi: 'Repository có tài liệu cho ứng dụng nhân viên và liên kết tới một lần chạy CI đã ghi nhận.' },
    boundary: { en: 'Financial operations are simulations; this is not banking or real-money software.', vi: 'Các nghiệp vụ tài chính là mô phỏng; đây không phải phần mềm ngân hàng hay giao dịch tiền thật.' },
  },
  'doc-intelligence': {
    scope: { en: 'The repository documents document search, retrieval and citation-aware answer flows across its services.', vi: 'Repository ghi lại các luồng tìm kiếm tài liệu, truy xuất và trả lời kèm nguồn dẫn giữa các dịch vụ.' },
    proof: { en: 'README, portfolio audit and a recorded nightly run show the documented scope and its test state.', vi: 'README, bản kiểm tra portfolio và lần chạy nightly cho thấy phạm vi được ghi lại cùng trạng thái kiểm thử.' },
    boundary: { en: 'The latest checked nightly load test failed; frontend and backend were not verified as one release.', vi: 'Bài kiểm thử tải nightly được kiểm tra gần nhất đã thất bại; frontend và backend chưa được xác nhận cùng một bản phát hành.' },
  },
  'aks-sre': {
    scope: { en: 'Terraform and GitOps exercises include a recorded temporary AKS validation.', vi: 'Các bài thực hành Terraform và GitOps có một lần kiểm chứng AKS tạm thời được ghi lại.' },
    proof: { en: 'The Phase 7A record documents ACR pull and workload identity checks on the temporary cluster.', vi: 'Biên bản Phase 7A ghi lại kiểm tra ACR pull và workload identity trên cluster tạm thời.' },
    boundary: { en: 'The cluster was torn down; there is no evidence of a continuously running production cluster or SLO history.', vi: 'Cluster đã được gỡ sau thử nghiệm; không có bằng chứng về cluster production chạy liên tục hoặc lịch sử SLO.' },
  },
  minierp: {
    scope: { en: 'A manufacturing ERP simulation documents lot allocation, FEFO, BOM and traceability workflows.', vi: 'Bản mô phỏng ERP sản xuất ghi lại phân bổ theo lô, FEFO, BOM và truy xuất nguồn gốc.' },
    proof: { en: 'Implementation and historical test records are in the README; the linked CI run shows a later failure.', vi: 'README có ghi nhận triển khai và kiểm thử trước đây; lần chạy CI được dẫn cho thấy một lỗi về sau.' },
    boundary: { en: 'No live factory deployment is verified. Historical test counts are not a fresh test result.', vi: 'Chưa có bằng chứng triển khai tại nhà máy thật. Số lượng test trong tài liệu không phải kết quả kiểm thử mới.' },
  },
  supportdesk: {
    scope: { en: 'Ticket workflows, grounded AI drafts, output guardrails and evaluation code are documented.', vi: 'Repository ghi lại luồng ticket, bản nháp AI dựa trên tài liệu, rào chắn đầu ra và mã đánh giá.' },
    proof: { en: 'README and CV evidence describe the implemented paths and their operating limits.', vi: 'README và tài liệu kiểm chứng mô tả các luồng đã có và giới hạn vận hành của chúng.' },
    boundary: { en: 'The default runner is in-process; a live Temporal cluster has not been verified.', vi: 'Bộ chạy mặc định nằm trong tiến trình; chưa kiểm chứng trên cluster Temporal thực.' },
  },
  creditflow: {
    scope: { en: 'A demo risk decision-support workflow documents model evaluation, experiment tracking and human-review states.', vi: 'Bản demo hỗ trợ quyết định rủi ro ghi lại đánh giá mô hình, theo dõi thử nghiệm và trạng thái duyệt của con người.' },
    proof: { en: 'The README describes the workflow and its authentication caveat.', vi: 'README mô tả luồng xử lý và giới hạn về xác thực.' },
    boundary: { en: 'Uses a shared demo API key; it is not a production lending or banking approval system.', vi: 'Sử dụng API key chung cho demo; đây không phải hệ thống phê duyệt cho vay hoặc ngân hàng production.' },
  },
  apexinspect: {
    scope: { en: 'The repository documents dataset preparation, detection training, model export and benchmark interfaces.', vi: 'Repository ghi lại chuẩn bị dữ liệu, huấn luyện phát hiện, xuất mô hình và giao diện benchmark.' },
    proof: { en: 'The README describes the pipeline and target metrics; target values are not treated as measured results.', vi: 'README mô tả pipeline và chỉ tiêu mục tiêu; các chỉ tiêu này không được xem là kết quả đã đo.' },
    boundary: { en: 'No independently verified model accuracy or production edge latency is available.', vi: 'Chưa có số liệu độc lập xác nhận độ chính xác mô hình hoặc độ trễ tại thiết bị biên production.' },
  },
};
