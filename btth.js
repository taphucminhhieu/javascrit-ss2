//nhập dữ liệu
let name_user = prompt("Tên người dùng: VD: ");
let role = prompt("Vai trò: ");
let Card_account_balance = Number(prompt("Số dư tài khoản thẻ: "));
let status_card_libraly = prompt("trạng thái thẻ thư viện ");
let overdue_date_for_returning_books = Number(prompt("Số ngày quá hạn trả sách: "));
let fine_amound = 0


//xuát thẻ trong 
console.log("Tên người dùng: ",name_user,);
console.log("Vai trờ: ",role);
console.log("Số dư tài khoản thẻ: ",Card_account_balance);
console.log("Trạng thái thẻ thư viện: ",status_card_libraly);
console.log("số ngày quá hạn trả sách: ",overdue_date_for_returning_books);

//điều kiện: quyền truy cạp dựa vào vai trò
switch (role) {
    case "admin":
        console.log("Chào Admin, bạn có toàn quyền hệ thống.");
        break;
    case "student":
        console.log("Chào sinh viên, bạn có thể mượn sách."); 
        break;
    case "guest":
        console.log("Chào khách, bạn chỉ có thể đọc tại chỗ"); 
        break;   
    default:
        console.log("Lỗi: Vai trò không hợp lệ!");
        break;
}
//đièu kiện mượn sách
let pow = "không được phép mượn sách";
let balance = 100000;
if (name_user && balance > 0 && status_card_libraly === "true") {
      console.log("được phép mượn sách");g
      pow =("xác nhận : được phép muọn sách")
}

//điều kiện: tính phí phạt trả muộn dựa vào sso ngày quá hạn
if (overdue_date_for_returning_books <= 0) {
    console.log("Cảm ơn vì bạn đã trả đúng hạn");
} else if(     1 <= overdue_date_for_returning_books && overdue_date_for_returning_books <= 5 ) {
    console.log("Số tiền phạt: ", fine_amound = overdue_date_for_returning_books *5000);
} else if( 6<= overdue_date_for_returning_books && overdue_date_for_returning_books <= 10) {
    console.log("Số tiền phạt: ",fine_amound = overdue_date_for_returning_books * 10000);
} else if( overdue_date_for_returning_books > 10 ){
    console.log("Phạt 200.000đ và TÀI KHOẢN BỊ KHOÁ. ");
}

//định dạng
console.log("--- HỆ THỐNG MƯỢN TRẢ ---");
console.log("Người dùng: ",name_user);
console.log("Quyền hạn: ",role);
console.log("Kết quả mượn: ",pow);

console.log("Tình trạng trả sách: ",overdue_date_for_returning_books);
console.log("Tiền phạt: ",fine_amound + "VNĐ");