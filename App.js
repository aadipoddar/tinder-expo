import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './hooks/useAuth'
import StackNavigator from './StackNavigator'
import { LogBox } from 'react-native'
LogBox.ignoreAllLogs()

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  )
}