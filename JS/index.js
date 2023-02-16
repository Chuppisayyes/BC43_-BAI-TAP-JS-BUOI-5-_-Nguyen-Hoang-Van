// Bài 1: Quản lý tuyển sinh
    function quanLyTuyenSinh(){
    // Input: diemChuan:number, diemMonThi-1:number, diemMonThi-2:number, diemMonThi-3:number, khuVuc: string , doiTuongDuThi: number, diemTongKet:number, diemUuTien:number
    var diemChuan = Number(document.getElementById('diem-chuan').value);
    var diemMonThi1 = Number(document.getElementById('diemMonThi-1').value);
    var diemMonThi2 = Number(document.getElementById('diemMonThi-2').value);
    var diemMonThi3 = Number(document.getElementById('diemMonThi-3').value);
    var khuVuc = document.getElementById('khu-vuc').value;
    var doiTuongDuThi = document.getElementById('doi-tuong').value;
    // Output: diemTongKet:number, diemUuTien:number
    var diemTongKet = 0;
    var diemUuTien = 0;
    // Process:
    switch (khuVuc) {
        case 'A':
            khuVuc = 2;
            break;
        case 'B':
            khuVuc = 1;
            break;
        case 'C':
            khuVuc = 0.5;
            break;
        case 'D':
            khuVuc = 0;
            break;
        default:
            break;
    }
    switch (doiTuongDuThi) {
        case '1':
            doiTuongDuThi = 2.5;
            break;
        case '2':
            doiTuongDuThi = 1.5;
            break;
        case '3':
            doiTuongDuThi = 1;
            break;
        case '4':
            doiTuongDuThi = 0;
            break;
        default:
            break;
    }
    diemUuTien = khuVuc + doiTuongDuThi;
    diemTongKet = diemMonThi1 + diemMonThi2 + diemMonThi3 + diemUuTien;
    if (diemMonThi1 == 0 || diemMonThi2 == 0 || diemMonThi3 == 0) {
        document.getElementById('ket-qua-bai-1').innerHTML = '<br>' + 'Tổng Điểm: ' + diemTongKet + ' - ' + 'Thí sinh TRƯỢC trúng tuyển';
    }
    else if (diemTongKet >= diemChuan) {
        document.getElementById('ket-qua-bai-1').innerHTML = '<br>' + 'Tổng Điểm: ' + diemTongKet + ' - '  + 'Thí sinh Đã trúng tuyển';
    }
    else {
        document.getElementById('ket-qua-bai-1').innerHTML = '<br>' + 'Tổng Điểm: ' + diemTongKet + ' - ' + 'Thí sinh TRƯỢC trúng tuyển';
    }
}


// Bài 2 : Tính tiền điện
    function tinhTienDien() {
    // Input: hoTen (string); soKwDien(number)
    var hoTen = document.getElementById('name').value;
    var soKwDien = Number(document.getElementById('so-kw').value);
    // Output: tienTra(number)
    var tienTra = 0;
    // Process
    if (soKwDien < 0) {
        document.getElementById('ket-qua-bai-2').innerHTML = 'Vui lòng nhập lại với số Dương!';
    } else if (soKwDien < 50) {
        tienTra = soKwDien * 500;
    } else if (soKwDien < 100) {
        tienTra = (soKwDien - 50) * 650 + 50 * 500;
    } else if (soKwDien < 200) {
        tienTra = (soKwDien - 100) * 850 + 50 * 500 + 50 * 650;
    } else if (soKwDien < 350) {
        tienTra = (soKwDien - 200) * 1100 + 50 * 500 + 50 * 650 + 100 * 850;
    } else {
        tienTra = (soKwDien - 350) * 1300 + 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100;
    }
    document.getElementById('ket-qua-bai-2').innerHTML = hoTen + ' - Tiền Điện: ' + (tienTra).toLocaleString() + ' đ';
}


// Bài 3 : Tính Thuế Thu nhập cá nhân
    function tinhTienThue(){
    // Input: hoTen (string), tongThuNhap (number), soNguoiPhuThuoc (number)
    var hoTen = document.getElementById('name').value;
    var tongThuNhap = Number(document.getElementById('tong-thu-nhap').value);
    var soNguoiPhuThuoc = Number(document.getElementById('so-nguoi-phu-thuoc').value);
    // Output: tienThue (number), thuNhapChiuThue (number)
    var tienThue = 0;
    var thuNhapChiuThue = 0;
    // Process:
    thuNhapChiuThue = tongThuNhap - 4 - soNguoiPhuThuoc*1.6;
    if(thuNhapChiuThue < 1){
        tienThue = 0 ;
    }else if(thuNhapChiuThue <= 60){
        tienThue = thuNhapChiuThue * 0.05;
    } else if ( thuNhapChiuThue <= 120){
        tienThue = thuNhapChiuThue * 0.1;
    } else if ( thuNhapChiuThue <= 210){
        tienThue = thuNhapChiuThue * 0.15;
    } else if ( thuNhapChiuThue <= 384){
        tienThue = thuNhapChiuThue * 0.2;
    } else if ( thuNhapChiuThue <= 624){
        tienThue = thuNhapChiuThue * 0.25;
    } else if ( thuNhapChiuThue <= 960){
        tienThue = thuNhapChiuThue * 0.3;
    } else {
        tienThue = thuNhapChiuThue * 0.35;
    }
    document.getElementById('ket-qua-bai-3').innerHTML = hoTen + '<br>' + 'Tiền Thuế Thu Nhập Cá Nhân: ' + (tienThue*1000000).toLocaleString() + ' VND';
}

// Bài 4: Tính tiền Cáp
function themTheInput(){
    var x = document.getElementById('mySelect').value;
    if ( x === 'doanhNghiep'){
        document.getElementById('themTag').innerHTML = '<span>Số Kết Nối: </span>' +    '<input type="number" placeholder="Vui lòng Nhập!" id="so-ket-noi"></input>';
    } else{
        document.getElementById('themTag').innerHTML = '';
    }
}
function tinhTienCap(){
    // Input: loaiKhachHang(string), maKhachHang(string), soKenhCaoCap(number), soKetNoi (number)
    var loaiKhachHang = document.getElementById('mySelect').value;
    var maKhachHang = document.getElementById('ma-khach-hang').value;
    var soKenhCaoCap = Number(document.getElementById('so-kenh-cao-cap').value);
    // Output: tienCap(number)
    var tienCap = 0;
    if( loaiKhachHang === 'nhaDan' && soKenhCaoCap > 0){
        tienCap = 4.5 + 20.5 + 7.5*soKenhCaoCap;
    } else {
        var soKetNoi = Number(document.getElementById('so-ket-noi').value);
        if ( soKetNoi < 10 && soKenhCaoCap > 0){
            tienCap = 15 + 75 + 50*soKenhCaoCap;
        }
        else if (soKenhCaoCap > 0) {
            tienCap = 15 + 75 + (soKetNoi-10)*5 + 50*soKenhCaoCap;
        }
    }
    document.getElementById('ket-qua-bai-4').innerHTML = maKhachHang + '<br>' + 'Tiền Cáp : ' + tienCap.toFixed(2) +'$';
}
