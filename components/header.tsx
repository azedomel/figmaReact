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
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tt:{
        color: 'white'
    }
})