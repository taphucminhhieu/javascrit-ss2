// sự khác nhau giữa những toán tử so sánh == và ===
//toán tử so sanh "==": chỉ so sanh về mặt tổng quát;
// toán tử so sánh "===": chỉ so sánh về mặt giá trị

const variable_1 = 10 ; //type: number

const variable_2 = "10";// type : string

console.log("khi so sanhs voiws == : ",variable_1 == variable_2);

console.log("khi so sánh với ===: ", variable_1 === variable_2);

console.log("khi kieemr tra voi != ", variable_1 != variable_2); //false

console.log("khi kieemr tra voi !== ", variable_1 !== variable_2); //false

// câu lệnh điều kiện
// 1. nếu chỉ có 1 điều kiện (IF)
const myAge = 18
if (myAge >=18){
    console.log("đủ tuổi lái xe.");
} 
// 2. nếu có 2 điều kiện (IF-ELSE)
if(myAge){
    console.log("đủ tuổi lái xe.");
}else{
    console.log("chưa đủ tuổi lái xe .");
}
// trên 2 điều kiện

//if(){

//}else if(){

//} else{

//}

//khi nào dùng if-else if-else: khi điều kiện "nằm trong khoảng "

// Câu lệnh switch - case
const day= 2;

switch (day) {
    case 2:
        console.log("Thứ 2");
        break;
    case 3:
        console.log("Thứ 3");
        break;
    case 4:
        console.log("Thứ 4");
        break;
    case 5:
        console.log("Thứ 5");
        break;
    case 6:
        console.log("Thứ 6");
        break;
    case 7:
        console.log("Thứ 7");
        break;
    case 8:
        console.log("Chủ nhật");
        break;
    default:
        break;
}