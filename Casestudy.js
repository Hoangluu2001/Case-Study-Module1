let images = [
    "images/nhanuoc.png",
    "images/nhahat.jpg",
    "images/yeuot.jpg",
    "images/tatyeu.jpg",
    "images/oto.jpg",
    "images/macarong.jpg",
    "images/chimchichbong.jpg",
    "images/yenbinh.jpg",
    "images/keocuanguaxe.jpg",
    "images/nhachoctroi.jpg",



];

let answers = [
    "Nhà nước",
    "Nhà hát",
    "Yếu ớt",
    "Tất yếu",
    "Ô tô",
    "Ma cà rồng",
    "Chim chích bông",
    "Yên bình",
    "Kéo cưa ngựa xẻ",
    "Nhà chọc trời",





];

let Image = function () {
    this.index = 0;

    this.increaseIndex = function () {
        if (this.index >= 0 && this.index < images.length -1) {
            this.index++;
        } else {
            this.index = 0;
        }
    };

    this.setImage = function (src) {
        this.image = src;
    };

    this.getImage = function () {
        return this.image;
    };

    this.changeImage = function () {
        this.increaseIndex();
        this.setImage(images[this.index]);
        document.getElementById("img").src = this.getImage();
    }

};

let Answer = function () {

    this.setAnswer = function () {
        this.answer = document.getElementById("input").value;
    };

    this.getAnswer = function () {
        return this.answer;
    };

    this.check =  function () {
        this.setAnswer();
        if (this.answer === answers[image.index]) {
            document.getElementById('amthanhdung').play()
            alert("Xuất sắc");
            image.changeImage();
            point.increasePoint();
            point.getPoint();
            point.getPointColor();
            point.resetPoint();
            document.getElementById("input").value = null;
            if (image.index === 0 ) {
                document.getElementById('yeah').play()
                alert("Bạn đã thắng cuộc");
            }
        } else if (this.answer === "") {
            alert("Bạn chưa nhập câu trả lời!");
        } else {
            document.getElementById('amthanhsai').play()
            alert("Sai mất rồi!");
            document.getElementById("input").value = null;
        }
    }
};

let Point = function () {
    this.point = 0;

    this.increasePoint = function () {
        this.point += 10;
    };

    this.getPoint = function () {
        return document.getElementById("point").innerHTML = "Điểm của bạn: " + this.point;
    };

    this.getPointColor = function () {
        document.getElementById("point").style.color = "black";
        document.getElementById("point").style.fontSize = "40px";
    };

    this.resetPoint = function () {
        if (image.index === 0) {
            this.point = 0;
            document.getElementById("point").innerHTML = "Điểm của bạn: ";
        }
    }

};


let image = new Image();
let answer = new Answer();
let point = new Point();