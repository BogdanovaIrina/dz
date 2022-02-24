import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

const themes:themeType[] = ['dark', 'red', 'some'];

export type themeType = 'dark' | 'red' | 'some'

function HW12() {

    const theme = useSelector<AppStoreType, themeType>(state => state.theme.theme)

    const dispatch = useDispatch()

    const onChangeCallback = (theme:themeType) => dispatch(changeThemeC(theme))

    return (
        <div className={s[theme]}>
            <hr/>
            <hr/>
            <span className={s[theme + '-text']}>homeworks 12 </span>

            {/*should work (должно работать)*/}

            <SuperSelect options={themes} onChangeOption={onChangeCallback}/>

            <hr/>
            <hr/>
        </div>
    );
}

export default HW12;