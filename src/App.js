import React from 'react'
import PostNewProduct from './pages/PostNewProduct';
import {Route} from 'react-router-dom'
import ListProduct from './pages/ListProducts';
import ProductDetail from './pages/ProductDetail';
import Navbar from './pages/Navbar';
import Register from './pages/Register';



class App extends React.Component{
  render(){
    return(
      <div>     
          <Navbar/>

        <div className='container-fluid mt-3'>

          <Route path = '/post'>
            <PostNewProduct/>
          </Route>

          <Route path = '/list'>
            <ListProduct/>
          </Route>

          <Route path = '/detail'>
            <ProductDetail/>
          </Route>

          <Route path = '/register'>
            <Register/>
          </Route>

        
        </div>
        
      </div>
    )
  }
  
}

export default App;
