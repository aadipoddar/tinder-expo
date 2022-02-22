import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, View, TouchableOpacity, Image, StatusBar } from 'react-native'
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons'
import tw from 'tailwind-rn'
import useAuth from '../hooks/useAuth'

const HomeScreen = () => {
    const navigation = useNavigation()
    const { user, logout } = useAuth()

    return (
        <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
            {/* Header */}
            <View style={tw('flex-row items-center justify-between px-5')}>
                <TouchableOpacity onPress={logout}>
                    <Image
                        style={tw('h-10 w-10 rounded-full')}
                        source={{ uri: user.photoURL }}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={tw('h-14 w-14')} source={require('../assets/icon.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                    <Ionicons name='chatbubbles-sharp' size={30} color='#FF5864' />
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

export default HomeScreen