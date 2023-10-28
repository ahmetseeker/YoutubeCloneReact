const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  method: 'GET',
  url: BASE_URL,
  headers: {
    'X-RapidAPI-Key': 'ca293cb967mshbf1760982525221p1f8342jsnc0cfe8d81713',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    try {
        const response = await fetch(`${BASE_URL}/${url}`, options)
        const data = await response.json();
        console.log(data);
        return data;
    } catch(err) {
        console.log(err);
    }
}