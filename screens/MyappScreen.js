
import { StyleSheet, Text, View } from 'react-native';

const MyappScreen = () => (
    <View style={styles.container}>
        <Text>Myapp</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1e90ff',
      alignItems: 'center',
      justifyContent: 'center',
    }
})

export default MyappScreen