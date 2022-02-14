import {Button, Htag} from "../components";

export default function Home(): JSX.Element {
    return (
        <div>
            <Htag tag={'h1'}>Text</Htag>
            <Htag tag={'h2'}>Text</Htag>
            <Htag tag={'h3'}>Text</Htag>
            <Button appearance={'primary'}>Button</Button>
            <Button appearance={'ghost'}>Button</Button>
        </div>
    );
}
