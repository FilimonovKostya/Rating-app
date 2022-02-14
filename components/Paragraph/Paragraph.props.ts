import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    fz?: '14px' | '16px' | '18px'
    children: ReactNode
}