import { useState, useEffect } from "react";
import yelp from "../api/yelp";



const useYelpSearchResults = () => {

    const [results, setResults] = useState([]);
    const [yelpErrorMessage, setYelpErrorMessage] = useState('');

    useEffect(() => {
        searchApi('pasta');
    }, []);

    const searchApi = async (searchTerm) => {

        try{
            const response = await yelp.get('/businesses/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'San Jose',
                }
            })
            .then((response) => {

                setResults(response.data.businesses);
                setYelpErrorMessage('');
            })
            .catch(err => {
                setYelpErrorMessage('error calling Yelp API = %s', err);
                console.log('error calling the api = %s', err);
            });
        } catch(err) {
            console.log(err);
        } 
    };

    return [searchApi, results, yelpErrorMessage];
};

export default useYelpSearchResults;