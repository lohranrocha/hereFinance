import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { style } from "@/components/inputEntry/style";

export function InputEntry() {
  const [rawValue, setRawValue] = useState("0")
  const [inputValue, setInputValue] = useState("R$");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isTyping) return;

    let numericValue = parseInt(rawValue, 10) / 100;
    let formatted = numericValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  
    setInputValue(formatted);
  }, [rawValue, isTyping]);

  const handleTextChange = (text: string) => {
    setIsTyping(true);

    let cleanValue = text.replace(/\D/g, "");

    if(parseInt(cleanValue, 10) > 99999900) return;

    setRawValue(cleanValue === "" ? "0" : cleanValue);
    setInputValue(`R$ ${formatNumber(cleanValue)}`);

  };
  
    const handleEndEditing = () => {
      setIsTyping(false);
    }

  const formatNumber = (value: string) => {
    let numericValue = parseInt(value, 10) / 100;
    return numericValue.toLocaleString("pt-BR", {
      minimumFractionDigits: 2
    } )
  }
  
  return(    
    <View style={style.inputCategory}>

      <TextInput 
        style={style.txtInputModal} 
        keyboardType="numeric"
        placeholder="R$ 0,00"
        value={inputValue}
        onChangeText={handleTextChange}
        onEndEditing={handleEndEditing}
        />

    
    </View>
  )
}