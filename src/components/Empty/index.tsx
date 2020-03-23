import React from 'react';
import Icon from '../Icon'
import classnames from 'classnames';
import './index.less';
interface IProps {
    className: string; // 自定义类名
    src: string; //空状态的图片地址
    text: string; //空状态文本
}

const Empty = React.memo((props:IProps) => {
    const {className,src,text} = props;
    return (
        <div className={classnames(className,'cfEmptyBox')}>
            <div className="cfEmptyImg">
                {
                    src ?  <img src={src} /> : <Icon type="FaBatteryEmpty" />
                }
             
            </div>
            <div className="cfEmptyTxt">{text ? text : '空空的'}</div>
        </div>
    )
})


export default Empty;