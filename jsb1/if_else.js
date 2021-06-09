
//kiểu khai báo biến
//kiểu so sánh
var tuoi = 15;
if (tuoi < 16) {
     console.log("thiếu nhi");
} else if (tuoi >= 16 && tuoi < 18) {
     console.log(" vị thành niên");
} else if (tuoi >= 18 && tuoi < 20) {
     console.log(" thanh niên");
} else {
     console.log("người lớn");
}


//kiểu dữ liệu số
//false: 0
if (0) {
     console.log("đúng");
} else {
     console.log("sai");
}
//true với số  khác 0
if (122) {
     console.log("đúng");
} else {
     console.log("sai");
}


//kiểu string
//true : string có gái trị
if ("nhà nhà") {
     console.log("đúng");
} else {
     console.log("sai");
}
//false nếu string rỗng 
if ("") {
     console.log("đúng");
} else {
     console.log("sai");
}

//kiểu array
//true : arry rỗng và array có giá trị
if ([]) {
     console.log("đúng");
} else {
     console.log("sai");
}
if ([1, 2]) {
     console.log("đúng");
} else {
     console.log("sai");
}

//kiểu object
//true : object rỗng và obiect có giá trị
if ({}) {
     console.log("đúng");
} else {
     console.log("sai");
}
if ({ ten: "Thiện", }) {
     console.log("đúng");
} else {
     console.log("sai");
}

//undefined && null
//false : khong tìm thấy giá trị
if (undefined) {
     console.log("đúng");
} else {
     console.log("sai");
}
if (null) {
     console.log("đúng");
} else {
     console.log("sai");
}

// false : Sai kiểu dữ liệu (NaN)
if (NaN) {
     console.log("đúng");
} else {
     console.log("sai");
}

//ghép chuỗi
var so = "15";
var string = "21";
console.log(so + string);
//chuyển chữ thành số
console.log(parseInt(string) + 13);
//chia lấy dư (%)
console.log(4 % 3);
//chia hết 
console.log(4 / 2);
//so sánh bằng : về giá trị (==) 
console.log(13 == 15);
console.log(20 == "20");
//so sánh bằng : về kiểu dữ liệu (===)
console.log(15 === "15");
//khác (!=)
console.log(12 != 13);


