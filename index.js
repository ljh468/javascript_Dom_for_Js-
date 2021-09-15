//////////////////// 23 강 ////////////////////
// window.onload = function(){
window.addEventListener("load", function(){
    var btnPrint = document.getElementById("btn-print");

    var add = function(){
        return x + y;
    };
    btnPrint.onclick = function(){
        var x = prompt('x의 값을 입력하세요.', 0);
        var y = prompt('y의 값을 입력하세요.', 0);
        btnPrint.value = parseInt(x)+parseInt(y);
    };
});