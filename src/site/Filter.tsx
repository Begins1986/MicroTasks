import React, {useState} from 'react';
import NewComponent from "./NewComponent";

const Filter = () => {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState('all')
    let filterMoney = money
    if (filter === 'dollars') {
        filterMoney = money.filter(m => m.banknots === 'Dollars')
    }
    if (filter === 'rubles') {
        filterMoney = money.filter(m => m.banknots === 'RUBLS')
    }

    const onClickFilterHandler = (nameButton: string) => {
        setFilter(nameButton)
    }


    return (
        <>
            <NewComponent filterMoney={filterMoney}
                          onClickFilterHandler={onClickFilterHandler}
            />
            {/*<ul>*/}
            {/*    {filterMoney.map(m => {*/}
            {/*            return (*/}

            {/*                <li>*/}
            {/*                    <span>{m.banknots}</span>*/}
            {/*                    <span>{m.value}</span>*/}
            {/*                    <span>{m.number}</span>*/}
            {/*                </li>*/}
            {/*            )*/}
            {/*        }*/}
            {/*    )}*/}
            {/*</ul>*/}
            {/*<button onClick={() => onClickFilterHandler('all')}>all</button>*/}
            {/*<button onClick={() => onClickFilterHandler('dollars')}>dollars</button>*/}
            {/*<button onClick={() => onClickFilterHandler('rubles')}>rubles</button>*/}
        </>
    );
};

export default Filter;