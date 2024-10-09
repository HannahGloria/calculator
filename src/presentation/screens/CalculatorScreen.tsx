import React from 'react';
import {  Text, View } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';
import { CalculatorButton } from '../components/CalculatorButton';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <View style={{paddingHorizontal:25, paddingBottom: 20}}>
        <Text style={styles.mainResult}>150 </Text>
        <Text style={styles.subResult}>0</Text>
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={ ()=>console.log() } label="C"/>
        <CalculatorButton onPress={ ()=>console.log() } label="+/-"/>
        <CalculatorButton onPress={ ()=>console.log() } label="%"/>
        <CalculatorButton onPress={ ()=>console.log() } label="/" color={colors.orange}/>
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={ ()=>console.log() } label="7"/>
        <CalculatorButton onPress={ ()=>console.log() } label="8"/>
        <CalculatorButton onPress={ ()=>console.log() } label="9"/>
        <CalculatorButton onPress={ ()=>console.log() } label="x" color={colors.orange}/>
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={ ()=>console.log() } label="4"/>
        <CalculatorButton onPress={ ()=>console.log() } label="5"/>
        <CalculatorButton onPress={ ()=>console.log() } label="6"/>
        <CalculatorButton onPress={ ()=>console.log() } label="-" color={colors.orange}/>
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={ ()=>console.log() } label="1"/>
        <CalculatorButton onPress={ ()=>console.log() } label="2"/>
        <CalculatorButton onPress={ ()=>console.log() } label="3"/>
        <CalculatorButton onPress={ ()=>console.log() } label="+" color={colors.orange}/>
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={ ()=>console.log() } label="0" doubleSize={true}/>
        <CalculatorButton onPress={ ()=>console.log() } label="."/>
        <CalculatorButton onPress={ ()=>console.log() } label="=" color={colors.orange}/>
      </View>
    </View>
  );
};
