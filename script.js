function checkPassword(event) {
  event.preventDefault();
  const password = prompt("Enter the password to access the portfolio:");
  if (password === "janeausten") {
    // Redirect if the password is correct
    window.location.href = "portfolio.html";
  } else {
    // Alert if the password is incorrect
    alert("Incorrect password. Contact skdoyle@ymail.com to access.");
  }
}

var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
};
$(document).ready(function(){
$('#portests').on('click',function(){	
    $('.test').toggle();
});
$('#portests1').on('click',function(){	
    $('.tests').toggle();
});
});
