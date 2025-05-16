import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";

export const Item = ({name, date, image} : {name: string, date: string, image: string}) => {
    return(
        <View>
            <Image style={styles.imageStyle} source={image}/>
            <Text style={styles.itemList}>{name}</Text>
            <Text style={styles.itemList}>{date}</Text>
        </View>
    )
}
const styles = StyleSheet.create ({
    itemList: {
        
    },
    imageStyle: {
        width: 50,
        height: 50,
        zIndex: 999
    }
})