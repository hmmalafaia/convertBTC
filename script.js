async function buscaPreco() {
    const btcBrlInput = document.getElementById('btcBrl');
    const btcUsdInput = document.getElementById('inputUSD');

    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl');
        const data = await response.json();
        const bitcoinPriceBRL
            = data.bitcoin.brl;


        btcBrlValue = bitcoinPriceBRL;
        btcBrlInput.value = btcBrlValue;
        btcBrlInput.disabled = true;


    } catch (error) {
        console.error('Error fetching Bitcoin price in BRL:', error);
        btcBrlInput.value = -1;
        btcUsdInput.value = -1;

    }

    try {
        setTimeout(function () {
        }, 1500);
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=usd&vs_currencies=brl');
        const data = await response.json();
        const BRLusdPrice
            = data.usd.brl;

        btcUsdInput.value = BRLusdPrice;
        btcUsdInput.disabled = true;


    } catch (error) {
        console.error('Error fetching Bitcoin price in BRL:', error);
        labelElement.value = -1;

    }

}


async function converter(campo) {
    const satoshisPorBitcoin = 100000000;
    const satoshisInput = document.getElementById('satoshis');
    const bitcoinInput = document.getElementById('bitcoin');
    const brlInput = document.getElementById('brl');
    const usdInput = document.getElementById('usd');
    const btcBrlInput = document.getElementById('btcBrl');
    const usd = document.getElementById('inputUSD');

    if (campo === 'satoshis') {
        const satoshis = parseFloat(satoshisInput.value);
        const bitcoin = satoshis / 100000000;
        bitcoinInput.value = bitcoin;
        brlInput.value = btcBrlInput.value * bitcoinInput.value;
        usdInput.value = brlInput.value * usd.value;

    } else if (campo === 'bitcoin') {
        const bitcoin = parseFloat(bitcoinInput.value);
        const satoshis = bitcoin * satoshisPorBitcoin;
        satoshisInput.value = satoshis;
        brlInput.value = bitcoinInput.value * btcBrlInput;
        usdInput.value = brlInput.value * 5.5;


    } else if (campo === 'brl') {
        const brl = parseFloat(brlInput.value);
        const bitcoin = brl / btcBrlInput;
        bitcoinInput.value = bitcoin;
        const satoshis = bitcoin * satoshisPorBitcoin;
        satoshisInput.value = satoshis;
        usdInput.value = brlInput.value * 5.5;


    } else if (campo === 'usd') {
        const usd = parseFloat(usdInput.value);
        brlInput.value = usdInput.value / usd.value;

        const brl = parseFloat(brlInput.value);
        const bitcoin = brl / btcBrlInput;
        bitcoinInput.value = bitcoin;
        const satoshis = bitcoin * satoshisPorBitcoin;
        satoshisInput.value = satoshis;
    }


}