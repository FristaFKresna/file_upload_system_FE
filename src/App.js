import React from 'react'
import PostNewProduct from './pages/PostNewProduct';
import {Route} from 'react-router-dom'
import ListProduct from './pages/ListProducts';
import ProductDetail from './pages/ProductDetail';
import Navbar from './pages/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductDetail02 from './pages/productDetail_02';



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

          <Route path = '/detail-02'>
            <ProductDetail02/>
          </Route>

          <Route path = '/register'>
            <Register/>
          </Route>

          <Route path = '/login'>
            <Login/>
          </Route>

        
        </div>

      </div>
    )
  }
  
}

export default App;
