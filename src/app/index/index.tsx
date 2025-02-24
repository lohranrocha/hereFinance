import { View, Modal, Text, TouchableOpacity } from "react-native";
import { style } from "@/app/index/style"
import { Balance } from '@/components/balance';
import { Extract } from "@/components/extract";
import { Header } from "@/components/header";
import { BoxTopic } from "@/components/boxTopic";
import { TransactionButtons } from "@/components/transactionButtons";
import { Menu } from "@/components/menu";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/Styles/colors";


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
     
            <View style={style.contentButtons}>
                <TransactionButtons style={style.btnExit} title="Saída" onPress={testButtons}  />
                <TransactionButtons style={style.btnEntry} onPress={testButtons} title="Entradas" />
            </View>
             
            <Extract />

            <Modal transparent visible={true}>
                <View style={style.modal}>
                    <View style={style.modalContent}>
                       <View style={style.modalHeader}>
                            <Ionicons name="close" size={28} color="gray" style={style.modalCloseIcon} />
                            <Text style={style.modalTitle}>Nova Entrada</Text>
                            <Ionicons name="checkmark-circle" size={33} color={colors.pastelGreen} style={style.modalCloseIcon} />
                        </View> 

                        <View style={style.modalTypeOfTransaction}> 
                            <TouchableOpacity>
                                <Text style={style.btnExpense}>
                                    Despesas
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={style.btnIncome}>
                                    Receitas
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={style.btnTransfer}>
                                    Transferência
                                </Text>
                            </TouchableOpacity>
                        </View>


                    
                    </View>
                </View>
            </Modal>
          

        </View>
    )
}