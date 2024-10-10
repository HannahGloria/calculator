import React from 'react';
import {  Text, View } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';
import { CalculatorButton } from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {

  const {
    number,
    buildNumber,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <View style={{paddingHorizontal:25, paddingBottom: 20}}>
        <Text style={styles.mainResult}>{number} </Text>
        <Text style={styles.subResult}>0</Text>
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={ ()=>console.log('C') } label="C"/>
        <CalculatorButton onPress={ ()=>console.log('+/-') } label="+/-"/>
        <CalculatorButton onPress={ ()=>console.log('%') } label="%"/>
        <CalculatorButton onPress={ ()=>console.log('/') } label="/" color={colors.orange}/>
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={ ()=>buildNumber('7') } label="7"/>
        <CalculatorButton onPress={ ()=>buildNumber('8') } label="8"/>
        <CalculatorButton onPress={ ()=>buildNumber('9') } label="9"/>
        <CalculatorButton onPress={ ()=>console.log('x') } label="x" color={colors.orange}/>
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={ ()=>buildNumber('4') } label="4"/>
        <CalculatorButton onPress={ ()=>buildNumber('5') } label="5"/>
        <CalculatorButton onPress={ ()=>buildNumber('6') } label="6"/>
        <CalculatorButton onPress={ ()=>console.log('-') } label="-" color={colors.orange}/>
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={ ()=>buildNumber('1') } label="1"/>
        <CalculatorButton onPress={ ()=>buildNumber('2') } label="2"/>
        <CalculatorButton onPress={ ()=>buildNumber('3') } label="3"/>
        <CalculatorButton onPress={ ()=>console.log('+') } label="+" color={colors.orange}/>
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={ ()=>console.log('0') } label="0" doubleSize={true}/>
        <CalculatorButton onPress={ ()=>buildNumber('.') } label="."/>
        <CalculatorButton onPress={ ()=>console.log('=') } label="=" color={colors.orange}/>
      </View>
    </View>
  );
};
