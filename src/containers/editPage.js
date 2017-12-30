import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import { Field, reduxForm} from 'redux-form';
import {getIndividualProduct,clearProductState } from '../actions';
import Edit from './edit'




class EditPage extends Component{
    

    componentDidMount(){
        this.props.getIndividualProduct(this.props.match.params.productId)
    }
  
    
    componentWillUnmount(){
        this.props.clearProductState()
    }

    redirect = ()=>{
        this.props.history.push('/admin')
    } 
    
    renderForm=()=>{
        const {product} = this.props;
        // setTimeout((product)=>{
            if(product){
                return(
                    <div>
                        <Edit redirect={this.redirect}  productId={this.props.match.params.productId} product={product}/>
                    </div>
                )
            }  
        // },1000)
    }

    render(){
        return(
            <div>
                {this.renderForm()}
            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        product:state.products.individualProduct
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getIndividualProduct,clearProductState},dispatch)
}



export default connect( mapStateToProps,mapDispatchToProps )(EditPage);