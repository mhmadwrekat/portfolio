import Axios from 'axios';
const FEEDBACK = process.env.NEXT_PUBLIC_FEEDBACK_API;
export default function useFeedback() {
    async function createFeedback(Data) {
        console.log(Data)
        try {
            await Axios.post(FEEDBACK, Data);
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