import { Header } from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Main  from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import ContentWrapper  from './Components/ContentWrapper/ContentWrapper';
import './App.scss'
 
function App() {
  

  return (
    <>
    <NavBar></NavBar>
    <Header></Header>
    {/* <ContentWrapper title='Tesst'></ContentWrapper> */}
    <Main></Main>
    <Footer></Footer>
      
    </>
  )
}

export default App
