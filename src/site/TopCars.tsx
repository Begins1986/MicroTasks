import React from 'react';

export const TopCars = () => {

    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    return (
        <div>
            {topCars.map((el,index)=>{
                return(
                    <tr key={index}>
                        <td>{el.manufacturer}</td>
                        <td>{el.model}</td>
                    </tr>
                )
            })}
        </div>
    );
};

