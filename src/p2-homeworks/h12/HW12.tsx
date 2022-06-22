import React from "react";
import s from "./HW12.module.css";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {useDispatch, useSelector} from "react-redux";
import {ReducersType} from "../h10/bll/store";
import {changeThemeAC, ThemeType} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";


const themes = ['dark', 'red', 'some'];

function HW12() {

    const theme = useSelector<ReducersType, ThemeType>(state => state.theme.theme)
    // useDispatch, onChangeCallback
    const dispatch = useDispatch()
    const callBack = (option: any) => {
        dispatch(changeThemeAC(option))

    }

    return (
        <div className={'inner'}>
            <div className={s[theme]}>

            <span className={s[theme + '-text']}>
               <SuperSelect options={themes}  onChangeOption={callBack}/>
            </span>

                {/*should work (должно работать)*/}
                {/*SuperSelect or SuperRadio*/}

            </div>
        </div>

    );
}

export default HW12;
