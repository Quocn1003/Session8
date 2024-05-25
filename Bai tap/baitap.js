
let chon = parseInt(prompt("Chọn bài tập (1-10): "));
while(chon<1 || chon>10){
    chon = parseInt(prompt("Chọn bài tập (1-10): "));
}
switch (chon) {
  case 1:
    let age = parseInt(prompt("Nhập số tuổi: "));
    while(age<1){
        age = parseInt(prompt("Nhập số tuổi: "));
    }
    if(age>=18){
        console.log("Bạn đã đủ 18 tuổi");
    }else{
        console.log("Bạn chưa đủ 18 tuổi!");
    }
    break;
  case 2:
    var hour = parseInt(prompt("Nhập số giờ trong ngày(0-23): "));
    while(hour<0||hour>23){
        hour = parseInt(prompt("Nhập số giờ trong ngày(0-23): "));
    }
    if(hour<18){
        console.log("Good day!");
    }else{
        console.log("Good evening!");
    }
    break;
  case 3:
    var hour = parseInt(prompt("Nhập số giờ trong ngày(0-23): "));
    while(hour<0||hour>23){
        hour = parseInt(prompt("Nhập số giờ trong ngày(0-23): "));
    }
    if(hour<10){
        console.log("Good Morning!");
    }else if(hour<20){
        console.log("Good day!");
    }else{
        console.log("Good evening!");
    }
    break;
  case 4:
    var n=parseInt(prompt("Nhập vào một số: "));
    if(n%2==0){
        console.log(`${n} là số chẵn.`);
    }else{
        console.log(`${n} là số lẻ.`);
    }
    break;
  case 5:
    var n=parseInt(prompt("Nhập vào một số: "));
    switch (n%2) {
        case 0:
            console.log(`${n} là số chẵn.`);
            break;
        default:
            console.log(`${n} là số lẻ.`);
            break;
    }
    break;
  case 6:
    let color=prompt("Nhập màu (xanh, đỏ, vàng): ").toLowerCase();
    switch (color) {
        case "xanh":
        case "đỏ":
        case "vàng":
            console.log(`Bạn nhập màu ${color}`);
            break;
        default:
            console.log("Nhập không hợp lệ!");
            break;
    }
    break;
  case 7:
    let x=parseInt(prompt("Nhập vào một số nguyên: "));
    if (x==0) {
        console.log(`${x} có giá trị là 0`);
    } else if(x>0){
        console.log(`${x} là số nguyên dương`);
    }else{
        console.log(`${x} là số nguyên âm`);
    }
    break;
  case 8:
    let kg=Number(prompt("Nhập cân nặng(kg): "));
    while (kg<1){
        kg=Number(prompt("Nhập cân nặng(kg): "));
    }
    let m=Number(prompt("Nhập chiều cao(m): "));
    while (kg<1){
        m=Number(prompt("Nhập chiều cao(m): "));
    }
    let bmi=kg/Math.pow(m,2);
    if (bmi< 18.5 ) {
        console.log("Cân nặng thấp(gầy)");
    } else if(bmi >= 18.5 && bmi < 24.9) {
        console.log("Bình thường");
    }  else  if(bmi >= 25 && bmi < 29.9){
        console.log("Tiền béo phì");
    } else if(bmi >= 30 && bmi < 35.9){
        console.log("Béo phì độ I");
    } else if(bmi >= 35 && bmi < 39.9){
        console.log("Béo phì độ II");
    }else{
        console.log("Béo phì độ III");
    }
    break;
  case 9:
    let toan = Number(prompt("Nhập điểm môn Toán:"));
    let li = Number(prompt("Nhập điểm môn Lí:"));
    let hoa = Number(prompt("Nhập điểm môn Hóa:"));
    let van = Number(prompt("Nhập điểm môn Văn:"));
    let su = Number(prompt("Nhập điểm môn Sử:"));
    let dia = Number(prompt("Nhập điểm môn Địa:"));

    let avg = (toan + li + hoa + van + su + dia) / 6;
    console.log("Điểm trung bình = " + avg.toFixed(2));
      
    if (avg >= 8.0 && avg < 10) {
        console.log("Xếp loại: GIỎI");
    } else if (avg >= 6.5 && avg < 7.9) {
        console.log("Xếp loại: KHÁ");
    } else if (avg >= 5.0 && avg < 6.4) {
        console.log("Xếp loại: TRUNG BÌNH");
    } else {
        console.log("Xếp loại: YẾU");
    }
    break;
  default:
    let month=parseInt(prompt('Nhập số tháng trong năm(1-12):'));
    while(month<1||month>12){
        month=parseInt(prompt('Nhập số tháng trong năm(1-12):'));
    }
    switch (month) {
        case 2:
            let year = parseInt(prompt("Nhập vào 1 năm:"));
            while(year<1){
                year = parseInt(prompt("Nhập vào 1 năm:"));
            }
            let checkNamNhuan = (year % 4 == 0 && year % 100 !==0) || year % 400 ==0;
            console.log(`${year} là năm nhuận: ${checkNamNhuan}`);
            if (checkNamNhuan) {
                console.log("Tháng 2 năm " + year + " có 29 ngày");
            } else {
                console.log("Tháng 2 năm " + year + " có 28 ngày");
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:   
            console.log(`Tháng ${month} có 30 ngày`);
            break;
        default:
            console.log(`Tháng ${month} có 31 ngày`);
            break;
    }
    break;
}
