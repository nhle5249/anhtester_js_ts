// String

const matKhauKhongHopLe = '12345'

const viPhamDoDai = (matKhauKhongHopLe.length < 8 || matKhauKhongHopLe.length > 16)

if(viPhamDoDai){
    console.log('Loi mat khau khong du dai')
}

// => 5
console.log(`Do dai cua mat khau : ${matKhauKhongHopLe.length}`)




///////////////////////////////////////

const tuKhoaTimKiem = 'iPhone 17'
const tieuDeSanPhamUI = 'Apple iPhone 17 Pro Max'

const coChuaTuKhoa = tieuDeSanPhamUI.toLowerCase().includes(tuKhoaTimKiem.toLowerCase())

if(coChuaTuKhoa){
    console.log('Co chua tu khoa')
}


// trim
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