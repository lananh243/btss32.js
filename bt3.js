let stu = [];
let numberOfStudent =prompt("Nhập số lượng sinh viên: ");
for(let i=0; i<numberOfStudent; i++){
    let id =prompt("Nhập ID sinh viên thứ " +(i+1));
    let name =prompt("Nhập tên sinh viên thứ " +(i+1));


    let student = {
    id: id,
    name: name,
    };

    stu.push(student);
}
console.log("Danh sách sinh viên:");
console.log(stu);