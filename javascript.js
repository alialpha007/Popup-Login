// window.onload = function () {
//     const openCV = document.getElementById('open-cv');
//     const closeCV = document.getElementById('close-cv')


//     openCV.addEventListener('click', () => {
//         popup = openCV.getAttribute('data-open-button')
//         openPopup(popup)
//     })
//     closeCV.addEventListener('click', () => {
//         popup = closeCV.getAttribute('data-close-button')
//         closePopup(popup)
//     })
//     function openPopup(popup) {
//         if (popup == null) return
//         document.querySelector(popup).classList.add('active')
//     }
//     function closePopup(popup) {
//         if (popup == null) return
//         document.querySelector(popup).classList.remove('active')
//     }
// }

$(document).ready(function () {
    const openCV = $('#open-cv')
    const closeCV = $('#close-cv')

    openCV.click(function () {
        var id = $(this).attr('data-open-button')
        $(id).addClass("active")
    })
    closeCV.click(function () {
        var id = $(this).attr('data-close-button')
        $(id).removeClass("active")
    })


})
