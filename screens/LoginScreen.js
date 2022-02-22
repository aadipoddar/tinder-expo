import { View, Text, Button } from 'react-native'
import useAuth from '../hooks/useAuth'

const LoginScreen = () => {
    const { signInWithGoogle, loading } = useAuth()

    return (
        <View>
            <Text>{loading ? 'loading...' : 'Login To the App'}</Text>
            <Button title='Login' onPress={signInWithGoogle} />
        </View>
    )
}

export default LoginScreen