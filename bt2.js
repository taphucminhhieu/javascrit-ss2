//lấy dữ liệu
const quantity_book = Number(prompt("Số lượng sách .")) ;

//xuất dữ liệu sách
console.log("Số lượng sách có trong thư viện: ",quantity_book);

//xét trường họp
if (quantity_book < 10) {
    console.log("Thư viện có ít sách.");
} else if( 10 < quantity_book < 20) {
    console.log("Thư viện có sô lượng sách vừa đủ.");
} else if(quantity_book > 20){
    console.log("Thư viện có nhiêu sách.");
}