import React from 'react';
import * as Fa from 'react-icons/fa';
import './index.less';

interface IProps{
    type:string;// icon类型
    size?:string;// icon大小(px，lg，xs)
    rotation?: number; // 旋转角度
    style?: any; // 图标样式
}
const Icon = React.memo((props:IProps) => {
    const {type,size,rotation,style} = props;
    // @ts-ignore
    const IconComponent = Fa[type]
    return (
        <IconComponent size={size} rotation={rotation} style={style} />
    )
})

export default Icon;