import React from 'react';
import ReactDOM from 'react-dom'
import './index.less'

const { memo, useState, useEffect } = React;

interface IProps {
    visible: boolean; // 抽屉是否可见
    closable: boolean; // 是否显示抽屉右上角关闭按钮
    destroyOnClose: boolean; // 是否关闭时销毁里面的子元素
    getContainer: any; // 指定 Drawer 挂载的 HTML 节点, false 为挂载在当前 dom
    maskClosable: boolean; // 点击蒙层是否允许关闭抽屉
    mask: boolean; // 是否显示遮罩
    drawerStyle: Object; // 用来设置抽屉弹出层样式
    width: number | string; // 弹出层宽度
    zIndex: number; // 弹出层的层级
    placement: string; // 抽屉方向
    onClose: () => void; // 点击关闭按钮的回调
    children: any; // dom
}

const Drawer = memo((props: IProps) => {
    const {
        closable = true,
        destroyOnClose,
        getContainer = document.body,
        maskClosable = true,
        mask = true,
        drawerStyle,
        width = 300,
        zIndex = 10,
        placement = 'right',
        onClose,
        children
    } = props;

    const [visible, setVisible] = useState(props.visible);
    const [isDesChild, setIsDesChild] = useState<boolean>(false)

    const handleClose = () => {
        onClose && onClose()
        setVisible((prev) => {
          if(getContainer !== false && prev) {
            getContainer.style.overflow = 'auto'
          }
          return false
        })
        if(destroyOnClose) {
          setIsDesChild(true)
        }
      }
    
      useEffect(() => {
        setVisible(() => {
          if(getContainer !== false && props.visible) {
            getContainer.style.overflow = 'hidden'
          }
          return props.visible
        })
        setIsDesChild(false)
      }, [props.visible, getContainer])

    const childDom = (
        <div
            className="cfDrawerBox"
            style={{
                position: getContainer === false ? 'absolute' : 'fixed',
                width: visible ? '100%' : 0,
                zIndex
            }}
        >
            // @ts-ignore
            {!!mask && <div className="cfDrawerMask" onClick={maskClosable ? handleClose : null}></div>}
            <div
                className="cfDrawerContent"
                style={{
                    width,
                    [placement]: visible ? 0 : '-100%',
                    ...drawerStyle
                }}
            >
                {
                    isDesChild ? null : children
                }
                {
                    !!closable && <span className="cfCloseBtn" onClick={handleClose}>X</span>
                }
            </div>
        </div>
    )
    return getContainer === false ? childDom : ReactDOM.createPortal(childDom, getContainer)

})

export default Drawer;