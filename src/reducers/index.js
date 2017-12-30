import React from 'react'
import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form';
import products from './productReducer'

const rootReducer = combineReducers({
    form:formReducer,
    products
})

export default rootReducer;