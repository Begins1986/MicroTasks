import React, {ChangeEvent, useState} from 'react';

type FullInputType = {
    addMessage: (title: string) => void
}

export const FullInput = (props: FullInputType) => {
    const [title, setTitle] = useState<string>('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input
                onChange={onChangeInputHandler}
                value={title}
            />
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};
