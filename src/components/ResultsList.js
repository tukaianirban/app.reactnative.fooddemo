import { StyleSheet,View, Text, FlatList } from "react-native";
import ResultItem from "./ResultItem";


const renderItemFn = (result) => {

    return (    
        <ResultItem item={result.item} />
    );
};

const ResultsList = (props) => {

    if (!props.results.length) {
        return null;
    }
    
    return (
        <View style={styles.background}>
            <Text style={styles.itemTitle}> {props.title} </Text>
            <FlatList
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={props.results}
            renderItem={renderItemFn} />
            
        </View>
    );
};



const styles = StyleSheet.create({
    background: {
        marginTop: 8,
        marginBottom: 8,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: "bold",
    }
});

export default ResultsList;