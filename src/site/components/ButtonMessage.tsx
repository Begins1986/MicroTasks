import React from 'react';
import button from "../Button";

type ButtonMessagePropsType = {
    name:string
    callback: ()=> void
}

export const ButtonMessage = (props: ButtonMessagePropsType) => {

    const onClickButtonMessageHandler = () => {
        props.callback()
    }

    return (
        <button onClick={onClickButtonMessageHandler}>{props.name}</button>
    );
};
