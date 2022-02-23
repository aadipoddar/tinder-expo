import { SafeAreaView, StatusBar } from "react-native"
import ChatList from "../components/ChatList"
import Header from "../components/Header"

const ChatScreen = () => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <Header title='Chat' />
      <ChatList />
    </SafeAreaView>
  )
}

export default ChatScreen