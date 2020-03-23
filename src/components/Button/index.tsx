import React from 'react';
import './index.less'

interface IProps {
    className?: string; // 自定义类名
    children?: any;
    onClick?: () => void; // 点击事件
    type?: string; //按钮类型 primary
    shape?: string; //按钮形状circle
    block?:boolean; // 是否块状
}
const Button = React.memo((props: IProps) => {
    const { children, onClick, type, shape, block ,className } = props;
    return (
        <div className={`cfBtn ripple ${type} ${shape} ${block === true ? 'block':'' } ${className}`} onClick={onClick}>
            {children}
        </div>
    )
})


export default Button;
