import axios from "axios";

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
});

// Fetch all countries, excluding Israel
export const getCountryData = async () => {

    const response = await api.get("/all?fields=name,population,region,capital,flags");

    return response;
};



// Fetch specific country details, excluding Israel
export const getCountryIndData = (name) => {
    if (name.toLowerCase() === 'israel') {
        return Promise.resolve([]); // Return an empty array for Israel
    }

    return api.get(
        `name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
    );
};
