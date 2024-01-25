document.addEventListener("DOMContentLoaded", function(){
    console.log("Đã load xong");
    window.addEventListener("scroll",function(){
        console.log("đang cuộn chuột");
        console.log(window.pageYOffset);//in ra vị trí dọc của chuột
       
        if(window.pageYOffset>500){
            console.log("đến phần sidebar");
        }
    })
})