let ws1 = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');
let btcUsdtElement = document.getElementById('ticker1');


ws1.onmessage = (event) => {
    let btcUsdtObject = JSON.parse(event.data);
    btcUsdtElement.innerHTML = '<div>'+btcUsdtObject.s + '  - <span id="price">$' + parseFloat(btcUsdtObject.c).toLocaleString()+'<span><div>';
}

let ws2 = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@ticker');
let ethUsdtElement = document.getElementById('ticker2');


ws2.onmessage = (event) => {
    let ethUsdtObject = JSON.parse(event.data);
    ethUsdtElement.innerHTML = '<div>'+ethUsdtObject.s + '  - <span id="price">$' + parseFloat(ethUsdtObject.c).toLocaleString()+'<span><div>';
}


let ws3 = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@ticker');
let bnbUsdtElement = document.getElementById('ticker3');


ws3.onmessage = (event) => {
    let bnbUsdtObject = JSON.parse(event.data);
    bnbUsdtElement.innerHTML = '<div>'+bnbUsdtObject.s + '  - <span id="price">$' + parseFloat(bnbUsdtObject.c).toLocaleString()+'<span><div>';
}

let ws4 = new WebSocket('wss://stream.binance.com:9443/ws/adausdt@ticker');
let adaUsdtElement = document.getElementById('ticker4');


ws4.onmessage = (event) => {
    let adaUsdtObject = JSON.parse(event.data);
    adaUsdtElement.innerHTML = '<div>'+adaUsdtObject.s + '  - <span id="price">$' + parseFloat(adaUsdtObject.c).toLocaleString()+'<span><div>';
}

let ws5 = new WebSocket('wss://stream.binance.com:9443/ws/solusdt@ticker');
let solUsdtElement = document.getElementById('ticker5');


ws5.onmessage = (event) => {
    let solUsdtObject = JSON.parse(event.data);
    solUsdtElement.innerHTML = '<div>'+solUsdtObject.s + '  - <span id="price">$' + parseFloat(solUsdtObject.c).toLocaleString()+'<span><div>';
}
var page = 1

function tabla () {

    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page='+page+'&sparkline=false'

    fetch(url).then(res => res.json()).then(coins => showCoins(coins)).catch(error => console.log(error))

    const showCoins = (coins) => {
        let body = ''
        var percent = ''
        for (let i=0; i < coins.length; i++) {
            if(coins[i].price_change_percentage_24h < 0) {
                percent = '<td id="coin'+i+'-24h" style="background-color: #ff000082 ;">'+coins[i].price_change_percentage_24h.toFixed(2)+'%</td>'
                }else{
                    percent = '<td id="coin'+i+'-24h" style="background-color: #00ff0073 ;">'+coins[i].price_change_percentage_24h.toFixed(2)+'%</td>'
                }
            body += '<tr><th scope="row">'+coins[i].market_cap_rank+'</th><td style="font-weight: bold;"><img src="'+coins[i].image+'" alt="'+coins[i].symbol+'"> '+coins[i].symbol.toUpperCase()+'</td><td>'+coins[i].name+'</td><td>$ '+coins[i].current_price.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 6})+'</td>'+percent+'<td id="market_cap">$ '+coins[i].market_cap.toLocaleString()+'</td></tr>'
            
            
        }
        document.getElementById('table-body').innerHTML = body
        page++
        if(page>=6){
            
            page = 1
            
        }
    } 
}

tabla()
setInterval(tabla,5000)




