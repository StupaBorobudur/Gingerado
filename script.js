elementImg = document.getElementById("idImage");

listImage =["birjaheprodukori.png","jeruk.png","jambu.png"];
i=0;
function gantiGbr(){
    elementImg.src=listImage[i];
    i = (i+1)% listImage.length;
}
setInterval(gantiGbr,5000)

