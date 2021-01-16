import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const average = (data) => {
    return data.reduce((acc,value,index, arr) => Math.ceil((acc + value)/arr.length) , 0);
}

export default (props) => {
    return(
        <div>
            <Sparklines height={120} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} ({props.units})</div>
        </div>
    );
}