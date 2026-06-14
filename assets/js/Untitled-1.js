// 当前图片索引
let currentGallery = [];
let currentIndex = 0;
let currentScale = 1;

// 缩略图切换
function changeMainVisual(mainId, newSrc, element = null) {

    const mainImg = document.getElementById(mainId);

    if(mainImg){
        mainImg.style.opacity = "0";

        setTimeout(()=>{
            mainImg.src = newSrc;
            mainImg.style.opacity = "1";
        },150);
    }

    if(element){

        const thumbs =
        element.parentElement.querySelectorAll('.thumb-item');

        thumbs.forEach(item=>{
            item.classList.remove('active');
        });

        element.classList.add('active');
    }
}

// 打开灯箱
function openFullscreenVisual(mainId){

    const mainImg =
    document.getElementById(mainId);

    if(!mainImg) return;

    const lightbox =
    document.getElementById("customLightbox");

    const lightboxImg =
    document.getElementById("lightboxImage");

    lightboxImg.src = mainImg.src;

    currentScale = 1;
    lightboxImg.style.transform =
    `scale(${currentScale})`;

    lightbox.classList.add("active");

    document.body.style.overflow =
    "hidden";
}

// 关闭灯箱
function closeLightbox(){

    const lightbox =
    document.getElementById("customLightbox");

    lightbox.classList.remove("active");

    document.body.style.overflow =
    "";
}

// ESC关闭
document.addEventListener(
'keydown',
function(e){

    if(e.key === "Escape"){
        closeLightbox();
    }

}
);

// 图片缩放
const lightboxImage =
document.getElementById(
'lightboxImage'
);

if(lightboxImage){

    lightboxImage.addEventListener(
    'wheel',
    function(e){

        e.preventDefault();

        currentScale +=
        e.deltaY * -0.001;

        currentScale =
        Math.min(
            Math.max(
                1,
                currentScale
            ),
            5
        );

        this.style.transform =
        `scale(${currentScale})`;

    });

}

// 左右键切换
document.addEventListener(
'keydown',
function(e){

    const lightbox =
    document.getElementById(
    'customLightbox'
    );

    if(
    !lightbox.classList.contains(
    'active'
    )
    ){
        return;
    }

    if(e.key==="ArrowLeft"){
        document
        .querySelector(
        '.lightbox-prev'
        )
        ?.click();
    }

    if(e.key==="ArrowRight"){
        document
        .querySelector(
        '.lightbox-next'
        )
        ?.click();
    }

});