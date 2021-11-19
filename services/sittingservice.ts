import axios from "axios";

//AllSittings: https://beanscenepetersham.azurewebsites.net/api/ApiSitting/GetSittings
export function AllSittings() {
    return axios.get('https://beanscenepetersham.azurewebsites.net/api/ApiSitting/GetSittings')
        .then(response => response.data);
}

//SearchSittings: https://beanscenepetersham.azurewebsites.net/api/ApiSitting/GetSittingsByDate?date=yyyy-mm-dd
export function SearchSittings(searchTerm: string) {
    return axios.get('https://beanscenepetersham.azurewebsites.net/api/ApiSitting/GetSittingsByDate?date='+ searchTerm + '')
        .then(response => response.data);
}


