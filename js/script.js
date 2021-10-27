let ws1 = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');
let btcUsdtElement = document.getElementById('btc-usdt');


ws1.onmessage = (event) => {
    let btcUsdtObject = JSON.parse(event.data);
    btcUsdtElement.innerHTML = '<div>'+btcUsdtObject.s + '  - <span id="price">$' + parseFloat(btcUsdtObject.c).toLocaleString()+'<span><div>';
}

let ws2 = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@ticker');
let ethUsdtElement = document.getElementById('eth-usdt');


ws2.onmessage = (event) => {
    let ethUsdtObject = JSON.parse(event.data);
    ethUsdtElement.innerHTML = '<div>'+ethUsdtObject.s + '  - <span id="price">$' + parseFloat(ethUsdtObject.c).toLocaleString()+'<span><div>';
}


let ws3 = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@ticker');
let bnbUsdtElement = document.getElementById('bnb-usdt');


ws3.onmessage = (event) => {
    let bnbUsdtObject = JSON.parse(event.data);
    bnbUsdtElement.innerHTML = '<div>'+bnbUsdtObject.s + '  - <span id="price">$' + parseFloat(bnbUsdtObject.c).toLocaleString()+'<span><div>';
}

let ws4 = new WebSocket('wss://stream.binance.com:9443/ws/adausdt@ticker');
let adaUsdtElement = document.getElementById('ada-usdt');


ws4.onmessage = (event) => {
    let adaUsdtObject = JSON.parse(event.data);
    adaUsdtElement.innerHTML = '<div>'+adaUsdtObject.s + '  - <span id="price">$' + parseFloat(adaUsdtObject.c).toLocaleString()+'<span><div>';
}

let ws5 = new WebSocket('wss://stream.binance.com:9443/ws/solusdt@ticker');
let solUsdtElement = document.getElementById('sol-usdt');


ws5.onmessage = (event) => {
    let solUsdtObject = JSON.parse(event.data);
    solUsdtElement.innerHTML = '<div>'+solUsdtObject.s + '  - <span id="price">$' + parseFloat(solUsdtObject.c).toLocaleString()+'<span><div>';
}