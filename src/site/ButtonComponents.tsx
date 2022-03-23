import React from 'react';

type ButtonPropsType={
    name:string
    callback: ()=>void
}

const ButtonComponents = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callback()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};

export default ButtonComponents;