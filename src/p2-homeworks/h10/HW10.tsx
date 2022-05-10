import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import loader from './img/loader.svg'
import {useDispatch, useSelector} from "react-redux";
import {ReducersType} from "./bll/store";
import {InitStateType, loadingAC} from "./bll/loadingReducer";
import {Simulate} from "react-dom/test-utils";



function HW10() {


    let isLoading = useSelector<ReducersType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()


    const setLoading = () => {
        dispatch(loadingAC(true))

        setTimeout(()=> {
            dispatch(loadingAC(false))

        },2000)
    };

    return (
        <div className='inner'>
            <h2 className='title'>
                homeworks 10
            </h2>

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div className='hwInner'>
                        <img src={loader} alt=""/>
                    </div>
                ) : (
                    <div className='hwInner'>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

        </div>
    )
}

export default HW10
