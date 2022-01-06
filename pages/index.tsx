import type {NextPage} from 'next'
import Header from "../components/header/header";
import Main from "../components/main/main";
import About from "../components/about/about";
import Designs from "../components/designs/designs";
import Card from "../components/projects/project-card/card";

const Home: NextPage = () => {
    return (
        <>
            <Header/>
            <Main/>
            <About/>
            <Designs/>
            <Card/>
        </>
    )
}

export default Home
