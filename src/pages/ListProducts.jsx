import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

class ListProduct extends React.Component{
    state = {
        dataProduct : []
    }

    componentDidMount=()=>{
        this.getDataProduct()
    }

    onDeleteProductBtn = (id) =>{
       if(window.confirm('Are You Sure Want To Delete This Product?')){
           Axios.delete('http://localhost:4000/products/' + id)
           .then((res)=>{
               console.log(res)
               alert(res.data.message)
               this.getDataProduct()
           })
           .catch((err)=>{
               console.log(err)
           })
       }
    }

    renderListProduct=()=>{
    
        var output = this.state.dataProduct.map((val,index)=>{
               return <div key={val.product_id} className="col-md-5 my-4 mx-3">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="card">
                                <img style={{objectFit:'cover', objectPosition:'top'}} alt='broken' width='100%' src={'http://localhost:4000/'+ val.image_url}/>
                            </div>
                        </div>
                        <div className="col-md-5 p-2">                                
                            <div className="row justify-content-center">
                                <div className='mb-2 w-100 text-center' style={{fontSize:'25px'}}>{val.name}</div>
                                <div className='mb-2 w-100 text-center' style={{fontSize:'20px'}}>Rp. {val.price}</div>
                                <Link to={'/detail/' + val.product_id}>
                                    <div className="btn btn-outline-primary mr-2">See Detail</div>
                                </Link>
                                <div className="btn btn-outline-danger" onClick={()=>this.onDeleteProductBtn(val.product_id)}>Delete</div>
                            </div>
                        </div>
                    </div>
                </div>
        })
        return output
    }

    getDataProduct=()=>{
        Axios.get('http://localhost:4000/products')
        .then((res)=>{
            console.log(res.data.data)
            let sudahAda
            let newData = []
            res.data.data.forEach((val)=>{
                sudahAda = false
                for(var i = 0; i < newData.length ; i++){
                    if(val.product_id === newData[i].product_id){
                        sudahAda = true
                        break;
                    }
                }
                if(!sudahAda) newData.push(val)
            })
            console.log(newData)
            this.setState({dataProduct : newData})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render(){
        if(this.state.dataProduct === null){
            return(
                <h1>Loading . . . </h1>
            )
        }
        if(this.state.dataProduct === 0){
            return(
                <h1>Data Masih Kosong . . .</h1>
            )
        }
        return(
            <div>
                <div className="container my-5">
                    <div className="row justify-content-between">

                        {/* <div className="col-md-5 my-4 mx-3">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="card">
                                        <img style={{objectFit:'cover', objectPosition:'top'}} alt='broken' width='100%' src='https://cf.shopee.co.id/file/4673d7756b39d65fa8b75102fe68b9ec'/>
                                    </div>
                                </div>
                                <div className="col-md-5 p-2">                                
                                    <div className="row justify-content-center">
                                        <div className='mb-2 w-100 text-center' style={{fontSize:'25px'}}>Apel Fuji</div>
                                        <div className='mb-2 w-100 text-center' style={{fontSize:'20px'}}>Rp. 300000</div>
                                        <div className="btn btn-outline-primary mr-2">See Detail</div>
                                        <div className="btn btn-outline-danger">Delete</div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {this.renderListProduct()}


                    </div>
                </div>
            </div>

            
        )
    }
}

export default ListProduct