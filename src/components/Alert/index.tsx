import React from 'react';
import './index.less'
const { useState, useEffect } = React;

interface IProps {
    style: Object; // 自定义样式
    closable: boolean; // 是否显示关闭按钮，默认不显示
    closeText: string | any; // 自定义关闭按钮
    message: string; // 警告提示内容
    description: string; // 警告提示的辅助性文字
    type: string; // 警告的类型
    onClose: () => void; // 关闭时触发的事件
}


const Alert = React.memo((props: IProps) => {
    const {
        type = 'warn',
        closable = false,
        message,
        description,
        closeText,
        onClose,
        style
    } = props;
    const [visible, setVisible] = useState<boolean>(true)

    const closeCb = () => {
        setVisible(false)
        onClose && onClose()
    }
    const [typeStyle, setType] = useState<string>('success')
    useEffect(() => {
        switch (type) {
            case 'success':
                setType('cfAlertSuccessStyle')
                break;
            case 'error':
                setType('cfAlertErrorStyle')
                break;
            case 'info':
                setType('cfAlertInfoStyle')
                break;
            case "warn":
                setType('cfAlertWarnStyle')
                break;
            default:
                setType('cfAlertSuccessStyle')
                break;
        }
    }, [typeStyle])
    return (
        <div className={`cfAlertBox ${typeStyle}`} style={{ display: visible ? "block" : "none", ...style }}>
            <div className="cfAlertMsg">{message}</div>
            <div className="cfAlertHelp">{
                description
            }</div>
            {
                closable &&
                <span className="cfAlertClose" onClick={closeCb}>{closeText ? closeText : 'x'}</span>
            }

        </div>
    )
})

export default Alert;