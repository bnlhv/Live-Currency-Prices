//DOM elements
const itemArray = document.querySelectorAll('.item');

//Object
const currency = {
    USD: 0,
    JPY: 0,
    EUR: 0,
    ILS: 0
}

//Constants
let i=0;

const currencyArray = ['BTC','ETH','USDT','XRP'];
const urlName = ['bitcoin', 'ethereum', 'tether', 'xrp']

for(const currency of currencyArray){
    fetch(`https://min-api.cryptocompare.com/data/price?fsym=${currency}&tsyms=USD,JPY,EUR,ILS`)
    .then(res => res.json())
    .then(data => {

        const { USD, JPY, EUR, ILS } = data;

        itemArray[i].innerHTML = `
            <div class="${currency.toLowerCase()} card" >
                <img class="card-img-top" src="./img/${currency}.png" alt="Card image cap">
                <div class="card-body p-0">
                    <h6 class="card-title">${urlName[i][0].toUpperCase() + urlName[i].slice(1)}:</h6>
                    <p class="card-text">
                        <span>USD: ${USD}</span><br>
                        <span>JPY: ${JPY}</span><br>
                        <span>EUR: ${EUR}</span><br>
                        <span>ILS: ${ILS}</span><br>
                    </p>
                    <a class="linkBtn" href="https://www.investing.com/crypto/${urlName[i]}">See More</a>
                </div>
            </div>`
            i++;    
        }
    )
}