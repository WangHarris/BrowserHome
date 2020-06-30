var searchKey = document.getElementById("searchKey");
searchKey.focus();
searchKey.value = "";
var flag = true;
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

function verifyPara() {
  var inputText = searchKey.value;
  if (inputText.trim() === "") {
    searchKey.value = "";
  } else {
    form.submit();
  }
}