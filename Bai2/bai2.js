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
