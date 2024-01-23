function Book(author, name) {
    this.author = author;
    this.name = name;
}
let books = [
    new Book("Nguyễn Khuyến", "Xa khơi"),
    new Book("Nam Cao", "Lão Hạc"),
    new Book("Kim Lân", "Vợ Nhặt"),
    new Book("Tô Hoài", "Vợ chồng A Phủ"),
];
let authorName =prompt("Nhập tên tác giả: ");

let isFalg = false;
for( let i=0; i<books.length; i++){
    if(books[i].author === authorName){
        console.log(books[i]);
        isFalg = true;
    }
}
if(!isFalg){
    console.log("Không tìm thấy sách");
}