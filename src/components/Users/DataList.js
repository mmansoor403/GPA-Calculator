
import React from 'react';

import Card from '../UI/Card';
import classes from './DataList.module.css';

const DataList = props => {
    return (
    <Card className={classes.datas}>
        <div>
            <div>
                <div><strong>Subject Name</strong></div>
                <div><strong>Grade</strong></div>
                <div><strong>Credit</strong></div>
            </div>
            {props.datas.map(data => 
                <div className={classes.border} key={data.id}>
                    <div>{data.subject}</div>
                    <div>{data.grade}</div>
                    <div>{data.credit}</div>
                </div>
            )}
        </div>
    </Card>

    )
};

export default DataList