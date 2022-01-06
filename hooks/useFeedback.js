import axios from 'axios';
const FEEDBACK =  process.env.NEXT_PUBLIC_FEEDBACK_API ;

export default function useFeedback() {
    async function createFeedback(info) {
        console.log(info)
        try {
            await axios.post(FEEDBACK, info);
            mutate(); // mutate causes complete collection to be refetched
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