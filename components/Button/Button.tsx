import {ButtonProps} from "./Button.props";
import style from './Button.module.css';
import cn from 'classnames';

export const Button = ({appearance, children}: ButtonProps): JSX.Element => {
    return (
        <button className={cn(style.button, {
            [style.primary]: appearance === 'primary',
            [style.ghost]: appearance === 'ghost'
        })}>
            {children}
        </button>
    );
};

