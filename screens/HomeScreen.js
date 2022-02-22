import { useNavigation } from '@react-navigation/native'
import { View, Text, Button } from 'react-native'
import useAuth from '../hooks/useAuth'

const HomeScreen = () => {
    const navigation = useNavigation()
    const { logout } = useAuth()

    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title='Go to ChatScreen'
                onPress={() => navigation.navigate('Chat')} />

            <Button title='Log Out' onPress={logout} />
        </View>
    )
}

export default HomeScreen