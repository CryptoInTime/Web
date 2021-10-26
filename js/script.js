let ws1 = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');
let btcUsdtElement = document.getElementById('btc-usdt');


ws1.onmessage = (event) => {
    let btcUsdtObject = JSON.parse(event.data);
    btcUsdtElement.innerText = btcUsdtObject.s + '  $' + parseFloat(btcUsdtObject.c).toLocaleString();
}

let ws2 = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@ticker');
let ethUsdtElement = document.getElementById('eth-usdt');


ws2.onmessage = (event) => {
    let ethUsdtObject = JSON.parse(event.data);
    ethUsdtElement.innerText = ethUsdtObject.s + '  $' + parseFloat(ethUsdtObject.c).toLocaleString();
}


let ws3 = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@ticker');
let bnbUsdtElement = document.getElementById('bnb-usdt');


ws3.onmessage = (event) => {
    let bnbUsdtObject = JSON.parse(event.data);
    bnbUsdtElement.innerText = bnbUsdtObject.s + '  $' + parseFloat(bnbUsdtObject.c).toLocaleString();
}

let ws4 = new WebSocket('wss://stream.binance.com:9443/ws/adausdt@ticker');
let adaUsdtElement = document.getElementById('ada-usdt');


ws4.onmessage = (event) => {
    let adaUsdtObject = JSON.parse(event.data);
    adaUsdtElement.innerText = adaUsdtObject.s + '  $' + parseFloat(adaUsdtObject.c).toLocaleString();
}

let ws5 = new WebSocket('wss://stream.binance.com:9443/ws/solusdt@ticker');
let solUsdtElement = document.getElementById('sol-usdt');


ws5.onmessage = (event) => {
    let solUsdtObject = JSON.parse(event.data);
    solUsdtElement.innerText = solUsdtObject.s + '  $' + parseFloat(solUsdtObject.c).toLocaleString();
}