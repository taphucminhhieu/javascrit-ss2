//nhập dữ liệu
const name_book = prompt("Tên sách");
const name_user = prompt("Tên người dùng");
const library_card = prompt("Thẻ thư viện");
const status_book = prompt("Tình trạng sách");
const number_of_days_borrowed = Number(prompt("Số ngày mượn"));

//xuất màn
console.log("Tên sách " ,name_book);
console.log("Tên người mượn " ,name_user);
console.log("Thẻ thư viện: ",library_card);
console.log("Trạng thái sách ",status_book);
console.log("số ngày mượn ",number_of_days_borrowed);

//điều kiện kiểm tra các tình huống
if (status_book === "có sẵn" && library_card === "có thẻ" ) {
    console.log("Chúc mừng bạn có thể mượn sách này.");
} 
else if (status_book === "đã mượn" && number_of_days_borrowed < 30) { 
    if (library_card === "có thẻ") {
        console.log("Sách đang được mượn, vui lòng đợi đến khi trả lại.");
    } else {
        console.log("Bạn không thể mượn sách nếu không có thẻ thư viện.");
    }
} else if ( status_book === "không có sẵn" ){
    console.log("Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau.")
} else {
    console.log("Thông tin không hợp lệ.");
}
