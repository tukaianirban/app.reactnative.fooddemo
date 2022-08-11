import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = (props) => {
    return (
        <View style={styles.backgroundMain}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput 
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect={false}
                placeholder="Search here" 
                style={styles.searchBar} 
                value={props.term}      // essential to set this, otherwise onEndEditing is called with a huge object
                onChangeText={props.onSearchTermUpdated} 
                onEndEditing={props.onSearchTermSubmitted} />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundMain: {
        backgroundColor: '#dddddd',
        margin: 16,
        height: 50,
        borderRadius: 8,
        flexDirection: 'row',
    },
    searchBar: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center', // only aligns the single item
        marginHorizontal: 8,
    }
});

export default SearchBar;