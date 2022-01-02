import type {NextPage} from 'next'
import Header from "../components/header/header";
import UserInfo from "../components/main/userInfo/userInfo";

const Home: NextPage = () => {
    return (
        <>
        <Header/>
        <UserInfo/>
        </>
    )
}

export default Home
