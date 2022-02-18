import {RatingProps} from "./Rating.props";
import {useState} from "react";
import style from './Rating.module.css';
import StarIcon from './star.svg';
import cn from 'classnames';

const stars = new Array(5).fill(<></>);

export const Rating = ({isEditable = false, setNumberRating, numberRating, className, ...props}: RatingProps) => {
    const [rating, setRating] = useState(1);

    return (
        <div {...props}>
            {
                stars.map((el, index) => <StarIcon className={cn(style.star, {
                    [style.active]: index <= rating,
                    [style.notActive]: index > rating,
                })} key={index} onClick={() => setRating(index)}
                />)
            }
        </div>
    );
};

