// Side sponsor logo
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".logos-slide").style.display = "none";

//galeri 
    const imgPreview = (clickedImg) => {
      var previewImg = document.getElementById('preview-img');
      var galleryImages = document.querySelectorAll('.galleries img');
  
      galleryImages.forEach(function (img) {
        img.classList.remove('selected');
        img.style.filter = "grayscale(100%)"; 
      });
  
      clickedImg.classList.add('selected');
      clickedImg.style.filter = "grayscale(0%)"; 
      previewImg.src = clickedImg.src;
    };
  
    var galleryImages = document.querySelectorAll('.galleries img');
    galleryImages.forEach(function (img) {
      img.addEventListener('click', function () {
        imgPreview(img);
      });
    });
  });
  