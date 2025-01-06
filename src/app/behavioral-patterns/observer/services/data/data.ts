import { Cryptocurrency } from "../service-observer/observer-cryptocurrency.service";

 
export const generateRandomPrice = () => {
    return Math.floor(Math.random() * 1000000) / 100;
}
export const cryptocurrencies: Cryptocurrency[] = [
    { name: 'Bitcoin', code: 'BTC', active: false, price: generateRandomPrice() },
    { name: 'Ethereum', code: 'ETH', active: false, price: generateRandomPrice() },
    { name: 'Tether', code: 'USDT', active: false, price: generateRandomPrice() },
    { name: 'Binance Coin', code: 'BNB', active: false, price: generateRandomPrice() },
    { name: 'Ripple', code: 'XRP', active: false, price: generateRandomPrice() },
    { name: 'Cardano', code: 'ADA', active: false, price: generateRandomPrice() },
    { name: 'Solana', code: 'SOL', active: false, price: generateRandomPrice() },
    { name: 'Polkadot', code: 'DOT', active: false, price: generateRandomPrice() },
    { name: 'Dogecoin', code: 'DOGE', active: false, price: generateRandomPrice() },
    { name: 'USD Coin', code: 'USDC', active: false, price: generateRandomPrice() }
];


