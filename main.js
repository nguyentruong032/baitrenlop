function goback() {
  window.history.back();
}
document.getElementById("backToTopBtn").addEventListener("click", function () {
  // Sử dụng window.scrollTo để cuộn về đầu trang web
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Tạo hiệu ứng cuộn mượt nếu trình duyệt hỗ trợ
  });
});
