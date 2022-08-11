import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3',
    headers: {
        Authorization: 'Bearer u1klfjy6aYna72B4G39fh4fN74IT_CPjVjd7tRwcVJMoOHJyNqyDn5VM3axXrIDRNQRQERiGNnuRzzGxTVaO-Ekz4ME8gOtjRifeguaReOAFs14C-m7zZLjBTN7vYnYx',
    }
});