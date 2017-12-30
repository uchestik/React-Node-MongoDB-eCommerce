import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import { Field, reduxForm} from 'redux-form';
import { postEditedProducts,getIndividualProduct,clearProductState } from '../actions';




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
        this.props.getIndividualProduct(this.props.match.params.productId)
        // this.setInitialState(this.props)
        setTimeout(()=>{
            this.setInitialState(this.props) 
        },200)
    }
    // componentWillReceiveProps(nextProps){
    //     this.setInitialState(this.props)
    
    // }
    
    componentWillUnmount(){
        this.props.clearProductState()
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
        },this.props.match.params.productId,()=>{
            this.props.history.push('/admin');
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
                                    defaultValue={product.name}
                                    onChange={(e)=>this.changeName(e)}
                                />
                            </div>
                            <div className='form-group col-md-6'>
                                <input
                                    className='form-control'
                                    placeholder='Product Category*'
                                    name='category'
                                    defaultValue={this.props.product.category}
                                    onChange={(e)=>this.changeCategory(e)}
                                />
                            </div>
                        </div>
    
                        <div className='form-row'>
                            <div className='form-group col-md-6'>
                                <input
                                className='form-control'
                                    placeholder='Sex*'
                                    name='sex'
                                    defaultValue={this.props.product.sex}
                                    onChange={(e)=>this.changeSex(e)}
                                />
                            </div>
                            <div className='form-group col-md-6'>
                                <input
                                className='form-control'
                                    placeholder='Enter Product Size S/M/L*'
                                    name='size'
                                    defaultValue={this.props.product.size}
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
                                    defaultValue={this.props.product.manufacturer}
                                    onChange={(e)=>this.changeManufacturer(e)}
                                />
                            </div>
                            <div className='form-group col-md-6'>
                                <input
                                className='form-control'
                                    placeholder='Enter image url*'
                                    name='image'
                                    defaultValue={this.props.product.image}
                                    onChange={(e)=>this.changeImage(e)}
                                />
                            </div>
                        </div>
                        
                        <div className='form-group'>
                                <textarea
                                className='form-control'
                                    placeholder='Enter business description ....'
                                    name='description'
                                    defaultValue={this.props.product.description}
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
        }else{
            return(
                <div>
                    Nothing Found
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

function mapStateToProps(state){
    return{
        success:state.data,
        product:state.products.individualProduct
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getIndividualProduct,postEditedProducts,clearProductState},dispatch)
}



export default connect( mapStateToProps,mapDispatchToProps )(Edit);