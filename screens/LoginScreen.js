
import { StyleSheet, Text, View } from 'react-native';

const LoginScreen = () => (
    <View style={styles.container}>
         <TextInput
      style={styles.input}
      placeholder="Username"
      />
      
      <TextInput
      style={styles.input}
      placeholder="Password"
      secureTextEntry
      />

      <View style={styles.btnContainer}>
        <TouchableOpacity
        style={styles.userBtn}>
          
           <Text style={styles.btnTxt}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.userBtn}
        onPress={() => MyappScreen}>
        
           <Text style={styles.btnTxt}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1e90ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        width: "90%",
        backgroundColor: "#f0ffff",
        padding: 15,
        marginBottom: 10,
      },
    
      btnContainer: {
        flexDirection: "column",
        width: "50%",
      },
    
      userBtn: {
        backgroundColor: "#00ffff",
        padding: 10,
        marginBottom: 10,  
      },
    
      btnTxt: {
        fontSize: 15,
        textAlign: "center",
      }
})

export default LoginScreen