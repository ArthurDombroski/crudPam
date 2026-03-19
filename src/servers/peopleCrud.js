import {API_URL} from "./configApi.js"

async function getPeople(){

    const response = await fetch(`${API_URL}/people`);

    const data = await response.json();

    return data;
}

async function postPerson(person){
    const response = await fetch(`${API_URL}/people`,{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person)
    });

    return response.json();
}

async function putPerson(id, person){
    const response = await fetch(`${API_URL}/people/{id}`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person)
    });

    return response.json();
}

async function deletePerson(id){
    await fetch (`${API_URL}/people/${id}`, {
        method: "DELETE"
    });
}

export default {getPeople, postPerson, putPerson, deletePerson};