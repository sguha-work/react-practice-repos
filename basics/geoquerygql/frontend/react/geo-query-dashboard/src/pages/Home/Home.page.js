import LoginForm from "../../components/LoginForm/LoginForm.component";
import Header from "../../components/Header/Header.component";
function Home() {
    return (
        <>
        <Header></Header>
            <h3>Please provide a name and click submit to go to dashboard page</h3>
            <LoginForm></LoginForm>
        </>
    );
}
export default Home;