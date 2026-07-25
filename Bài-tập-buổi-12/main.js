// Bài 1 : Kiểm tra số chẵn lẻ và dấu

let n = -12;
if (n === 0) {
  console.log("Số 0");
} else if (n < 0) {
  if (n % 2 === 0) {
    console.log("Số âm chẵn");
  } else {
    console.log("Số âm lẻ");
  }
} else {
  if (n % 2 === 0) {
    console.log("Số dương chẵn");
  } else {
    console.log("Số dương lẻ");
  }
}

// Bài 2 : Đoán giá trị Truthy/Falsy
let a = 0;
let b = 1;
let c = "";
let d = "hello";
let e = null;
let f = undefined;
let g = NaN;
let h = " ";

if (a) {
  console.log("a là truthy");
} else {
  console.log("a là falsy");
}
if (b) {
  console.log("b là truthy");
} else {
  console.log("b là falsy");
}
if (c) {
  console.log("c là truthy");
} else {
  console.log("c là falsy");
}
if (d) {
  console.log("d là truthy");
} else {
  console.log("d là falsy");
}
if (e) {
  console.log("e là truthy");
} else {
  console.log("e là falsy");
}
if (f) {
  console.log("f là truthy");
} else {
  console.log("f là falsy");
}
if (g) {
  console.log("g là truthy");
} else {
  console.log("g là falsy");
}
if (h) {
  console.log("h là truthy");
} else {
  console.log("h là falsy");
}

// Bài 3: Phân loại điểm thi

let score = 0;
if (score < 0 || score > 10) {
  console.log("Điểm không hợp lệ");
} else if (score == 0 || score == "null") {
  console.log("Chưa có điểm");
} else if (score >= 9 && score <= 10) {
  console.log("Xuất sắc");
} else if (score >= 7 && score < 9) {
  console.log("Giỏi");
} else if (score >= 5 && score < 7) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}

// Bài 4: FizzBuzz
for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Bài 5: Kiểm tra số nguyên tố
let num = 5;
let isPrime = true;

for (let i = 2; i <= Math.sqrt(num); i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

if (num < 2 || !isPrime) {
  console.log("Không là số nguyên tố");
} else {
  console.log("Là số nguyên tố");
}
