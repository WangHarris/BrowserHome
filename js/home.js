var searchKey = document.getElementById("searchKey");
searchKey.focus();
searchKey.value = "";
var flag = true;
var searchButton = document.getElementById("searchButton");
var form = document.getElementById("form");
document.body.style.backgroundSize = window.innerWidth + "px " + window.innerHeight + "px";

window.onresize=function() {
  document.body.style.backgroundSize = window.innerWidth + "px " + window.innerHeight + "px";
}

searchKey.addEventListener("keydown", function(event) {
  if(event.keyCode == "13") {
    verifyPara();
  }
}, false);

function onChangeOutLine() {
  if (flag === true) {
    searchButton.style.outline = "#86A7D5 solid 2px";
    flag = false;
  } else {
    searchButton.style.outline = "none";
    flag = true;
  }
}

searchButton.addEventListener("click", function(event) {
  verifyPara();
}, false);

function verifyPara() {
  var inputText = searchKey.value;
  if (inputText.trim() === "") {
    searchKey.value = "";
  } else {
    form.submit();
  }
}