document.querySelector('.hamburger').addEventListener('click', showOffscreenMenu)
document.querySelector('.close-menu').addEventListener('click', closeOffscreenMenu)

function showOffscreenMenu() {
    let offscreen = document.querySelector('.off-screen')
    offscreen.style.display = 'flex'
}

function closeOffscreenMenu() {
    let closemenu = document.querySelector('.off-screen')
    closemenu.style.display = 'none'
}