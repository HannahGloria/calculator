import React from 'react';
import { Pressable, Text } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';

interface Props {
    label: string;
    color?: string;
    doubleSize?: boolean;
    onPress: () => void;
}

export const CalculatorButton = ({
    label,
    color = colors.darkGray,
    doubleSize = false,
    onPress,
}:Props) => {
  return (
    <Pressable
        //el parentesis despues de la funcion de flecha es que regreso un obj implicito
        //es decir que no tengo que poner return{} para regresar un objeto
        onPress={()=> onPress()} //invocando la funcion que llame como argumento
        style={({pressed}) => ({
          ...styles.button,
          backgroundColor: color,
          width: doubleSize ? 180 : 80,
          opacity: pressed ? 0.5 : 1,
        })}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
    
  )
}
