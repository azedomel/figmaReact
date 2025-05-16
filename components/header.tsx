import { StyleSheet, Text, View } from "react-native";

export const Header = () => {
    return(
        <View style={styles.back}>
            <Text style={styles.tt}>API RICK AND MORTY</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    back: {
        backgroundColor: '#0D2538',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80
    },
    tt:{
        color: '#A1DAA1',
        fontSize: 28,
        fontWeight: 900,
        letterSpacing: 1,
        
    }
})