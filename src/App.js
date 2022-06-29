import React from 'react';
import {View, 
    Image, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar,
    Pressable,
    Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkGithub = '#4F565E'

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/96590549?v=4';

const urlToMyGithub = 'https://github.com/MariaPaes';

const App = () => {

    const handlePressGoToGithub = async () => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if(res) {
            console.log('Link Aprovado');
            console.log('Abrindo Link...');
            await Linking.openURL(urlToMyGithub);
        }
    };
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={'#010409'} barStyle="light-content" />
            <View style={style.content}>
                <Image 
                    accessibilityLabel="Maria Clara em casa"
                    style={style.avatar} 
                    source={{uri: imageProfileGithub}}
                />   
                <Text 
                    accessibilityLabel="Nome: Maria Clara Paes"
                    style={[style.defaultText, style.name]}>Maria Clara Paes
                </Text> 
                <Text 
                    accessibilityLabel="NickName: MariaPaes"
                    style={[style.defaultText, style.nickname]}>MariaPaes
                </Text> 
                <Text 
                    accessibilityLabel="Profissão"
                    style={[style.defaultText, style.description]}>Product Owner Treinee | User Experience
                </Text> 
                
                <Pressable onPress = {handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.fontButton]}>
                            Open in GitHub
                        </Text>
                    </View> 
                </Pressable>               
            </View>
        </SafeAreaView>
    );
}

export default App;

const style = StyleSheet.create({
    container:{
        backgroundColor: '#010409',
        flex: 1, //Expandir para a tela inteira
    },
    content: {
        padding: 20,
    },
  
    avatar:{
        height:200,
        widht:200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },   
    defaultText:{
        color: colorFontGithub,
        padding: 3,
        textAlign: 'center',
        
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname:{
        fontSize: 18,
        color: colorDarkGithub,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkGithub,
        borderRadius: 10,
        padding: 20,
    },
    fontButton: {
        fontWeight: 'bold',
        fontSize: 18,
    },
})