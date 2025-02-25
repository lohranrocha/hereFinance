import { View, Modal, Text, TouchableOpacity, TextInput } from "react-native";
import { style } from "@/app/index/style"
import { Balance } from '@/components/balance';
import { Extract } from "@/components/extract";
import { Header } from "@/components/header";
import { BoxTopic } from "@/components/boxTopic";
import { TransactionButtons } from "@/components/transactionButtons";
import { Menu } from "@/components/menu";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/Styles/colors";
import SwitchTransfer from "@/components/switchTransfer";
import { useState } from "react";
import { InputEntry } from "@/components/inputEntry";


function testButtons() {
   console.log("Testing buttons");
}

export default function Index(){
     
    return(
        <View style={style.container}> 
            <Header />        
            <Balance />
            <View style={style.boxDash}>
                <BoxTopic style={style.boxGoals} title="My Graphic" />
                <BoxTopic style={style.boxGoals2} title="My Goals" />

            </View>
             
            <Extract />

            <Modal transparent visible={true}>
                <View style={style.modal}>
                    <View style={style.modalContent}>
                       <View style={style.modalHeader}>
                            <Ionicons name="close" size={28} color="gray" style={style.modalCloseIcon} />
                            <Text style={style.modalTitle}>Nova Entrada</Text>
                            <Ionicons name="checkmark-circle" size={33} color={colors.secondaryRose[200]} style={style.modalCloseIcon} />
                        </View> 

                        <SwitchTransfer />
                       
                        <InputEntry />

                    
                    </View>
                </View>
            </Modal>
          

        </View>
    )
}