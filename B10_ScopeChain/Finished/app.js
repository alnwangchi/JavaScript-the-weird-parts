function a() {

    // b function 在 a 被執行的時候才會被創建
    function b() {
        console.log(myVar);
    }
    
	b();
}

var myVar = 1;
// a();

function cc() {
    console.log(vava);
}

function dd() {
    let vava = 2
    cc()
}

let vava = 1
dd()

// 因為 cc 是定義在全域的地方，他的外層參照就是全域，所以當執行時內部找不到變數則往外至全域而非 dd ㄋ