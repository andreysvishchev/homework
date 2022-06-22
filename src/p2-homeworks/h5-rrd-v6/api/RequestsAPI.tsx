import React, {ChangeEvent, useState} from 'react';
import axios, {AxiosError} from "axios";
import {Simulate} from "react-dom/test-utils";


const RequestsApi = () => {
    const [value, setValue] = useState(false)
    const [message, setMessage] = useState('')

    const onClickHandler = (value: boolean) => {
        axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: value})
            .then((r) => {
                setMessage(r.statusText)
                console.log(message)
            })
            .catch((error) => {
                console.log(error.response.data.errorText)
                setMessage(error.response.data.errorText)
            })
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
        console.log(value)
    }

    return (
        <div>
            <div>{message}</div>
            <input type="checkbox" checked={value} onChange={onChangeHandler}/>
            <button onClick={() => onClickHandler(value)}>отправить</button>
        </div>
    );
};

export default RequestsApi;