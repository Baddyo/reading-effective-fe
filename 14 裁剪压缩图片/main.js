let box = document.getElementById('box');
let file = null;

box.addEventListener('dragover', e => {
    e.preventDefault();
    // console.log(e);
});
box.addEventListener('drop', e => {
    e.preventDefault();
    // 获取图片文件
    file = e.dataTransfer.files[0];
    // console.log(file);

    // 检查文件类型
    if (file.type.indexOf('image') < 0) {
        alert('Not a image!');
        return;
    }

    // 读取文件
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', e => {
        let base64 = e.target.result;
        loadImg(document.getElementById('img'), base64, document.getElementById('opt'));
    });

});

document.getElementById('crs').addEventListener('click', e => {
    compressImg();
});

function loadImg(img, base64, opt) {
    img.src = base64;
    opt.style.opacity = 1;
}

function compressImg() {
    let cvs = document.createElement('canvas');
    let img = document.getElementById('img');
    cvs.width = img.width;
    cvs.height = img.height;

    let ctx = cvs.getContext('2d');
    // ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
    ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, cvs.width, cvs.height)
    let quality = 0.5;
    let mime = 'image/png';

    let newImgData = cvs.toDataURL(mime, quality);
    let newImg = new Image();
    newImg.src = newImgData;
    // return newImg;
    newImg.onload = e => {
        document.body.appendChild(newImg);
    };
}