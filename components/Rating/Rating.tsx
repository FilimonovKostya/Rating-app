import {RatingProps} from "./Rating.props";
import StarIcon from './star.svg';

export const Rating = ({isEditable = false, setNumberRating, numberRating, className, ...props}: RatingProps) => {
    return (
        <div {...props}>
            <StarIcon fill={'blue'}/>
        </div>
    );
};

