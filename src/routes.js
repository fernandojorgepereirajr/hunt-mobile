import { createStackNavigator } from 'react-navigation'

import Maim from './pages/main'
import Product from './pages/product'

export default createStackNavigator({
    Maim,
    Product
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#DA552F',
        },
        headerTintColor: '#FFF'
    }
})