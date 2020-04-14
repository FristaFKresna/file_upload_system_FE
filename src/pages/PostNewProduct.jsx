import React from 'react'
import Axios from 'axios'

class PostNewProduct extends React.Component{
    onBtnSumbitClick = () => {
        let name = this.refs.name.value
        let price = Number(this.refs.price.value)
        let images = this.refs.images.files
        let data = {
          name, price
        }
    
        //check if there is null value
        if(name && price && images){
          let fd = new FormData()
          for(let i = 0; i < images.length; i++){
            // fd.append 'fieldname', 'value/file/text'
            fd.append('product-images',images[i] )
          }
          //convert json to string
          fd.append('data', JSON.stringify(data))
    
          //post fd ke root yang kita bikin
          Axios.post('http://localhost:4000/products', fd)
          .then((res)=>{
            console.log(res.data)
            alert(res.data.message)
            this.refs.name.value =''
            this.refs.price.value = null
            this.refs.images.value = null
          })
          .catch((err)=>{
            console.log(err)
          })
    
        }else{
          alert('error')
        }
    
    
      }
    
    
      render(){
        return(
          <div className='container pt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-4 card'>
                <h5 className='card-title'>Post Product</h5>
                <div className='card-body'>
                  <input type='text' ref="name" placeholder='product name' className='form-control'/>
                  <input type='number' ref="price" placeholder='product price' className='form-control mt-3'/>
                  <input type='file' ref='images' multiple='multiple' accept='image/*' className='form-control mt-3'/>
                  <input type='button' className='btn btn-outline-primary mt-3' value='submit' onClick={this.onBtnSumbitClick}/>
                </div>
                </div>
            </div>
          </div>
        )
      }
}

export default PostNewProduct