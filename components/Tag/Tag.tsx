import {TagProps} from "./Tag.props";
import style from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({appearance = 'ghost', children, href, className, ...props}: TagProps): JSX.Element => {
    return (
        <div className={cn(style.tag, className, {
            [style.primary]: appearance === 'primary',
            [style.ghost]: appearance === 'ghost',
            [style.green]: appearance === 'green',
            [style.red]: appearance === 'red',
        })} {...props}>

            {
                href
                    ? <a href={href}>{children}</a>
                    : children

            }

        </div>
    );
};

