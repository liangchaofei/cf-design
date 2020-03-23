import React from 'react';
import classnames from 'classnames';
import './index.less';

interface IProps {
    checked: boolean; // 是否被选中
    disabled: boolean; // 是否被禁用
    onText: string; //开启状态的文本
    offText: string; // 关闭状态的文本
    onChange: (e:any) => void; // 状态切换时的文本
    size: string; // 组件的尺寸
    color: string; // 颜色
}

const Siwtch = React.memo((props:IProps) => {
    const {
        checked,
        disabled,
        onText,
        offText,
        onChange,
        size,
        color = '#09f'
    } = props;
    let handleChange = (e:any) => {
        e.persist()
        onChange && onChange(e.target.checked)
      }
    return (
        <div className={classnames('xSwitch')}>
          
        <label className={classnames('xSwitchInner', size)} 
          // @ts-ignore
        style={{pointerEvents: disabled ? 'none' : 'default', cursor: disabled ? 'not-allowed' : 'pointer'}}>
          <input type='checkbox' checked={checked} onChange={handleChange} />
          <span 
            className="xSwitchAnimatingNode"
            style={{ backgroundColor: color }} data-onText={onText}>
          </span>
          <span className="offText">{ offText }</span>
        </label>
      </div>
    )
})

export default Siwtch;