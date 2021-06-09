var x = "10";
var obj1 = {
     ten: "Thiện",
     tuoi: 25,
     que: "Hà Nội",
     arr: [1, 2, [1, 2]],
     bien: x,
     Object: { ho: "vu" },

}
var y = "que";
var obj2 = obj1.Object;
var z = obj1.arr;


//nhận theo logic
console.log(obj1["bien"]);
console.log(z[2][1]);
console.log(obj1[y]);
console.log(z[0]);

//không nhận logic chỉ nhận tên
console.log(obj1.que);
console.log(obj2.ho);