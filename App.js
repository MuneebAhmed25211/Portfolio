import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView  style={{height: '100%',width:'100%'}}
      source={ {uri: 'https://www.harvard.edu/'} } />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   
  },
});
