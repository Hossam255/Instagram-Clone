import axios from "axios";

export function fetchCards() {
    return axios.get('/data/cards.json').then((res) => res.data );
}