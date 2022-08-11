import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import ResultsList from "../components/ResultsList";
import useYelpSearchResults from "../hooks/useYelpSearchResults";

const filterResultsByPrice = (results, price) => {

    // return true if the 'price' $ count of the result item is same as the matched one 
    return results.filter(result => {
        return result.price === price;
    });
};

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    
    const [searchApi, results, yelpErrorMessage] = useYelpSearchResults();

    return(
        <>
            <SearchBar 
                onSearchTermUpdated={setTerm} 
                onSearchTermSubmitted={() => searchApi(term)} />
                
                {/* { results.length > 0 ? <Text> Found {results.length} restaurants for you </Text> : null } */}

            <ScrollView>
                <ResultsList title='Cost effective' results={filterResultsByPrice(results, '$')} />
                <ResultsList title='Bit pricier' results={filterResultsByPrice(results, '$$')} />
                <ResultsList title='Big spender' results={filterResultsByPrice(results, '$$$')} />
                <ResultsList title='Expensive' results={filterResultsByPrice(results, '$$$$')} />
            </ScrollView>
            
        </>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;