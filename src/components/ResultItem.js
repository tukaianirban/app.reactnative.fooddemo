import { StyleSheet, View, TouchableOpacity, Image, Text, Linking } from "react-native";

const openWebLink = async (url) => {

    const supported = await Linking.canOpenURL(url);

    if (supported) {
        await Linking.openURL(url);
    } else {
        Alert.alert('Message','Unable to open link to the restaurant');
    }
};

const ResultItem = (props) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={async () => openWebLink(props.item.url)}>
                <Image style={styles.itemImage} source={{uri:props.item.image_url}} />
                <Text numberOfLines={1} style={styles.itemImageTitle}>{props.item.name}</Text>
                <Text style={styles.itemImageSubtitle}> {props.item.rating} Stars, {props.item.review_count} Ratings </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        marginLeft: 8,
        marginBottom: 8,
        height: 160,
        width: 160,
    },
    itemImage: {
        borderRadius: 4,
        height: 120,
        width: 140,
        alignSelf: 'center'
    },
    itemImageTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        
    },
    itemImageSubtitle: {
        fontSize: 12,
        color: 'gray',
    }
});

export default ResultItem;