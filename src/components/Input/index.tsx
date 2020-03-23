import React from 'react';
import classnames from 'classnames';
import './index.less'
const { memo, useState, useEffect } = React;

interface IProps {
    icon: boolean; // 是否带icon
    defaultValue: string; //输入框默认内容
    id: number | string | undefined; // 输入框id
    className: string; // 输入框类名
    style: Object; // 输入框样式
    placeholder: string; // 输入框占位符
    type: string; // 输入框类型
    autoFocus: boolean; //输入框是否自动聚焦
    value: string; // 输入框的值
    onChange: (val: string) => void; // 输入框变化时的回调
    onIconClick: (val: any) => void; // 当icon按钮点击时的回调
}

const Input = memo((props: IProps) => {
    const {
        icon,
        defaultValue,
        id,
        className,
        type = 'text',
        value,
        onChange,
        style,
        autoFocus,
        placeholder = '请输入内容',
        onIconClick
    } = props
    let textInput: any = React.createRef()
    const handleChange = (e: any) => {
        onChange && onChange(e.target.value)
    }

    const handleIconClick = () => {
        onIconClick && onIconClick(textInput.current.value)
    }
    useEffect(() => {
        autoFocus && textInput.current.focus()
    }, [])
    return (
        <div className="cfInputBox">
            <input
                className={classnames('cfInputInner', className)}
                type={type}
                // @ts-ignore
                id={id}
                // @ts-ignore
                ref={textInput}
                style={style}
                placeholder={placeholder}
                value={value || typeof value === 'undefined' ? defaultValue : ''}
                onChange={handleChange}
            />
            {
                icon && <span className="cfIconInput" onClick={handleIconClick}>{icon}</span>
            }
        </div>
    )
})

export default Input;