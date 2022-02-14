import React from 'react';
import {ParagraphProps} from "./Paragraph.props";
import style from './Paragraph.module.css';
import cn from 'classnames';

const Paragraph = ({fz = '14px', children, ...props}: ParagraphProps) => {
    return (
        <p className={cn(style.paragraph, {
            [style.small]: fz === '14px',
            [style.medium]: fz === '16px',
            [style.big]: fz === '18px',
        })} {...props}>
            {children}
        </p>
    );
};

export default Paragraph;
