// Put your application javascript here
$(document).ready(function() {
    $(document).on('change', '#variant-id', function() {
        let 
            variant_id = this.value,
            variant_image = $('.single-product-image[data-variant="'+variant_id+'"]');

        variant_image.show().siblings(':visible').hide();
    })
});

// document.addEventListener('DOMContentLoaded', function () {

//     let option = document.getElementById("variant-id");
//     if (option) {
//         option.addEventListener('change', function () {
//             let target = Event.target.value
//             let productImage = document.querySelector('.single-product-image[data-variant="' + target + '"]')
//             let productImages = document.querySelectorAll('.single-product-image')
//             productImages.forEach(image => {
//                 image.style.display = "none"
//             })
//             productImage.style.display = 'block'
//         })
//     }
// });