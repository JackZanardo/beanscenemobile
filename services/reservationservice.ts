import axios from "axios";

//url: https://beanscenepetersham.azurewebsites.net/api/ApiReservation/GetReservationsBySitting?sittingId=
export function SearchReservations(sittingId: number){
    return axios.get('https://beanscenepetersham.azurewebsites.net/api/ApiReservation/GetReservationsBySitting?sittingId=' + sittingId + '')
        .then(response => response.data);
}