import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import { postEditedProducts } from '../actions';




class Edit extends Component{
    constructor(props){
        super(props);

        this.state={
            name:'',
            category:'',
            sex:'',
            manufacturer:'',
            description:'',
            size:'',
            image:''

        }

        this.setInitialState = this.setInitialState.bind(this)
    }

    componentDidMount(){
        // setTimeout(()=>{
            this.setInitialState(this.props) 
        // },200) 
    }
   


    submit(event,state){
        event.preventDefault();
        this.props.postEditedProducts({
            name:state.name,
            category:state.category,
            sex:state.sex,
            manufacturer:state.manufacturer,
            description:state.description,
            size:state.size,
            image:state.image
        },this.props.productId,()=>{
            this.props.redirect();
        });
     
    }

    setInitialState=(props)=>{
        const {product} = props;
        if(product){
            this.setState({
                name:product.name,
                category:product.category,
                sex:product.sex,
                manufacturer:product.manufacturer,
                description:product.description,
                size:product.size,
                image:product.image
            })
        }
    }

    changeName=(e)=>{
        this.setState({
            name: e.target.value
        })
    }
    changeCategory=(e)=>{
        this.setState({
            category: e.target.value
        })
    }
    changeSex=(e)=>{
        this.setState({
            sex: e.target.value
        })
    }
    changeManufacturer=(e)=>{
        this.setState({
            manufacturer: e.target.value
        })
    }
    changeDescription=(e)=>{
        this.setState({
            description: e.target.value
        })
    }
    changeSize=(e)=>{
        this.setState({
            size: e.target.value
        })
    }
    changeImage=(e)=>{
        this.setState({
            image: e.target.value
        })
    }

    renderForm=()=>{
        const {product} = this.props;
        if(product){
            return(
                <div className='container'>
                <div className='col-md-12 col-sm-12 col-xs-12 text-center'>
                    <h3 id='signIn_form_header'>Edit {this.props.product.name}</h3>
                    <form onSubmit={(event)=>this.submit(event,this.state)}>
                        <div className='form-row'>
                            <div className='form-group col-md-6'>
                                <input
                                    className='form-control'
                                    placeholder='Product Name*'
                                    name='name'
                                    value={this.state.name || this.props.product.name  }
                                    onChange={(e)=>this.changeName(e)}
                                />
                            </div>
                            <div className='form-group col-md-6'>
                                <input
                                    className='form-control'
                                    placeholder='Product Category*'
                                    name='category'
                                    value={this.state.category || this.props.product.category}
                                    onChange={(e)=>this.changeCategory(e)}
                                />
                            </div>
                        </div>
    
                        <div className='form-row'>
                            <div className='form-group col-md-6'>
                                <input
                                className='form-control'
                                    placeholder='Sex M/F*'
                                    name='sex'
                                    value={this.state.sex|| this.props.product.sex}
                                    onChange={(e)=>this.changeSex(e)}
                                />
                            </div>
                            <div className='form-group col-md-6'>
                                <input
                                className='form-control'
                                    placeholder='Enter Product Size S/M/L*'
                                    name='size'
                                    value={this.state.size || this.props.product.size}
                                    onChange={(e)=>this.changeSize(e)}
                                />
                            </div>
                        </div>
    
                        <div className='form-row'>
                            <div className='form-group col-md-6'>
                                <input
                                className='form-control'
                                    placeholder='Enter Product Manufacturer*'
                                    name='manufacturer'
                                    value={this.state.manufacturer || this.props.product.manufacturer}
                                    onChange={(e)=>this.changeManufacturer(e)}
                                />
                            </div>
                            <div className='form-group col-md-6'>
                                <input
                                className='form-control'
                                    placeholder='Enter image url*'
                                    name='image'
                                    value={this.state.image || this.props.product.image}
                                    onChange={(e)=>this.changeImage(e)}
                                />
                            </div>
                        </div>
                        
                        <div className='form-group'>
                                <textarea
                                className='form-control'
                                    placeholder='Enter business description ....'
                                    name='description'
                                    value={this.props.product.description}
                                    onChange={(e)=>this.changeDescription(e)}
                                />
                        </div>
                        <button type="submit" className="btn btn-primary submit" style={{marginRight:15}}>Submit</button>
                        <Link to='/admin'><button type='button' className='btn btn-danger'>Cancel </button></Link>
                    </form><br/><br/>
    
                    <span  className='copyright'>Copyright <i  className="fa fa-copyright" aria-hidden="true"></i> 2017 <br/>v1 Project</span><br /> <br/>
    
                </div>
                </div>
            )
        }
    }

    render(){
        // console.log(this.props.product)
        console.log(this.state)
        return(
            <div>
                {this.renderForm()}
            </div>
        )
    }

}

// const validate = (values)=>{
//     const errors={}

//     if(!values.name){
//         errors.name = 'Product name required'
//     }
//     if(!values.category){
//         errors.category = 'Product category required'
//     }
//     if(!values.sex){
//         errors.sex='Sex Required'
//     }
//     if(!values.size){
//         errors.size='Size Required'
//     }
//     if(!values.manufacturer){
//         errors.manufacturer='Manufacturer Required'
//     }
//     if(!values.image){
//         errors.image='Image URL Required'
//     }
//     if(!values.description){
//         errors.description='Product description Required'
//     }
//     return errors;
// }

// function mapStateToProps(state){
//     return{
//         success:state.data,
//         product:state.products.individualProduct
//     }
// }

function mapDispatchToProps(dispatch){
    return bindActionCreators({postEditedProducts},dispatch)
}



export default connect( null,mapDispatchToProps )(Edit);