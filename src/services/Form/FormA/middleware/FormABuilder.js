/***
 * backend post -> collectionName = FORM-A 
 * document Name ->form-a-builder ->{
 *  sections{
 *   fields:[],
 *    sectionName:string
 *  }
 * }
 */


 import axios from 'axios';
import {
    setStateAction,
  } from '../actions/actionCreators'


 export const _set_state = (obj) => (dispatch) => {
    dispatch(setStateAction(obj));
  };

//TODO: FromATemplate -> data
/***
 * @param payload
 * @abstract 
 * documentName :string
 * collectionName:string
 * ...Remaining data
 */
export const createForm=(payload)=>(dispatch)=>{
 return axios.post("/formbuilder/create-formBuilder",payload).then((msg)=>{
  

 }).catch((err)=>{
   console.error(err)
 })
}