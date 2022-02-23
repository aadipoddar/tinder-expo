import { SafeAreaView, StatusBar } from "react-native"
import Header from "../components/Header"

const ChatScreen = () => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <Header title='Chat' />
    </SafeAreaView>
  )
}

export default ChatScreen