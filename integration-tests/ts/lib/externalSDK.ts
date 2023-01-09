import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://calendrier.api.gouv.fr/jours-feries/metropole.json',
};

const ask = async function () {
    try {
        console.log("ORIGINAL");
        let result = await axios.request(options);
        return result.data;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export default {
    ask
}