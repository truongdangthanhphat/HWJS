function upDate(previewPic) {
    // 3a. Kiểm tra sự kiện
    console.log("Sự kiện mouseover đã được kích hoạt");

    // 3b. Kiểm tra thông tin alt và source
    console.log("Alt text: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    // 3c. Thay đổi text của element có id="image"
    document.getElementById("image").innerHTML = previewPic.alt;

    // 3e. Thay đổi background image của element có id="image"
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    // 4a. Reset background image về rỗng
    document.getElementById("image").style.backgroundImage = "url('')";

    // 4b. Reset văn bản gốc
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
