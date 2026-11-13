/*
    String Methods
    .length : tinh do dai cua string
    .trim(): 
    .includes(): 
    .indexOf()
    .toLowerCase()
    .toLocaleUpperCase()
    .replace() / .replaceAll()

    .slice()
    .split()

    Number
    .toFixed(): lam tron so thap phan, tra ve string
    Math.random()
    Math.floor()
    Math.ceil()
    Math.round()





*/


const tenSanPham = 'Ao So Mi'


const matKhauKhongHopLe = '12345'

// Condition
const viPhamDoDai = (matKhauKhongHopLe.length < 8 || matKhauKhongHopLe.length > 16)

// => true
if(viPhamDoDai){
    console.log('Loi mat khau khong du dai')
}

// => 5
console.log(`Do dai cua mat khau : ${matKhauKhongHopLe.length}`)




///////////////////////////////////////

const tuKhoaTimKiem = 'iPhone 17'
const tieuDeSanPhamUI = 'Apple iPhone 17 Pro Max'

// => true
const coChuaTuKhoa = tieuDeSanPhamUI.toLowerCase().includes(tuKhoaTimKiem.toLowerCase())

// => true
if(coChuaTuKhoa){
    console.log('Co chua tu khoa')
}

const tuKhoaTimKiemLowerCase = tuKhoaTimKiem.toLowerCase()
const tieuDeSanPhamUILowerCase = tieuDeSanPhamUI.toLowerCase()
const coChuaTuKhoaNew = tuKhoaTimKiemLowerCase.includes(tieuDeSanPhamUILowerCase)

// trim() : remove white space
const tenNguoiDungUI = ' Nguyen Van A '
const tenDaTrim = tenNguoiDungUI.trim()
const tenNguoiDungMongDoi = 'Nguyen Van A'

console.log(`Ten da trim: ${tenDaTrim}`)

console.log(tenNguoiDungMongDoi.toLowerCase().includes(tenDaTrim.toLowerCase()))

// replace()
const giaTienThucTeUI = 'Gia niem yet : 1,250.99 USD'

// 1250.99 <-- expected

const chuoiDaLamSachPhanGiaNiemYet = giaTienThucTeUI.replace('Gia niem yet :','')
const chuoiDaLamSachPhanUSD = chuoiDaLamSachPhanGiaNiemYet.replace('USD','')
const chuoiDaLamSachDauPhay = chuoiDaLamSachPhanUSD.replace(',','')
console.log(chuoiDaLamSachDauPhay)

//
const dateString = '2025-12-25'

// format Date: 2025/12/25

console.log(dateString.replaceAll('-','/'))




///////////
const breadCrumbText = 'Trang Chu > Dien Thoai > Apple'

const breadCrumbArray = breadCrumbText.split(' > ') // => ['Trang Chu', 'Dien Thoai', 'Apple']
console.log(breadCrumbArray)
console.log(breadCrumbArray.length)


///////////
// indexOf()
const tieuDe = 'Automation Testing that thu vi'

const viTri = tieuDe.indexOf('Testing')

console.log(`Tu Testing bat dau o vi tri: ${viTri}`)
// 11


const urlHienTai = 'https://example.com/login?status=success'

const ketQuaTimKiem = urlHienTai.indexOf('error')

console.log(`Ket qua cua indexof ${ketQuaTimKiem}`)

if (ketQuaTimKiem === -1){
    console.log('URL ko chua tham so loi, dang nhap thanh cong')
}else{
    console.log('Dang nhap thanh cong')
}


// slice: nhan 2 doi so(vi tri bat dau, vi tri ket thuc)

// ?id=ORD-987654-2025& => ORD-987654-2025
const urlTrangThanhCong = 'https://example.com/order-success?id=ORD-987654-2025&status=paid'

const viTriBatDau = urlTrangThanhCong.indexOf('id=') + 3

const viTriKetThuc = urlTrangThanhCong.indexOf('&status')

const maDonHang = urlTrangThanhCong.slice(viTriBatDau, viTriKetThuc)

console.log(`Ma don hang la ${maDonHang}`)

// Cach 2
const phanSauDauBang = urlTrangThanhCong.split('=')


// (3) ['https://example.com/order-success?id', 'ORD-987654-2025&status', 'paid']
console.log(phanSauDauBang)

// lay phan tu 2, split

const maDonHang1 = phanSauDauBang[1].split('&')[0]

console.log(maDonHang1)

//////////////////////////

// Number

// Round down
console.log(Math.floor(4.99)) //4

// Round up
console.log(Math.ceil(4.01))  //5

// Round
// Neu phan thap phan >=5

console.log(Math.round(4.7)) // 5
console.log(Math.round(4.49))  // 4


// Return random number between 0<= and <1
console.log(Math.random())
// 0.5345

// Tao so nguyen tu 0 den max
max = 10

const soNgauNhien = Math.floor(Math.random() * (max + 1))
// Math.floor(Math.random() * (max + 1))

Math.random() // tra ve so ngau nhien 0<= n < 1

// gia tri nho nhat : 0 * 101 = 0
// gia tri lon nhat: 0.9999 * 101 = 100.999

///////////////////////////////////

// Tao so nguyen tu min => max
// 50-100

min = 1
const randomNumber = Math.floor(Math.random()* (max-min+1)  + min)

console.log(randomNumber)

///////////////////////////////////
// Random number: 50 => 55 => Result = 50,51,52,53,54,55

// length = 55 - 50 + 1 = 6

// Math.random()*length => 0 to 5.9999
// Math.floor => 0,1,2,3,4,5

//0 + 50 = 50
//1 + 50 = 51


///////////////////////////
const tamTinhTextUI = 'Tam tinh: 1,250,500,75 VND'
const tongCongTextUi = 'Tong cong (da giam): 1,250,450,75 VND'

// Convert message: => 1250500.75 VND => 1125045075
let tamTinh = tamTinhTextUI.replaceAll(',','').replace(' VND','').replace('Tam tinh: ','')
console.log(tamTinh)
let tongCong = tongCongTextUi.replaceAll(',','').replace(' VND','').replace('Tong cong (da giam): ','')
console.log(tongCong)

// Math.random() tao user ngau nhien dang tester_ + 4 chu so(tester_8212)

const randomNumberAuto = Math.floor(Math.random()* (9999-1000+1)  + 1000)
console.log(`tester_${randomNumberAuto}`)

// A B testing
// userId chan vao giao dien B, userId le vao giao dien A

const userIdChan = 84322
const userIdLe = 84321

const soDu = userIdChan % 2

if(soDu === 0){
    console.log('Giao dien B')
}else{
    console.log('Giao dien A')
}

// Ep chuoi
const soLuongKeo = 5
const soLuongBang = 5

console.log(`Tong so: ${soLuongBang + soLuongKeo}, type of: ${typeof(soLuongBang + soLuongKeo)}`)


const donGiaText = "25000"
const phiShip = "10000"

console.log(`Tong tien ${donGiaText + phiShip}, type of: ${typeof(donGiaText)}`)


const chieuRongText = '350px'
chieuRongText.replace('px','')


const soLuongText = '15 san pham'
console.log(parseInt(soLuongText)) // => 15

const giaTienText = '$29.99 USD'
const giaTien = giaTienText.replace('$','')
console.log(parseFloat(giaTien))

// number
const tongTienText = 'Tong thanh toan: 2,540,000.50 VND'
const chuoiDaLamSach = tongTienText.replace('Tong thanh toan: ','').replace('VND','').replaceAll(',','')

const chuoiNumber = Number(chuoiDaLamSach)
console.log(chuoiNumber)


// Step to clean data
//1. Lau du lieu tho tu UI
//2. So che du lieu bang cac phuong thuc chuoi
//3. Ep kieu bang phuong thuc phu hop
//4. Thuc hien tinh toan tu buoc 3

// NaN: not a number
// ep kieu that bai
// thuc hien phep toan bat kha thi (vo nghia)


let ketQuaTinhToan = parseInt('abc')
console.log(Number.isNaN(ketQuaTinhToan)) //=> true


const tonKhoText1 = 'Ton kho: 25'
const tonKhoText2 = 'Ton kho: het hang'

function kiemTraVaHanhDong(inputText){
    console.log(`Dang xu ly chuoi ${inputText}`)

    // B2. So che va ep kieu
    const chuoiSo = inputText.replace('Ton kho: ','')

    const soLuong = parseInt(chuoiSo)

    //
    if(Number.isNaN(soLuong)){
        console.log('San pham het hang, bo qua hanh dong them vao gio hang')
    }
    else{
        console.log(`So luong hang ton: ${soLuong}`)
        if(soLuong > 0){
            console.log('Thuc hien hanh dong them vao gio hang')
        }
    }

}

console.log('Kich ban 1: con hang')
kiemTraVaHanhDong(tonKhoText1)

console.log('Kich ban 2: het hang')
kiemTraVaHanhDong(tonKhoText2)


////////////////////////
// Assignment operator: += -+ *= /=
let x = 10


let soTestCaseFail = 0

// Lan dau test 1 login fail
soTestCaseFail += 1

console.log(soTestCaseFail)

// Increment/ Decrement operator
//   x++

let thuTuVeXemPhim = 10
let veHienTai = thuTuVeXemPhim++

console.log(`Ve hien tai bay gio dang la so: : ${veHienTai}`)

console.log(`Thu tu bay gio la ${thuTuVeXemPhim}`)

// ++x
let thuTuVeXemPhim1 = 10
let veHienTai1 = ++thuTuVeXemPhim1

console.log(`Ve hien tai bay gio dang la so: : ${veHienTai1}`)

console.log(`Thu tu bay gio la ${thuTuVeXemPhim1}`)

////
let soLanClick = 0

console.log('Da click lan dau tien')
// soLanClick++
++soLanClick

console.log(`Tong so lan da click ${soLanClick}`)

///////
let attempts = 0
const MAX_ATTEMPTS = 3

function performClickWithRetry(){
    console.log(`Bat dau thuc hien click, lan thu:  ${attempts++}`)

    const isSuccess = false

    if(!isSuccess){
        if(attempts++ >= MAX_ATTEMPTS){
            console.log(`Da thu ${attempts} va van that bai. Dung lai`)
        }
        else{
            console.log(` Click that bai, so lan da thu ${attempts}`)
        }
    }
}

performClickWithRetry()
performClickWithRetry()
performClickWithRetry()
performClickWithRetry()
performClickWithRetry()

