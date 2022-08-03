window.onload = () => {

    const openPopupButton = document.querySelectorAll('[data-popup-button]')
    const closePopupButton = document.querySelectorAll('[data-close-button]')

    openPopupButton.forEach(button => {

        button.addEventListener('click', () => {
            const popup = document.querySelector(button.dataset.popupButton)
            openPopup(popup)
        })
    })

    closePopupButton.forEach(button => {
        button.addEventListener('click', () => {
            const popup = button.closest('.popup')
            closePopup(popup)
        })
    })

    function openPopup(popup) {
        if (popup == null) return
        popup.classList.add('active')

    }

    // console.log(popup.classList.add('active'))

    function closePopup(popup) {
        if (popup == null) return
        popup.classList.remove('active')
    }
}




// window.onload = () => {
//     // This is will only select the button which have a specific selector above all buttons
//     // like 'open-popup-button'
//     // open-popup-button --> popup
//     const openPopupButton = document.querySelectorAll('[data-popup-button]')

//     // This is will only select the button which have a specific selector above all buttons
//     // like 'close-popup-button'
//     // close-popup-button --> <button data-close-button class="close-btn">&times;</button>
//     const closePopupButton = document.querySelectorAll('[data-close-button]')


//     // Hooking our Event Listeners

//     openPopupButton.forEach(button => {
//         // console.log(button)
//         // --> <button open-popup-button="#popup" class="btn open-btn">Login</button>

//         // On clicking
//         button.addEventListener('click', () => {

//             // popup = button --> open-popup-button="#popup" --> popupButton {
//             //  return <div class="popup" id="popup">
//             // }
//             const popup = document.querySelector(button.dataset.closeButton)
//             openPopup(popup)

//             // console.log(popup)
//             // --> <div class="popup" id="popup">

//         })
//     })

//     closePopupButton.forEach(button => {
//         button.addEventListener('click', () => {
//             const popup = button.closest('.popup')
//             closePopup(popup)
//         })
//     })

//     function openPopup(popup) {
//         if (popup == null) return
//         popup.classList.add('active')

//     }

//     function closePopup(popup) {
//         if (popup == null) return
//         popup.classList.remove('active')
//     }
// }



// const openBtn = document.getElementById('open-popup')
// const closeBtn = document.getElementById('close-popup')

// openBtn.addEventListener('click', () => {
//     popup = openBtn.getAttribute("data-open-button")
//     openPopup(popup)
// })

// closeBtn.addEventListener('click', () => {
//     popup = closeBtn.getAttribute("data-close-button")
//     closePopup(popup)
// })

// function openPopup(popup) {
//     if (popup == null) return
//     document.querySelector(popup).classList.add('active')
// }

// function closePopup(popup) {
//     if (popup == null) return
//     document.querySelector(popup).classList.remove('active')
// }
