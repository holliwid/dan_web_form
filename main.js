// большая картинка
const img = document.getElementById('carousel');
// правая и левая кнопка
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

// Images are from unsplash
// список картинок
let pictures = ['img/1.jpg',
                'img/2.jpg',
                'img/3.jpg',
                'img/4.jpg',
                'img/5.jpg',
                'img/6.jpg',
                'img/7.jpg',
                'img/8.jpg',
                'img/9.jpg',
                'img/10.jpg'
                ];
// ставим нулевую картинку
img.src = pictures[0];


// слайдер в право
function moveRight_alt(){
    // номер картинки со слайдера
    let img = document.getElementById("carousel").src.slice(22)
    // индекс картинки в массиве картинок
    let index = pictures.indexOf(img)


    // меняем большую картинку
    if (index < pictures.length - 1){
        document.getElementById("carousel").src = pictures[index+1]
    }
    // если индекс картинки,которая была является последним в списки картинок, то мы ставим первую из списка
    else{
        document.getElementById("carousel").src = pictures[0]
    }
    // вызываем подсветку
    shadow_active()
}


// слайдер в лево
function moveLeft_alt(){
    // номер картинки со слайдера
    let img = document.getElementById("carousel").src.slice(22)
    // индекс картинки в массиве картинок
    let index = pictures.indexOf(img)
    
    if (index != 0){
        document.getElementById("carousel").src = pictures[index-1]
        console.log(index)
    }
    // если индекс равен 0, то ставим последнюю картинку из списка
    else{
        document.getElementById("carousel").src = pictures[pictures.length-1]
        console.log(index)
    }
    // вызываем подсветку
    shadow_active()
}


// добавляем функция,которые ждут пока нажмут на кнопки
rightBtn.addEventListener("click", moveRight_alt);
leftBtn.addEventListener("click", moveLeft_alt);


// меняем картинки снизу вправо
function change_bottom_img_right(){
    shadow_active()

    // забираем три поля куда будем вставлять картинки
    let img_1 = document.getElementById("button_img_1")
    let img_2 = document.getElementById("button_img_2")
    let img_3 = document.getElementById("button_img_3")

    // индекс самой левой картинки внизу
    let index = pictures.indexOf(img_1.src.slice(22))
    // если есть ещё три картинки справа
    if (index+3 < pictures.length) {
        img_1.src = `img/${index+2}.jpg`
        img_2.src = `img/${index+3}.jpg`
        img_3.src = `img/${index+4}.jpg`
    }
    // если есть тольео 2 картинки справа
    else if (index+3 == pictures.length){
        img_1.src = `img/${index+2}.jpg`
        img_2.src = `img/${index+3}.jpg`
        img_3.src = `img/1.jpg`
    }
    // если есть только 1 картинка справа
    else if (index+2 == pictures.length){
        img_1.src = `img/${index+2}.jpg`
        img_2.src = `img/1.jpg`
        img_3.src = `img/2.jpg`
    }
    // если нет картинок справа
    else{
        img_1.src = `img/1.jpg`
        img_2.src = `img/2.jpg`
        img_3.src = `img/3.jpg`
    }
}


// меняем картинки снизу в лево
function change_bottom_img_left(){
    shadow_active()
    let img_1 = document.getElementById("button_img_1")
    let img_2 = document.getElementById("button_img_2")
    let img_3 = document.getElementById("button_img_3")

    let index = pictures.indexOf(img_3.src.slice(22))

    if (index-3 >= 0) {
        img_1.src = `img/${index-2}.jpg`
        img_2.src = `img/${index-1}.jpg`
        img_3.src = `img/${index}.jpg`
    }
    else if (index-3 == -1){
        img_1.src = `img/${pictures.length}.jpg`
        img_2.src = `img/1.jpg`
        img_3.src = `img/2.jpg`
    }
    else if (index-3 == -2){
        img_1.src = `img/${pictures.length-1}.jpg`
        img_2.src = `img/${pictures.length}.jpg`
        img_3.src = `img/1.jpg`
    }
    else{
        img_1.src = `img/${pictures.length-2}.jpg`
        img_2.src = `img/${pictures.length-1}.jpg`
        img_3.src = `img/${pictures.length}.jpg`
    }
}

// ксли кликнули на картинку снизу(одну из трёх)
function click_on_img(number_of_img){
    // находим нажатую картинку
    img_numb = document.getElementById(number_of_img)

    // меняем большую картинку
    img_carousel = document.getElementById(carousel)
    carousel.src = img_numb.src

    shadow_active()
}


// подстветка
function shadow_active(){
    // картинки снизу
    let img_1 = document.getElementById("button_img_1")
    let img_2 = document.getElementById("button_img_2")
    let img_3 = document.getElementById("button_img_3")

    // убираем у них подсветку
    img_1.classList.remove("active-img")
    img_2.classList.remove("active-img")
    img_3.classList.remove("active-img")

    // большая картинка
    let img_carousel = document.getElementById("carousel")

    // если одна из трёх картинок снизу это большая картинка, то подсвечиваем её(нижнюю картинку)
    if (img_carousel.src == img_1.src){
        img_1.classList.add("active-img")
    }
    
    if (img_carousel.src == img_2.src){
        img_2.classList.add("active-img")
    }
    
    if (img_carousel.src == img_3.src){
        img_3.classList.add("active-img")
    }
}

// остальной код нужен для переключения слайдера снизу
let left_btn_button = document.getElementById("left-btn-button")
let right_btn_button= document.getElementById("right-btn-button")



const moveRight_button = () => {
    change_bottom_img_right()
    shadow_active()
}

const moveLeft_button = () => {
    change_bottom_img_left()
    shadow_active()
}

left_btn_button.addEventListener("click", moveLeft_button);
right_btn_button.addEventListener("click", moveRight_button);