import type {NextPage} from 'next'
import Header from "../components/header/header";
import Main from "../components/main/main";
import About from "../components/about/about";
import Designs from "../components/designs/designs";

const Home: NextPage = () => {
    return (
        <>
            <Header/>
            <Main/>
            <About/>
            <Designs/>
        </>
    )
}

export default Home
