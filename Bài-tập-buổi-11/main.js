// Bài 1: Khai báo biến và tính tổng
// Khai báo 2 biến a và b chứa 2 số bất kỳ. Tính và in ra màn hình:

// Tổng (a + b)

// Hiệu (a - b)

// Tích (a * b)

// Thương (a / b)

let a = 5;
let b = 1;

console.log("Tổng (a + b) = ", a + b);
console.log("Hiệu (a - b) = ", a - b);
console.log("Tích (a * b) = ", a * b);
console.log("Thương (a / b) = ", a / b);

// Bài 2: Tính diện tích và chu vi hình chữ nhật

let chieuDai = 5;
let chieuRong = 2;

console.log("Diện tích:", chieuDai * chieuRong);
console.log("Chu vi:", (chieuDai + chieuRong) * 2);

// Bài 3: Toán tử chia lấy dư (%)

let soN = 1234567;
console.log("Chia dư cho 2: ", soN % 2);

// Bài 4: Đổi độ C sang độ F và toán tử gán rút gọn

let doC = 27;
let doF = (doC * 9) / 5 + 32;
console.log("Độ F khi chưa tăng độ C là:", doF);

doC += 5;
doF = (doC * 9) / 5 + 32;

console.log("Độ C =", doC);
console.log("Độ F =", doF);

// Bài 5: Bài toán tổng hợp - Tính tiền điện
// Số Kwh luôn > 100

let soKwh = 369;
let over = soKwh - 100;

console.log("Tiền điện:", over * 2000 + 100 * 1500);
