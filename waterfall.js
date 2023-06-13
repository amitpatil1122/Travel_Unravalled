function myFunction() {
  for(let i=0;i<=15;i++){
  var dots = document.getElementsByClassName("dots")[i];
  var moreText = document.getElementsByClassName("moretxt")[i];
  var btnText = document.getElementsByClassName("myBtn")[i];
  var ifo = document.getElementsByClassName("info_opacity")[i];

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
    ifo.style.display = "inline";
  }
  else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
    ifo.style.display = "none";
  }
  }
}

// function myFunction() {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("moretxt");
//   var btnText = document.getElementById("myBtn");
//   var ifo = document.getElementById("info_opacity");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more"; 
//     moreText.style.display = "none";
//     ifo.style.display = "inline";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less"; 
//     moreText.style.display = "inline";
//     ifo.style.display = "none";
//   }
// }
