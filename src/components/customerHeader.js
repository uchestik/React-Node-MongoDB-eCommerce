import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {advancedSearch,getProducts} from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class CustomerHeader extends Component{
    constructor(props){
        super(props);

        this.state={
            name:'',
            categories:'',
            sex:''
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.advancedSearch(this.state.name,this.state.categories,this.state.sex);
        this.setState({
            name:'',
            categories:'',
            sex:''
        })
    }

    cancelSearch = ()=>{
        this.props.getProducts();
    }

    nameQuery = (e)=>{
        this.setState({
            name:e.target.value
        })
    }
    categoriesQuery = (e)=>{
        this.setState({
            categories:e.target.value
        })
    }
    sexQuery = (e)=>{
        this.setState({
            sex:e.target.value
        })
    }

    render(){
        return(
            <div>
                <nav  className="navbar navbar-inverse">
                    <div  className="container">
                        <div className="navbar-header">
                        <Link  className="navbar-brand" to="/">V1 eCommerce</Link>
                        </div>
                        <ul  className="nav navbar-nav">
                        <li  ><Link to="/admin">Admin</Link></li>
                        <li  ><Link to="/">Customer</Link></li>
                        <li  ><Link to="/upload">Upload to database</Link></li>
                        </ul>
                        <form  className="navbar-form navbar-left" onSubmit={(e)=>this.handleSubmit(e)}>
                        <div  className="form-row">
                            <div className='col-md-3'>
                            <input type="text"  className="form-control" placeholder="Search Product Name" name="name" 
                            value={this.state.search} onChange={(e)=>this.nameQuery(e)}/>
                            </div>
                            <div className='col-md-3'>
                            <input type="text"  className="form-control" placeholder="Search Categories" name="categories" 
                            value={this.state.categories} onChange={(e)=>this.categoriesQuery(e)}/>
                            </div>
                            <div className='col-md-3'>
                            <input type="text"  className="form-control" placeholder="Search by Sex M/F" name="sex" 
                            value={this.state.sex} onChange={(e)=>this.sexQuery(e)}/>
                            </div>
                            <div  className="col-md-2">
                            <button  className="btn btn-success" type="submit">
                                Advanced Search
                            </button>
                            </div>
                            <div  className="col-md-1">
                            <button  className="btn btn-danger" type="button" onClick={()=>this.cancelSearch()}>
                                Cancel Search
                            </button>
                            </div>
                        </div>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({advancedSearch,getProducts},dispatch)
}

export default connect(null,mapDispatchToProps)(CustomerHeader);