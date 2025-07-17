import Advantage from './components/Advantage';
import Navbar from './components/Navbar';
import Main from './components/main';
import Main2 from './components/Main2';
import Main3 from './components/Main3';
import Main4 from './components/Main4';
import Foter from './components/Foter';
import Carousel from './components/Carousel';


function App() {
  return (
    <>
      <Navbar />
       <div className=" overflow-hidden">
      <Carousel />
    </div>
      <Advantage/>
      <Main/>
      <Main2/>
      <Main3/>
      <Main4/>
      <Foter/>
    </>
  )
}
export default App
