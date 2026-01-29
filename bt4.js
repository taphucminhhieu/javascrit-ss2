//nhập thông tin
const name_book = prompt("Tên sách.");
const name_user = prompt("Tên người mượn.");
const level_of_liking = prompt("Mức độ yêu thích.")

//xuất trong
console.log("Têm sách :",name_book);
console.log("Tên người mượn : ",name_user);
console.log("Mức độ yêu thích: ",level_of_liking);

//điều kiện xác định mức độ yêu thích
switch (level_of_liking) {
    case "1": case "2":
        console.log("Sách này bạn có thể cân nhắc mượn lại sau");
        break;
    case "3":
        console.log("Sách này khá ổn, có thể mượn");
        break;
    case "4": case "5":
        console.log("Đây là cuốn sác yêu thích của bạn, hãy đọc ngay!");
        break;

    default:
        break;
}