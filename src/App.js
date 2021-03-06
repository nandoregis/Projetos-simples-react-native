/* eslint-disable prettier/prettier */
import React from 'react';
// eslint-disable-next-line prettier/prettier
import 
{
    View, 
    Image , 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar,
    Pressable,
    Linking
} 
from "react-native";

const colorGithub = '#010409';
const imgProfile = 'https://avatars.githubusercontent.com/u/77419604?v=4';
const corPadrao = 'white';

const urlToMyGithub = 'https://github.com/nandoregis?tab=repositories';


const App = () => {

  const enviarParaGithub = async ()=> {
      console.log('verficando...');
      const res = await Linking.canOpenURL(urlToMyGithub);
      if(res) {
        console.log('link aprovado');
        await Linking.openURL(urlToMyGithub);
      }
  }

  function Boll({ch}) {
    let ver = true;


    if(ch == 8 || ch == 9 || ch == 10 || ch == 11) {
      ver = false;
    }else if(ch == 15 || ch == 18 || ch == 23 || ch == 24) {
      ver = false;
    }else if( ch == 45 || ch == 44 || ch == 43 || ch == 46) {
      ver = false;
    }else if (ch == 65 || ch == 66 || ch == 71 || ch == 74) {
      ver = false;
    }else if(ch == 79 || ch == 80) {
      ver = false;
    }
  
    return(
      <View>
          {
            ver ?
            
              <Text style={[style.boll, style.bollColor]}/>
            :
              <Text style={[style.boll, style.bollColor2]}/>
          }
      </View>
    );
  }
  
  function Loop() {
    
    let arr = [];
    for(let i = 0; i < 91; i++) {
        arr.push(
          <Boll key={i} ch={i}/>
        )
    }

    return arr;
  }
 
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle={'light-content'} />
      <View style={style.content}>
        <Image
          accessibilityLabel="Imagem de Luís Fernando"
          style={style.avatar}
          source={{uri: imgProfile}}
        />
        <Text  accessibilityLabel='Nome Luís Fernando R S' 
            style={[style.colorDefault, style.textName]}
        >Luís Fernando R S</Text>
        <Text accessibilityLabel='Nickname nandoregis'  style={style.textNickName}>nandoregis</Text>
        <Text accessibilityLabel='Descrição de nandoregis'  style={[style.colorDefault, style.textDescription]}>Desenvolvedor Front-end - Iniciante</Text>
        
        <View style={style.bollView}>
            <Loop></Loop>
        </View>

        <Pressable onPress={enviarParaGithub}>
            <View style={style.button}>
                <Text style={style.textButton}>Open is GitHub</Text>
            </View>
        </Pressable>

      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1, // expande para tela inteira
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 15,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
  },
  colorDefault: {
      color: corPadrao,
  },
  textName: {
      fontSize:28,
  },
  textNickName: {
      color: '#606060',
      fontSize: 20,
  },
  textDescription: {
      fontSize: 18,
  },
  button: {
      backgroundColor: '#606060',
      borderRadius: 10,
      padding: 18,
      margin: 20,
  },
  textButton: {
      color: '#f9f9f9',
      fontSize: 17,
  },
  bollView: {
    marginVertical: 15,
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    maxHeight: 150,
  },
  boll: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 1,
  },
  bollColor: {
    backgroundColor: 'green',
  },
  bollColor2: {
    backgroundColor: 'red',
  }

});
