import React, {ChangeEvent, useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestApi} from "./RequestsAPI";

export const Request = () => {
    const [checked, setChecked] = useState(false)
    const [request, setRequest] = useState('')
    const [error, setError] = useState(false)

    const onCheckboxHandler  = (e:ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }

    const onClickHandler = () => {
        requestApi.make(checked)
            .then(res => {
                setRequest(res.data.errorText)
                error && setError(false)
            })
            .catch(e => {
                setRequest(e.response.data.errorText)
                !error && setError(true)
            })
    }

    return (
        <div>
            <SuperCheckbox checked={checked} onChange={onCheckboxHandler}/>
            <SuperButton onClick={onClickHandler}>Post</SuperButton>
            <div>{request}</div>
        </div>
    )
}