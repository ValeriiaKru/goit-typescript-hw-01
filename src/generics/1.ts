// import axios from 'axios';

// async function fetchData(url) {
//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     throw new Error(`Error fetching from ${url}: ${error}`);
//   }
// }

import axios from 'axios';
async fucnction fetchData<T>(url: string): Promise < T > {
    try{
        const repsonse = await axios.get<T>(url);
        return response.data;
    } catch(error) {
        throw new Error('Error fetching from ${url}: ${error}');
    }
}