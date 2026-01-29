//nhập dữ liệu 
const name_book = prompt("Tên sách .");
const book_genre = prompt("Thể loại sách ");
const book_condition = prompt("Tình trạng sách .");

//xuất trong 
console.log("Tên sách: ",name_book);
console.log("Thể loại sách: ",book_genre);
console.log("tình trạng sách ",book_condition);

//phân loại sách(xét các trường hợp)
if ( book_genre === "Khoa học" || book_genre === "Lịch sử") {
    console.log("sách này có sẵn trong thư viện.");
} else {
    console.log("sách này đã được mượn.");
} if(book_genre === "Văn học" || book_genre ==="Truyện") {
    console.log("Sách có thể đọc giả trí")
}

if (book_condition === "0") {
    console.log("sách đã được mượn");
} else if(book_condition !== "0") {
    console.log("Có sẵn")
}