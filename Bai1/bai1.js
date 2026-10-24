alert("Hello world I'm nguyen")

console.log('I am javasript')

/*
    Variable
    Declaration, Assignment, Retrieval 

*/ 


let teacherName
teacherName = 'Hoang'

console.log(teacherName)



/*
    Delare variable: let vs const
    let: can replace value
    const: can not replace value 

*/

let diemSo;
diemSo = 8;
console.log(diemSo)

diemSo = 10
console.log(diemSo)


const soPi = 3.14

/*
    Print value to the screen/console log: ' , `
    1. Concat +
    2. Comma ,
    3. Template Literals (backtick `)




*/



const tenTestCase = 'TC01 - Login'

const trangThai = 'Passed'

const thoiGianChay = 3500

console.log('Test case: ' + tenTestCase + ' Status: ' + trangThai + ' Duration: ' + thoiGianChay)




const tenTestCase2 = 'TC02 - Login'

const trangThai2 = 'Failed'

const thoiGianChay2 = 3500

console.log('Test case: ' , tenTestCase2, ' Status: ' , trangThai2 , ' Duration: ' , thoiGianChay2)

const tenTestCase3 = 'TC03 - Registration'

const thoiGianChay3 = 4000

// Template literals (backtick `)

console.log(`Test case : ${tenTestCase3} - Duration:${thoiGianChay3 * 2}`)

// Di sieu thi mua 2 cai ao, moi cai gia 25000 VND. Thue VAT la 10% => hoi tong so tien phai tra la bao nhieu 

const count = 2
const price = 25000
const vat = 0.1

console.log(`${count} cai ao. Tong so tien la ${price*2*0.1 + price*2}`)
console.log(`${count} cai ao. Tong so tien la ${price*2.2}`)


// How to declare variable name 
// camelCase

let tenKhachHang 


// Datatype

// String
let loiChao = 'Xin chao buoi sang'
const tenSach = 'Lap Trinh JS'

console.log(typeof(loiChao))

const userName = 'automation@gmail.com'


let id = 1
const productSelector = `h2:has-id(${id})`


// Number
let tuoi = 30
const PI = 3.14

let ketqua = (tuoi-6) + PI

// Boolean
let denDangBat = true
let daTotNghiep = false

let nutThanhToanVisible = true
if (nutThanhToanVisible){
    console.log('Test Passed')
}
else{
    console.log('Test failed')
}

// Undefined
let abc
console.log(abc) // ==> undefined


// null
// empty

let popupKhuyenMai = null
console.log(typeof(popupKhuyenMai)) // ==> object

if (popupKhuyenMai === null){
    console.log("Khong co khuyen mai")
}