import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Advert from './components/Advert';
import Categories from './components/Categories';
import Brand from './components/Brand';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';

// import Category from './Pages/Categories';
// import Brands from './Pages/Brand';
// import Reviews from './Pages/Review';
// import Contacts from './Pages/Contact';

function App() {


  return (
    
      <div className='App'>
        <Navbar/>

        <div className='content'>

            <Home/>
            <About/>
          

          {/* <Route path='/categories'>
            <Category/>
          </Route>

          <Route path='/brand'>
            <Brands/>
          </Route>

          <Route path='/review'>
            <Reviews/>
          </Route>

          <Route path='/contact'>
            <Contacts/>
          </Route> */}
        </div>

      </div>
    
  )
}

export default App
