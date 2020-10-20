import React, { useState } from 'react';
import classNames from 'classnames/bind';

import { TextField } from '../TextField';

import styles from './AddTodo.module.css';

const cx = classNames.bind(styles);

interface AddTodoProps {
    onAddTodo: (text: string) => void;
}

export const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
    const [value, setValue] = useState('');
    const [isFocused, setFocused] = useState(false);

    const handleChange = (event: React.SyntheticEvent) => {
        setValue((event.target as HTMLInputElement).value);
    };

    const handleSubmit = (value: string) => {
        onAddTodo(value);
        setValue('');
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            handleSubmit(value);
        } else if (event.key === 'Escape') {
            setFocused(false);
        }
    };

    return (
        <li className={cx('addTodo', { isFocused })}>
            <i className={cx('plus')} />
            <TextField
                value={value}
                placeholder={isFocused ? '' : 'New task'}
                className={cx('input')}
                onChange={handleChange}
                onBlur={() => setFocused(false)}
                onFocus={() => setFocused(true)}
                onKeyDown={handleKeyDown}
            />
        </li>
    );
};