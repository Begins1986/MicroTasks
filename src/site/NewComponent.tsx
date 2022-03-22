import React from 'react';

type FilterMoneyType = {
    filterMoney: Array<ObjMoney>,
    onClickFilterHandler: (nameButton: string)=>void
}

type ObjMoney={
    banknots: string,
    value: number,
    number: string
}



const NewComponent = (props:FilterMoneyType) => {
    const onAllClickHandler = () => props.onClickFilterHandler('all');
    const onDollarsClickHandler = () => props.onClickFilterHandler('dollars');
    const onRublesClickHandler = () => props.onClickFilterHandler('rubles');

    return (
        <div>
            <ul>
                {props.filterMoney.map(m => {
                        return (

                            <li>
                                <span>{m.banknots}</span>
                                <span>{m.value}</span>
                                <span>{m.number}</span>
                            </li>
                        )
                    }
                )}
            </ul>
            <button onClick={onAllClickHandler}>all</button>
            <button onClick={onDollarsClickHandler}>dollars</button>
            <button onClick={onRublesClickHandler}>rubles</button>
        </div>
    );
};

export default NewComponent;