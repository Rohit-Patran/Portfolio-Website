import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Projects from "./components/projects/Projects";

const App = () => {
  return <div>
    <Intro/>
    <About/>
    <ProductList/>
    <Projects/>
    <Contact/>
        </div>;
};

export default App;