import React, {useState} from 'react';

type HeaderType={
    title: string
}

export const Header = (props:HeaderType) => {
    let [number, setNumber] = useState<number>(0)
    const onClickHandler = () => {
      setNumber(++number)
    }
    const onZeroHandler = () => {
        setNumber(0)
    }

    return (
        <div>
            {props.title}
            <h1>{number}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onZeroHandler}>0</button>
        </div>
    );
};

