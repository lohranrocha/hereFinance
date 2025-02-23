import { View, Modal, Text } from "react-native";
import { style } from "@/app/index/style"
import { Balance } from '@/components/balance';
import { Extract } from "@/components/extract";
import { Header } from "@/components/header";
import { BoxTopic } from "@/components/boxTopic";
import { TransactionButtons } from "@/components/transactionButtons";
import { Menu } from "@/components/menu";


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

          

        </View>
    )
}