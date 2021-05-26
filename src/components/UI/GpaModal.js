import React from 'react';

import Card from './Card';
import Button from './Button';
import classes from './GpaModal.module.css';

const GpaModal = props => {
    return (
        <div>
            <div className={classes.backdrop}></div>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>Grade Point Average</h2>
                </header>
                <div className={classes.content}>
                    <p>Your GPA is {props.content}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        </div>
    )
};

export default GpaModal;
