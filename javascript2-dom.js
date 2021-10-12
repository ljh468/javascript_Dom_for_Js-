//////////////////// 35 강 ////////////////////
//Ex8-노드 삽입과 바꾸기
window.addEventListener("load", function(){

    var section = document.querySelector("#section8");
    
    var noticeList =section.querySelector(".notice-list"); 
    var tbodyNode = noticeList.querySelector("tbody");
    var upButton = section.querySelector(".up-button");
    var downButton = section.querySelector(".down-button");

    var currentNode = tbodyNode.firstElementChild;//.children[0];

    downButton.onclick = function(){
        var nextNode = currentNode.nextElementSibling;
        
        if(nextNode == null){
            alert("더이상 이동할 수 없습니다.");
            return;
        }
        // tbodyNode.removeChild(nextNode);
        // tbodyNode.insertBefore(nextNode, currentNode);
        currentNode.insertAdjacentElement("beforebegin", nextNode);

    };

    upButton.onclick = function(){
       var prevNode = currentNode.previousElementSibling;

       if(prevNode == null){
        alert("더이상 이동할 수 없습니다.");
        return;
        }
        // tbodyNode.removeChild(currentNode);
        // tbodyNode.insertBefore(currentNode, prevNode);
        currentNode.insertAdjacentElement("afterend", prevNode);
    };

});

//////////////////// 34 강 ////////////////////
// Ex7-노드 복제와 템플릿 태그
window.addEventListener("load", function(){

    var notices = [
        {id:5, title:"퐈이야~~~", regDate:"2021-10-05", writherId:"hoon"},
        {id:6, title:"나 좀 복제해줘~", regDate:"2021-10-05", writherId:"hoon"}
    ];
    var section = document.querySelector("#section7");

    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("tbody");
    var cloneButton = section.querySelector(".clone-button");
    var templateButton = section.querySelector(".template-button");
    
    cloneButton.onclick = function(){
        var trNode = noticeList.querySelector("tbody tr");
        var cloneNode = trNode.cloneNode(true); // (true) 자손 노드를 모두 복제
        var tds = cloneNode.querySelectorAll("td");
        tds[0].textContent = notices[0].id;
        // tds[1].innerHTML = '<a href="'+ notices[0].id +'">'+ notices[0].title +'</a>';
        
        var aNode = tds[1].children[0];
        aNode.href = notices[0].id;
        aNode.textContent = notices[0].title;

        tds[2].textContent = notices[0].regDate;
        tds[3].textContent = notices[0].writerId;
        tds[4].textContent = notices[0].hit;

        tbodyNode.append(cloneNode);

    };

    templateButton.onclick = function(){
        var template = section.querySelector("template");
        var cloneNode = document.importNode(template.content, true);
        var tds = cloneNode.querySelectorAll("td");
        tds[0].textContent = notices[0].id;
        tds[1].innerHTML = '<a href="'+ notices[0].id +'">'+ notices[0].title +'</a>';
        tds[2].textContent = notices[0].regDate;
        tds[3].textContent = notices[0].writerId;
        tds[4].textContent = notices[0].hit;

        tbodyNode.append(cloneNode);

    };
});

//////////////////// 32, 33 강 ////////////////////
// Ex6-노드조작: 메뉴추가(createTextNode, Element)
window.addEventListener("load", function(){
    var section = document.querySelector("#section6");

    var titleInput = section.querySelector(".title-input");
    var menuListUi = section.querySelector(".menu-list");
    var addButton = section.querySelector(".add-button");
    var delButton = section.querySelector(".del-button");
    
    addButton.onclick = function(){
        var title = titleInput.value;

        menuListUi.innerHTML += '<li><a href="">' + title + '</a></li>';
        var li = document.createElement("li");
        li.innerHTML = html;

        // menuListUi.appendChild(li);
        
        menuListUi.append(title);

        /*
        var title = titleInput.value;
        var txtNode = document.createTextNode(title);
        var aNode = document.createElement("a");
        aNode.href = "";
        aNode.appendChild(txtNode);

        var liNode = document.createElement("li");
        liNode.append(aNode);

        menuListUi.appendChild(liNode);
        */

        // var title = titleInput.value;
        // var txtNode = document.createTextNode(title);
        // menuListUi.appendChild(txtNode);
    };

    delButton.onclick = function(){
        // var txtNode = menuListDiv.childNodes[0]; // 모든 노드 대상
        
        var liNode = menuListUi.children[0]; // element노드만 
        // menuListUi.removeChild(liNode);

        liNode.remove();
    };
});

