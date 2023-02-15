import currencies from "../modules/currencies"

export default function currencyPlugin(store){
    store.registerModule("currencies",currencies)
}