changeWidth()
window.addEventListener('resize',function (e) {
    changeWidth()
})
function changeWidth() {
    let flower_img = document.querySelector('.flower_img')
    if(window.innerWidth < 1360 && window.innerWidth >= 1242){
        flower_img.src = 'image/img2.jpg'
    }else if(window.innerWidth < 1242 && window.innerWidth >= 1124){
        flower_img.src = 'image/img3.jpg'
    }else if(window.innerWidth < 1124 && window.innerWidth >= 1006){
        flower_img.src = 'image/img4.jpg'
    }else if(window.innerWidth < 1006 && window.innerWidth >= 888){
        flower_img.src = 'image/img5.jpg'
    }else if(window.innerWidth < 888){
        flower_img.src = 'image/img6.jpg'
    }else {
        flower_img.src = 'image/img1.jpg'
    }
}
