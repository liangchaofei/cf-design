import React from 'react';
import './index.less';


const colorArr: any = {
    'success': '#52c41a',
    'warning': '#faad14',
    'error': '#f5222d',
    'default': '#d9d9d9',
    'processing': '#1890ff'
}

interface IProps {
    color: string; // 自定义小圆点的颜色
    count: number; // 展示的数字
    dot: boolean; // 不展示数字,只展示一个小圆点
    offset: any[];// 设置状态点的偏移
    overflowCount: number; //展示封顶的数字
    showZero: false; // 当数值为0时是否展示Badge
    status: string; // 设置badge为状态点, 类型有success|warning|error|default|processing
    text: string; // 当设置status时状态点的文本
}
const Badge = React.memo((props: IProps) => {
    const { color, count, dot, offset, overflowCount, showZero, status, text } = props;
    return (
        <div className="cfBadgeWrap">
            {
                status || color ? <div className="statusDotWrap">
                    <span className="dot" style={{ backgroundColor: color || colorArr[status] || colorArr.default }}></span>
                    {text}
                </div> :
                    <div>
                        <span
                            className={`badge  ${dot ? 'badgeDot' : ''}`}
                            style={{
                                right: offset ? offset[0] + 'px' : '',
                                top: offset ? offset[1] + 'px' : '',
                                display: !showZero && !count ? 'none' : 'inline-block',
                            }}
                        >
                            {!dot && (overflowCount && overflowCount < count ? `${overflowCount}+` : count)}
                        </span>
                        {text}
                    </div>
            }
        </div>
    )
})

export default Badge;