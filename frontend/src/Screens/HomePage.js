import Menu from "../component/Menu";
import Category from "../component/Category";
import Slide from "../component/SlideOffre"
import Product from "../component/products";


function Home() {
  return (

         <div className="container">
              <Menu />
            
               <div className="row" style={{marginBottom : '7%'}}>
                    <Category />
                    <Slide />
               </div>
               
                <Product />
         </div>
  );
}

export default Home;