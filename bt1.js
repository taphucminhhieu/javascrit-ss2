//nhập dữ liệu vào máy
const name_book = prompt("Tên sách.");
const author_name = prompt("Tên tác giả.");
const year_of_publication = Number(prompt("Năm sản xuất. "));

//dữ liệu
let data_book =  new Date().getFullYear();
let year = data_book -5;

//xuất trong
console.log("Tên tác giả: ",author_name);
console.log("Tên tác phẩm: ",name_book);
console.log("Năm sản xuất: ",year_of_publication);


if (year_of_publication === new Date().getFullYear()) {
    console.log("Đây là sách mới.");
} else if(year_of_publication >= year) {
    console.log("Sách khá mới.");
} else {
    console.log("Sách đã cũ: ");
}