import React , { useState} from "react";
import { View , Text , TouchableOpacity , StyleSheet} from "react-native";
import { useDispatch } from "react-redux";
import { signUp } from '../store/actions/auth.actions'
import Input from "../components/Input";
import Button from "../components/Button";
import Colors from "../constants/Colors";
import Typography from "../constants/Typography";


function AuthScreen() {

    const dispatch = useDispatch();

    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSignUp = () => {
        dispatch(signUp(email,password))
    }

    const title = 'Registro',
        message = 'Ya tienes una cuenta?',
        messageAction = 'Ingresar',
        MessageTarget = 'Login'

    const handleChangeEmail = (text) => {
        setEmail(text)
      }

    const handleChangePassword = (text) => {
    setPassword(text)
    }

    return (
        

        <View style={styles.authContent}>
           
                <Text style={styles.text}> {title} </Text>
                <Text style={styles.text}> Email </Text>
                <Input style={styles.inputText}
                    value={email}
                    onChangeText={setEmail}
                    keyboardtype="email-address"
                    autoCapitalize = "none"
                    
                />
                <Text style={styles.text}> Password </Text>
                <Input 
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                   
                />
                <Button 
                title={"Registrarse"}
                onPress={handleSignUp}
                />
                <View>
                    <Text style={styles.text}> {message} </Text>
                    <TouchableOpacity>
                        <Text style={styles.text}> {messageAction} </Text>
                    </TouchableOpacity>
                </View>
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    authContent: {
        backgroundColor: Colors.backGround,
        flex: 1,
        padding: 50,
     
    },
    text: {
        fontFamily: Typography.titleFont,
        fontSize: 25,
        color: Colors.primary
    },
    inputText: {
        color: Colors.accent
    }
})

export default AuthScreen