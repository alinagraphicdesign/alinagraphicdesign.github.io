let imageBig = document.getElementById('bigImg');
let bigDiv = document.getElementById('sectionBig');

$('.exmplImage').click(function() {
   let newSrc = this.src;
   imageBig.src = newSrc.replace('min', 'max');
   bigDiv.style.display = 'block';
})

let closeBTN = document.getElementById('xBtn');

closeBTN.onclick = function() {
   bigDiv.style.display = 'none';
}
