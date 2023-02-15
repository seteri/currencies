import { createStore } from 'vuex'
import currencyPlugin from './plugins/currenciesPlugin' 

export default createStore({
  plugins: [currencyPlugin]
})

