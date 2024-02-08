document.addEventListener("DOMContentLoaded", function () {
  // console.log("đã load");
  var doituongmenutrai = document.querySelector(".trai");
  var doituongmenuphai = document.querySelector(".phai");
  var trangthai = "duoi110";
  window.addEventListener("scroll", function () {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 110) {
      if (trangthai == "duoi110") {
        console.log("ok ");
        trangthai = "tren110";
        doituongmenutrai.classList.add("nholaitrai");
        doituongmenuphai.classList.add("nholaiphai");
      }
    } else if (window.pageYOffset <= 110) {
      if ((trangthai = "tren110")) {
        doituongmenutrai.classList.remove("nholaitrai");
        doituongmenuphai.classList.remove("nholaiphai");
        trangthai = "duoi110";
      }
    }
  });
});
document.getElementById("backToTopBtn").addEventListener("click", function () {
  // Sử dụng window.scrollTo để cuộn về đầu trang web
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Tạo hiệu ứng cuộn mượt nếu trình duyệt hỗ trợ
  });
});
