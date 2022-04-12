import { useState } from "react";

export const useForm = (initianState = {}) => {

    const [state, setState] = useState(initianState)

    const reset = () => {
        setState(initianState);
    };

    const handleInputChange = ({ target }) => {
        setState({
            ...state,
            [target.name]: target.value
        })
    }

    return [state, handleInputChange, reset];
}