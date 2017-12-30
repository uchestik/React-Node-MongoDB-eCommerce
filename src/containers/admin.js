import React,{Component} from 'react'
import CustomerHeader from '../components/customerHeader'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getProducts} from '../actions'

class Admin extends Component{
   
    componentDidMount(){
        this.props.getProducts();
    }
    
    productItem = (props)=>{
        const products = props.products.foundProducts;
        if(products && products.length > 0){
            return products.map((product)=>{
                return(
                    <div key={product._id} className='col-md-3' style={{marginBottom:10}}>
                        <div className='productWidth'>
                            <img width={200} height={200} src={`${product.image}`} />
                            <h4>{product.name}</h4>
                            <p>Manufactured by {product.manufacturer}</p>
                            <div className='row'>
                                <div className='col-md-6'>
                                    Sex:{product.sex}
                                </div>
                                <div className='col-md-6'>
                                    Size:{product.size}
                                </div>
                            </div>
                            <h5>Category:{product.category}</h5>
                            <div className='row'>
                                <Link className='btn btn-primary' to={`/admin/edit/${product._id}`}>EDIT</Link>
                            </div>
                        </div>
                    </div>
                )
            })
        }

    }
    
    
    
    
    render(){
        console.log(this.props.products)
        return(
            <div className='container'>
                <CustomerHeader />
                {this.productItem(this.props)}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        products:state.products
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({getProducts},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Admin);