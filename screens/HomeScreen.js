import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, View, TouchableOpacity, Image, StatusBar, Text, StyleSheet } from 'react-native'
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons'
import tw from 'tailwind-rn'
import useAuth from '../hooks/useAuth'
import Swiper from 'react-native-deck-swiper'
import { useRef } from 'react'

const DUMMY_DATA = [
    {
        firstName: 'Sonny',
        lastName: 'Chang',
        job: 'Software Engineer',
        photoURL: 'https://avatars.githubusercontent.com/u/24712956?v=4',
        age: '27',
        id: '1'
    },
    {
        firstName: 'Elon',
        lastName: 'Musk',
        job: 'CEO of Tesla',
        photoURL: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
        age: '56',
        id: '2'
    },
    {
        firstName: 'Mark',
        lastName: 'Zuckerberg',
        job: 'CEO of Meta',
        photoURL: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg',
        age: '37',
        id: '3'
    }
]

const HomeScreen = () => {

    const navigation = useNavigation()
    const { user, logout } = useAuth()
    const swipeRef = useRef(null)

    return (
        <SafeAreaView style={[tw('flex-1'), { marginTop: StatusBar.currentHeight }]}>
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

            {/* Cards */}
            <View style={tw('flex-1 -mt-6')}>
                <Swiper
                    ref={swipeRef}
                    containerStyle={{ backgroundColor: 'transparent' }}
                    cards={DUMMY_DATA}
                    stackSize={5}
                    cardIndex={0}
                    animateCardOpacity
                    verticalSwipe={false}

                    onSwipedLeft={() => console.log('swiped left')}
                    onSwipedRight={() => console.log('swiped right')}

                    backgroundColor='#4FD0E9'
                    overlayLabels={{
                        left: {
                            title: 'NOPE',
                            style: {
                                label: {
                                    textAlign: 'right',
                                    color: 'red',
                                }
                            }
                        },
                        right: {
                            title: 'MATCH',
                            style: {
                                label: {
                                    color: '#4DED30'
                                }
                            }
                        }
                    }}
                    renderCard={card => (
                        <View
                            key={card.id}
                            style={tw('relative bg-white h-3/4 rounded-xl')}
                        >
                            <Image
                                style={tw('absolute top-0 h-full w-full rounded-xl')}
                                source={{ uri: card.photoURL }}
                            />

                            <View style={[tw('absolute bottom-0 bg-white w-full flex-row justify-between items-center h-20 px-6 py-2 rounded-b-xl'), styles.cardShadow]}>
                                <View>
                                    <Text style={tw('text-xl font-bold')}>
                                        {card.firstName} {card.lastName}
                                    </Text>
                                    <Text>{card.job}</Text>
                                </View>

                                <Text style={tw('text-2xl font-bold')}>{card.age}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>

            <View style={tw('flex flex-row justify-evenly')}>
                <TouchableOpacity
                    onPress={() => swipeRef.current.swipeLeft()}
                    style={tw('items-center justify-center rounded-full w-16 h-16 bg-red-200')}
                >
                    <Entypo name='cross' size={24} color='red' />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => swipeRef.current.swipeRight()}
                    style={tw('items-center justify-center rounded-full w-16 h-16 bg-green-200')}
                >
                    <AntDesign name='heart' size={24} color='green' />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    cardShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2
    }
})