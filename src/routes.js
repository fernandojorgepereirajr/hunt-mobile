import { createStackNavigator } from 'react-navigation'

import Maim from './pages/main'

export default createStackNavigator({
    Maim
},{
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#DA552F',
        },
        headerTintColor: '#FFF'
    }
})