import React from 'react';
import './index.less';

interface IProps {
    isLoading: boolean; //加载中状态，默认为true
    loadingText: string; // 加载中的文本
    hiddenText: boolean; // 是否隐藏加载中的文本
    type: string; // 加载的类型,目前有ball和line两种
    bgColor: string; //加载动画的颜色
}

const Spin = React.memo((props: IProps) => {
    const { 
        isLoading = true, 
        loadingText='正在加载中...', 
        hiddenText = false, 
        type, 
        bgColor ='#06c'
    } = props;
    const spinType :any= {
        line: 'line'
      }
    return (
        isLoading ?
            <div className="cfSpinBox">
                <div className={`cfSpinLoading ball-spin-fade-loader${spinType[type] ? ' ' + spinType[type] : ''}`} style={{backgroundColor: bgColor}}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                {
                    !hiddenText && <div className="cfSpinTxt">{loadingText}</div>
                }
            </div> : null

    )
})

export default Spin;