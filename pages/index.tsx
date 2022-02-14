import {Button, Htag} from "../components";
import Paragraph from "../components/Paragraph/Paragraph";

export default function Home(): JSX.Element {
    return (
        <div>
            <Htag tag={'h1'}>Text</Htag>
            <Htag tag={'h2'}>Text</Htag>
            <Htag tag={'h3'}>Text</Htag>
            <Button appearance={'primary'} arrow={'right'}>Button</Button>
            <Button appearance={'ghost'} arrow={'down'}>Button</Button>
            <Paragraph fz={'14px'}>14px</Paragraph>
            <Paragraph> 14px</Paragraph>
            <Paragraph fz={'16px'}>16px</Paragraph>
            <Paragraph fz={'18px'}>18px</Paragraph>
        </div>
    );
}
