import React, {ChangeEvent} from 'react';

type InputMessagePropsType = {
    setTitle: (title:string)=>void
    title:string
}

export const InputMessage = (props:InputMessagePropsType) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }

    return (
        <input
            onChange={onChangeInputHandler}
            value={props.title}
        />
    );
};
