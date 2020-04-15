import React from 'react'
import Axios from 'axios'

class ProductDetail extends React.Component{
    state={
        data : null,
        showFormEdit : false,
        dataSelected : null
        
    }


    componentDidMount=()=>{
        this.getDataProduct()
                                
    }

    getDataProduct=()=>{
        let id = window.location.pathname.split('/')[2]
        Axios.get('http://localhost:4000/products/'+id)
        .then((res)=>{
            console.log(res)
            this.setState({data : res.data.data, dataSelected : res.data.data[0]})
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    saveBtnEditImage=(id)=>{
        let image = this.refs.image.files[0]
        
        if(image){
            if(window.confirm('Are You Sure Want To Change This Image')){
                let fd = new FormData()
                fd.append('product-images',image)
                Axios.patch('http://localhost:4000/products/image/'+ id, fd)
                .then((res)=>{
                    console.log(res.data)
                    alert(res.data.message)
                    this.refs.image.value = null
                    this.setState({showFormEdit : false})
                    this.getDataProduct()
                })
                .catch((err)=>{
                    console.log(err)
                })
            }
        }else{
            alert('Please insert your new image')
        }
    }

    onDeleteClickBtn=(id)=>{
        if(window.confirm('Are You Sure Want To Delete This Image?')){
            Axios.delete('http://localhost:4000/products/image/'+ id)
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


    renderListImage=()=>{
        let listImages = this.state.data
        listImages = listImages.filter((data)=>{
            return data.image_id !== this.state.dataSelected.image_id
        })

        return listImages.map((data,index)=>{
            return(                                
                <div key={index} className="col-md-2" style={{height:'120px'}}>
                    <div className="card h-100">
                        <img onClick={()=>this.setState({dataSelected : data})} className="card-img" style={{objectFit:'contain',height:'100%', cursor:'pointer'}} src={"http://localhost:4000/"+ data.image_url} alt="broken"/>
                    </div>
                </div>
            )
        })
    }
    

    render(){
        if(this.state.data === null || this.state.dataSelected === null) return <h1>Loading ...</h1>
        if(this.state.data.length === 0) return <h1>Data Kosong</h1>
        return(
            <div className="container my-3">
                <div className="row justify-content-center text-center">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header">
                                {this.state.data[0].name}  {this.state.dataSelected.image_id}
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Rp. {this.state.data[0].price}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {
                    this.state.showFormEdit ?
                        <div>
                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <div className='card-body'>
                                        <input type='file' ref='image' accept='image/*' className='form-control mt-3'/>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center mt-2">
                                <div className="btn btn-outline-primary mx-2" onClick={()=>this.saveBtnEditImage(this.state.dataSelected.image_id)}>Save</div>
                                <div className="btn btn-outline-danger mx-2" onClick={()=>this.setState({showFormEdit : false})}>Cancel</div>
                            </div>
                        </div>

                    :
                        <div className="row justify-content-center mt-2">
                            <div className="btn btn-outline-primary mx-2" onClick={()=>this.setState({showFormEdit : true})}>Edit Image</div>
                            <div className="btn btn-outline-danger mx-2" onClick={()=>this.onDeleteClickBtn(this.state.dataSelected.image_id)}>Delete Image</div>
                        </div>
                }

                <div className="row justify-content-center my-3">
                    <div className="col-md-6" style={{height:'50vh'}}>
                        <div className="card h-100">
                            <img style={{objectFit:'contain', height:'100%'}} width='100%' src={"http://localhost:4000/" + this.state.dataSelected.image_url} alt="broken"></img>
                        </div>
                    </div>
                </div>

                <div className="row my-5">
                    {this.renderListImage()}

                    {/* {
                
                        this.state.data.slice('1').map((data,index)=>{
                            return(                                
                                <div key={index} className="col-md-2" style={{height:'120px'}}>
                                    <div className="card h-100">
                                        <img onClick={()=>this.chagePrimaryImage(data)} className="card-img" style={{objectFit:'contain',height:'100%'}} src={"http://localhost:4000/"+ data.image_url} alt="broken"/>
                                    </div>
                                </div>
                            )
                        })
                    } */}

                    {/* <div className="col-md-2" style={{height:'120px'}}>
                        <div className="card h-100">
                            <img className="card-img" style={{objectFit:'cover',height:'100%'}} src="http://localhost:4000/4_public/PRD-IMG1586355676838.jpeg" alt="broken"/>
                        </div>
                    </div> */}

                </div>
            </div>
        )
    }
}

export default ProductDetail