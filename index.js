//bài 1 ql sinh viên

function xetDiem0(diem1, diem2, diem3) {
    if (diem1 == 0) {
        return "vì điểm môn thứ nhất = 0"
    }
    else if (diem2 == 0) {
        return "vì điểm môn thứ 2 = 0"
    }
    else if (diem3 == 0) {
        return "vì điểm môn thứ 3 = 0"
    }
    else {
        return 0
    }
}

function xetKhuVucUuTien(khuVuc) {
    if (khuVuc == "A" || khuVuc == "a") {
        return 2
    } else if (khuVuc == "B" || khuVuc == "b") {
        return 1
    } else if (khuVuc == "C" || khuVuc == "c") {
        return 0.5
    }
    else {
        return 0
    }
}

function xetDoiTuongUuTien(doiTuong) {
    switch (doiTuong) {
        case 1:
            return 2.5
        case 2:
            return 1.5
        case 3:
            return 1
        case 0:
            return 0
    }
}

document.getElementById("btnBai1").onclick = function () {
    let diemChuan = document.getElementById("diemChuan").value * 1;
    let diemMon1 = document.getElementById("diemMon1").value * 1;
    let diemMon2 = document.getElementById("diemMon2").value * 1;
    let diemMon3 = document.getElementById("diemMon3").value * 1;
    let khuVuc = document.getElementById("khuvuc").value;
    let doiTuong = document.getElementById("doiTuong").value * 1;

    let xetDiem = xetDiem0(diemMon1, diemMon2, diemMon3)

    if (xetDiem == 0) {
        let diemTong = diemMon1 + diemMon2 + diemMon3 + xetKhuVucUuTien(khuVuc) + xetDoiTuongUuTien(doiTuong);
        if (diemTong >= diemChuan) {
            document.querySelector(".hienKetQua1").innerHTML += `<p class="bg-success mt-3 p-3">Điểm của bạn là ${diemTong}<br>Chúc mừng bạn đã đậu</p>`
        } else {
            document.querySelector(".hienKetQua1").innerHTML += `<p class="bg-success mt-3 p-3">Điểm của bạn là ${diemTong}<br>Còn thiếu ${diemChuan - diemTong} nữa mới đậu Chúc may mắn lần sau </p>`
        }
    } else {
        document.querySelector(".hienKetQua1").innerHTML += `<p class="bg-success mt-3 p-3">${xetDiem} nên thôi nhé</p>`
    }
}

// bài 2 tính tiền điện 
function gia50KwDau(soKwDien) {
    return soKwDien * 500
}
function gia50KwKe(soKwDien) {
    return gia50KwDau(50) + (soKwDien - 50) * 650
}
function gia100KwKe(soKwDien) {
    return gia50KwKe(100) + (soKwDien - 100) * 850
}
function gia150KwKe(soKwDien) {
    return gia100KwKe(150) + (soKwDien - 150) * 1100
}
function giaHon200Ke(soKwDien) {
    return gia150KwKe(200) + (soKwDien - 200) * 1300
}

function tinhTienDien(soKwDien) {
    if (soKwDien <= 50) {
        return gia50KwDau(soKwDien)
    } else if (soKwDien <= 100) {
        return gia100KwKe(soKwDien)
    } else if (soKwDien <= 150) {
        return gia150KwKe(soKwDien)
    } else if (soKwDien <= 200) {
        return giaHon200Ke(soKwDien)
    } else {
        return giaHon200Ke(soKwDien)
    }
}

document.getElementById("btnBai2").onclick = function () {
    let soKwDien = document.getElementById("soDienDaDung").value * 1;
    let hoTen = document.getElementById("hoTen").value;

    document.querySelector(".hienKetQua2").innerHTML += `<p class="bg-success mt-3 p-3">Tên người dùng: ${hoTen}<br>Số tiền điện là: ${tinhTienDien(soKwDien).toLocaleString("vi", {
        style: 'currency',
        currency: 'VND',
    })}</p>`
}

// bài 3 tính thuế thu nhập
function thuNhapChiuThue(tongThuNhap, soNguoiPhuThuoc) {
    return tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000;
}

function thueSuat5(thuNhapChiuThue5) {
    return thuNhapChiuThue5 * 5 / 100
}
function thueSuat10(thuNhapChiuThue10) {
    return thueSuat5(60) + (thuNhapChiuThue10 - 60) * 10 / 100
}
function thueSuat15(thuNhapChiuThue15) {
    return thueSuat10(120) + (thuNhapChiuThue15 - 120) * 15 / 100
}
function thueSuat20(thuNhapChiuThue20) {
    return thueSuat15(210) + (thuNhapChiuThue20 - 210) * 20 / 100
}
function thueSuat25(thuNhapChiuThue25) {
    return thueSuat20(384) + (thuNhapChiuThue25 - 384) * 25 / 100
}
function thueSuat30(thuNhapChiuThue30) {
    return thueSuat25(624) + (thuNhapChiuThue30 - 624) * 30 / 100
}
function thueSuat35(thuNhapChiuThue) {
    return thueSuat30(960) + (thuNhapChiuThue - 960) * 35 / 100
}


function thueSuat(thuNhapChiuThue) {
    if (thuNhapChiuThue <= 0) {
        return 0;
    } else if (thuNhapChiuThue <= 60) {
        return thueSuat5(thuNhapChiuThue)
    } else if (thuNhapChiuThue <= 120) {
        return thueSuat10(thuNhapChiuThue)
    } else if (thuNhapChiuThue <= 210) {
        return thueSuat15(thuNhapChiuThue)
    } else if (thuNhapChiuThue <= 384) {
        return thueSuat20(thuNhapChiuThue)
    } else if (thuNhapChiuThue <= 624) {
        return thueSuat25(thuNhapChiuThue)
    } else if (thuNhapChiuThue <= 960) {
        return thueSuat30(thuNhapChiuThue)
    } else {
        return thueSuat35(thuNhapChiuThue)
    }
}

document.getElementById("btnBai3").onclick = function () {
    let hoten = document.getElementById("hoTen").value
    let tongThuNhap = document.getElementById("tongThuNhap").value * 1;
    let soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;

    let thuNhapChuaThue = thuNhapChiuThue(tongThuNhap, soNguoiPhuThuoc)
    let phanTramThue = thueSuat(thuNhapChuaThue / Math.pow(10, 6))
    document.querySelector(".hienKetQua3").innerHTML += `<p class="bg-success mt-3 p-3">Tổng thu nhập chịu thuế là: ${thuNhapChuaThue.toLocaleString("vi", {
        style: 'currency',
        currency: 'VND',
    })}<br>Số tiền thuế phải đóng là : ${(phanTramThue * Math.pow(10, 6)).toLocaleString("vi", {
        style: 'currency',
        currency: 'VND',
    })}`
}


// bài 4 tính tiền cáp

function changeClassGiaDV(idClassMuonDoi, tenClassMuonDoi) {
    let nowClass = document.getElementById(idClassMuonDoi).className
    document.getElementById(idClassMuonDoi).classList.replace(nowClass, tenClassMuonDoi)
}


function unDisable() {

    let noiDung = document.getElementById("loaiKhachHang").value;
    noiDung = noiDung.replace("D", "d")
    noiDung = noiDung.replace("N", "n")
    noiDung = noiDung.replace("ệ", "e")
    noiDung = noiDung.replace("à", "a")
    noiDung = noiDung.replace("â", "a")
    noiDung = noiDung.replace(" ", "")


    if (noiDung == "doanhnghiep") {
        document.getElementById("soKetNoi").disabled = false
        changeClassGiaDV("giaDoanhNghiep", "col-12")
        changeClassGiaDV("giaNhaDan", "d-none")
    } else if (noiDung == "nhadan") {
        document.getElementById("soKetNoi").disabled = true
        document.getElementById("soKetNoi").value = ""
        changeClassGiaDV("giaDoanhNghiep","d-none" )
        changeClassGiaDV("giaNhaDan", "col-12")

    } else {
        document.getElementById("soKetNoi").disabled = true
        document.getElementById("soKetNoi").value = ""
        changeClassGiaDV("giaDoanhNghiep","col-6" )
        changeClassGiaDV("giaNhaDan", "col-6")
    }

}

function giaNhaDan(soKenh) {
    return 4.5 + 20.5 + 7.5 * soKenh;
}

function giaDoanhNghiep(soKenh, soKetNoi) {
    return 15 + 75 + 5 * (soKetNoi) + soKenh * 50;
}

document.getElementById("btnBai4").onclick = function () {
    let maKhachHang = document.getElementById("maKhachHang").value;
    let loaiKhachHang = ""
    let soKenh = document.getElementById("soKenhDangKy").value * 1;
    let soKetNoi = document.getElementById("soKetNoi").value * 1

    let kiemTraLoaiKhachHang = document.getElementById("soKetNoi").disabled

    let tongHoaDon = 0

    if (kiemTraLoaiKhachHang == true) {
        tongHoaDon = giaNhaDan(soKenh);
        loaiKhachHang = "Nhà dân"
    }
    else {
        tongHoaDon = giaDoanhNghiep(soKenh, soKetNoi)
        loaiKhachHang = "Doanh nghiệp"
    }

    document.querySelector(".hienKetQua4").innerHTML += `<p class="bg-success mt-3 p-3">Mã khách hàng: ${maKhachHang}<br>Gói dịch vụ: ${loaiKhachHang}<br> Số kênh đăng kí: ${soKenh}<br>Số kết nối: ${soKetNoi}<br>Tổng hóa đơn: ${tongHoaDon} `

}