import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm} from 'redux-form';
import { postNewProducts } from '../actions';




class Upload extends Component{
    

    submit(values){
        this.props.postNewProducts(values,()=>{
            this.props.history.push('/');
        });
     
    }

    renderInputField(field){
        const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error':''}`

        return(
            <div className={className}>
                <input
                type='text'
                className='form-control'
                placeholder={field.placeholder}
                {...field.input}
                />
                <div className='error'>
                    {field.meta.touched ? field.meta.error:''}
                </div>
            </div>
        )
    }

  

    renderTextAreaField(field){
        const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error':''}`

        return(
            <div className={className}>
                <textarea
                type='text'
                rows='5'
                className='form-control text-area'
                placeholder={field.placeholder}
                {...field.input}
                />
                <div className='error'>
                    {field.meta.touched ? field.meta.error:''}
                </div>
            </div>
        )
    }



    render(){
        
        return(
            <div className='container'>
            <div className='col-md-12 col-sm-12 col-xs-12 text-center'>
                <h3 id='signIn_form_header'>Add a product to the Database</h3>
                <form onSubmit={this.props.handleSubmit((event)=>this.submit(event))}>
                    <div className='form-row'>
                        <div className='form-group col-md-6'>
                            <Field
                                placeholder='Product Name*'
                                name='name'
                                component={this.renderInputField}
                            />
                        </div>
                        <div className='form-group col-md-6'>
                            <Field
                                placeholder='Product Category*'
                                name='category'
                                component={this.renderInputField}
                            />
                        </div>
                    </div>

                    <div className='form-row'>
                        <div className='form-group col-md-6'>
                            <Field
                                placeholder='Sex M/F*'
                                name='sex'
                                component={this.renderInputField}
                            />
                        </div>
                        <div className='form-group col-md-6'>
                            <Field
                                placeholder='Enter Product Size S/M/L*'
                                name='size'
                                component={this.renderInputField}
                            />
                        </div>
                    </div>

                    <div className='form-row'>
                        <div className='form-group col-md-6'>
                            <Field
                                placeholder='Enter Product Manufacturer*'
                                name='manufacturer'
                                component={this.renderInputField}
                            />
                        </div>
                        <div className='form-group col-md-6'>
                            <Field
                                placeholder='Enter image url*'
                                name='image'
                                component={this.renderInputField}
                            />
                        </div>
                    </div>
                    
                    <div className='form-group'>
                            <Field
                                placeholder='Enter business description ....'
                                name='description'
                                component={this.renderTextAreaField}
                            />
                    </div>
                    <button type="submit" className="btn btn-primary submit" style={{marginRight:15}}>Submit</button>
                    <Link to='/'><button type='button' className='btn btn-danger'>Cancel </button></Link>
                </form><br/><br/>

                <span  className='copyright'>Copyright <i  className="fa fa-copyright" aria-hidden="true"></i> 2017 <br/>v1 Project</span><br /> <br/>

            </div>
            </div>
        )
    }
}

function validate(values){
    const errors={}

    if(!values.name){
        errors.name = 'Product name required'
    }
    if(!values.category){
        errors.category = 'Product category required'
    }
    if(!values.sex){
        errors.sex='Sex Required'
    }
    if(!values.size){
        errors.size='Size Required'
    }
    if(!values.manufacturer){
        errors.manufacturer='Manufacturer Required'
    }
    if(!values.image){
        errors.image='Image URL Required'
    }
    if(!values.description){
        errors.description='Product description Required'
    }
    return errors;
}

function mapStateToProps(state){
    return{
        success:state.data
    }
}

export default reduxForm({validate, form:'Upload'}) (
    connect(mapStateToProps,{postNewProducts})(Upload)
)