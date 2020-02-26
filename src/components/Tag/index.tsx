import React from 'react';
import classnames from 'classnames'
import './index.less';

interface IProps{
    closable: boolean; // 是否可关闭
    onClose: () => void; // 标签关闭时的回调
    color: string; //标签的颜色,不设置则为默认颜色
    text: string; // 标签内容
}

const Tag = React.memo((props:IProps) => {
    const {
        closable=false,
        color='blue',
        onClose,
        text='标签'
    } = props;
    let tag = React.createRef()
    const closeTag = () => {
        onClose && onClose()
        // @ts-ignore
        tag.current.style.display = 'none'
    }
    return (
        // @ts-ignore
        <div ref={tag} className={classnames('cfTagBox',color ? 'cfTagHasColor' : '')} style={{background:color}}>
            <span className="cfTagText">{text}</span>
            {
                closable && <span onClick={closeTag} className="cfTagBtn">x</span>
            }
            
        </div>
    )
})


export default Tag;