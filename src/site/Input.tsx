import React, {useState} from 'react';
import {FullInput} from "./components/FullInput";
import {InputMessage} from "./components/InputMessage";
import {ButtonMessage} from "./components/ButtonMessage";

export const Input = () => {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const [title, setTitle] = useState<string>('')

    const addMessage =(title:string)=>{
        setMessage([{message: title}, ...message])
    }

    const onClickButtonMessageHandler = () => {
        addMessage(title)
        setTitle('')
    }


    return (
        <div>

            {/*<FullInput addMessage={addMessage}/>*/}
            <InputMessage title={title} setTitle={setTitle}/>
            <ButtonMessage name={'+'} callback={onClickButtonMessageHandler}/>


            {
                message.map((el, index) => {
                    return (
                        <div key={index}>{el.message}</div>
                    )
                })
            }
        </div>
)
    ;
};

