import React from 'react';

import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import {styles} from './styles';
import { LinearGradient } from 'expo-linear-gradient';

const data = [
  {
    title: 'Economize tempo acompanhando seus estudos',
    text: 'Agende suas aulas, tarefas, questionários e muito mais',
    image: require('../../assets/Onboard1.png')
  },
  {
    title: 'Fique por dentro da sua educação',
    text: 'Reduza seu estresse, aumente sua produtividade',
    image: require('../../assets/Onboard2.png')
  },
  {
    title: 'Gaste mais tempo fazendo as coisas que você ama',
    text: 'Comece em cinco minutos',
    image: require('../../assets/Onboard3.png')
  },
]

export function Onboard(){

  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image
          source={item.image}
          style={styles.image}
        />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    )
  }
  
  const keyExtractor = (item) => item.title;

  const renderDoneButton = () => {
    return (
      <LinearGradient
        colors={['#A5C8FF', '#232868']}
        start={{x: 0, y:0}}
        end={{x: 1, y:0}}
        style={styles.doneButtonWrapper}
      >
        <Text style={styles.doneButtonText}>
          Fechar
        </Text>
      </LinearGradient>
    )
  }

  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>
          Próximo
        </Text>
      </View>
    )
  }

  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>
          Anterior
        </Text>
      </View>
    )
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor="transparent"
        translucent
      />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        data={data}
      />
    </View>
  );
}