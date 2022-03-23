import React from 'react';
import ButtonComponents from "./ButtonComponents";

const Button = () => {
    const foo1 = () => {
        console.log(1)
    }
    const foo2 = (numb: number) => {
        console.log(numb)
    }

    const Button1Foo = (subscriber:string, age:number) => {
        console.log(subscriber, age)
    }
    const Button2Foo = (subscriber:string) => {
        console.log(subscriber)
    }
    const StupidButton = (subscriber:string) => {
        console.log(subscriber)
    }


    return (
        <div>
            <button onClick={foo1}>1</button>
            <button onClick={() => foo2(2)}>1</button>
            <div>
                {/*<button>YouTubeChannel1</button>*/}
                {/*<button>YouTubeChannel2</button>*/}
                <ButtonComponents name={"YouTubeChannel1"} callback={()=>Button1Foo('im Ivan', 26)}/>
                <ButtonComponents name={'YouTubeChannel2'} callback={()=>Button2Foo('Im Vasya')}/>
                <ButtonComponents name={'Stupid button'} callback={()=>StupidButton('Im stupid button')}/>
            </div>
        </div>
    );
};

export default Button;