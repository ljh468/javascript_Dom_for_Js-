//////////////////// 28, 29, 30 강 ////////////////////
// Ex5 : 엘리먼트 노드의 속성 & CSS 속성 변경
window.addEventListener("load", function(){
    var section5 = document.querySelector("#section5");
    var srcInput = section5.querySelector(".src-input");
    var imgSelect = section5.querySelector(".img-select")
    var changeButton = section5.querySelector(".change-button");
    var img = section5.querySelector("img");
    var colorInput = section5.querySelector(".color-input");
    
    changeButton.onclick = function(){
        img.src = "images/"+srcInput.value;
        // img.src = "images/"+imgSelect.value;

        // img.style["border-color"] = colorInput.value;
        img.style.borderColor = colorInput.value;
        console.log(img.className)
    };
});

//////////////////// 27 강 ////////////////////
// Ex4 : childeNodes를 이용한 노드 선택
window.addEventListener("load", function(){
    var section4 = document.querySelector("#section4");
    var box = section4.querySelector(".box");
    // var input1 = box.childNodes[0];
    var input1 = box.children[0];
    var input2 = box.children[1];

    input1.value = "hello";
    input2.value = "okay";
});

//////////////////// 26 강 ////////////////////
// Ex3 : Selectors API Level1
window.addEventListener("load", function(){
    var section3 = document.getElementById("section3");
    var txtX = section3.querySelector("input[name='x']");
    var txtY = section3.querySelectorAll("input")[1];
    var btnAdd = section3.querySelector(".btn-add");
    var btnSum = section3.querySelector(".btn-sum");

    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        btnSum.value = x + y;
    };
});

//////////////////// 23  강 ////////////////////
// Ex2 : 엘리먼트 선택방법 개선하기
window.addEventListener("load", function(){
    var section2 = document.getElementById("section2");
    var txtX = section2.getElementsByClassName('txt-x')[0];
    var txtY = section2.getElementsByClassName('txt-y')[0];
    var btnAdd = section2.getElementsByClassName('btn-add')[0];
    var btnSum = section2.getElementsByClassName('btn-sum')[0];
    
    // var txtX = document.getElementById("txt-x");
    // var txtY = document.getElementById("txt-y");
    // var btnAdd = document.getElementById("btn-add");
    // var btnSum = document.getElementById("btn-sum");
    
    /*
    var inputs = section2.getElementsByTagName("input");
    var txtX = inputs[0];
    var txtY = inputs[1];
    var btnAdd = inputs[2];
    var btnSum = inputs[3]; // 배열로 검색 (좋은 방법은 아님)
    */    

    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        btnSum.value = x + y;
    };
});

// Ex1 : 계산기 프로그램
window.addEventListener("load", function(){
    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("btn-add");
    var btnSum = document.getElementById("btn-sum");

    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        
        btnSum.value = x + y;
    };
});