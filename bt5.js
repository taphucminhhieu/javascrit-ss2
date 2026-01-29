//nhập dữ liệu
const name_book = prompt("Tên sách.");
const status_book = prompt("Trạng thái sách. ");
const year_book = Number(prompt("Năm xuât bản ."));

//xuất màn
console.log("Tên sách: ",name_book);
console.log("Trạng thái sách ",status_book);
console.log("Năm xuất bản ",year_book);

//dữ liệu
let year = new Date().getFullYear();
let time_5year = year - 5;
let time_10year = year -10;


//xét điều kiện  trạng thái sách 
if ( status_book === "có sẵn" && year_book >= time_5year) {
    console.log("Sách này mới và có sẵn để mượn.");
} else if( status_book === "dã mượn" && year_book >= time_10year ) {
    console.log("Sách này đã mượn nhưng khá mới có thể mượn lại sau. ");
} else if ( status_book ==="đã mượn" && year_book < time_10year ) {
    console.log("Sách này đã mượn và khá cũ.");
} else if( status_book === "có sẵn" &&  year_book < time_5year) {
    console.log("Sách này có sẵn nhưng đã lâu năm.")
}