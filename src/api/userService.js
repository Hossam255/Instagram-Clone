import axios from "axios";

export function fetchUsers() {
    return axios.get('/data/users.json').then((res) => res.data );
}