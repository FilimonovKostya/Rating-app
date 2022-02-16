import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean
    numberRating: number
    setNumberRating?: (rating: number) => void
}

