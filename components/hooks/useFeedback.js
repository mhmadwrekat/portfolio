import Axios from 'axios';
const FEEDBACK = process.env.NEXT_PUBLIC_FEEDBACK_API;
const USERNAME = process.env.NEXT_PUBLIC_USERNAME;
const PASS = process.env.NEXT_PUBLIC_PASSWORD;
export default function useFeedback() {
    async function createFeedback(Data) {
        try {
            const token = Buffer.from(`${USERNAME}:${PASS}`, 'utf8').toString('base64')    
            const url = `${FEEDBACK}`
            Axios.post(url, Data, {
              headers: {
                'Authorization': `Basic ${token}`
              },
            });
        } catch (error) {
            handleError(error);
        }
    }
    function handleError(error) {
        console.error(error);
    }
    return {
        createFeedback,
    }
}