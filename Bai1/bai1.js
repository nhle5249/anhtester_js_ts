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
    2. Comma , : auto add space
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

const thoiGianChay3 = 3500

// Template literals (backtick `)

console.log(`Test case: ${tenTestCase3} - Duration: ${thoiGianChay3 * 2}`)

// Di sieu thi mua 2 cai ao, moi cai gia 25000 VND. Thue VAT la 10% => hoi tong so tien phai tra la bao nhieu 

const count = 2
const price = 25000
const vat = 0.1

console.log(`${count} cai ao. Tong so tien la ${price*2*0.1 + price*2}`)
console.log(`${count} cai ao. Tong so tien la ${price*2.2}`)

const gia1Ao = 25000
const soLuongAo = 2
const thueVAT = 0.1
let tongTienHang = gia1Ao * soLuongAo
let tongThanhToan = tongTienHang + tongTienHang*thueVAT

/*
    How to declare variable name
    1. a-z A-Z 0-9 _ $
    2. Khong duoc bat dau bang so
    3. camelCase
    4. Khong duoc dung tu khoa cua Javascript
    5. Ten dat phai co y nghia

*/

let x = 10
let y = 'Hoang'
let z = x * 2
let soLuong = 10
let tenNguoiDung = 'Hoang'
let diemThuong = soLuong * 2



let tenKhachHang 


// Datatype

// String
let loiChao = 'Xin chao buoi sang'
const tenSach = 'Lap Trinh JS'

console.log(typeof(loiChao))

const userName = 'automation@gmail.com'
const productSelector0 =`h2:has-text("${userName}")`


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

// Undefined: already declared but no value 
let abc
console.log(abc) // ==> undefined


// null : already declared and assigned null value 
// empty

let popupKhuyenMai = null
console.log(typeof(popupKhuyenMai)) // ==> object

if (popupKhuyenMai === null){
    console.log("Khong co khuyen mai")
}