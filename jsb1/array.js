var x = "nhaxanh";
var array1 = ["hello", 12, x, [12, 24], { ho: 'vu', ten: 'thien' }];
var array2 = array1[3];//tạo biến trung gian để lấy con của phần tử 
console.log(array2[1]);//in ra con của phần tử 
console.log(array1[3][0]);//viet tat lay gia tri phan tu
console.log(x.length);//đếm số lượng phần tử
console.log(array1[array1.length - 2]);//lấy phần tử cuối cùng 
console.log(array1[0]);//in ra phần tử trong array