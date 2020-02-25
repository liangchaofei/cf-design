import React from 'react';
import './index.less'
const { useState, useEffect} = React;

interface IProps {
  afterClose:any; //Modal完全关闭后的回调
  bodyStyle:object; //Modal body的样式
  cancelText: string | any; // 取消按钮文字
  centered: boolean; // 是否居中展示Modal
  closable: boolean; // 是否展示右上角的关闭按钮
  closeIcon:any; // 自定义关闭图标
  destroyOnClose: boolean; // 是否关闭时销毁Modal里的子元素
  footer:null | any; //底部内容，当不需要底部默认按钮时，可以设置为footer={null}
  keyboard: boolean; //是否支持键盘的esc键退出
  mask: boolean; // 是否展示遮罩
  maskclosable: boolean; // 点击蒙层是否允许关闭
  maskStyle: any; //遮罩样式
  okText: string | any; // 确认按钮的文本
  title: string | any; // 标题
  visible: boolean; // Modal是否可见
  width: string; // Modal宽度
  onCancel: any; //点击遮罩或者取消按钮，或者键盘esc按键时的回调
  onOk: any; // 点击确定的回调
  children: any;
}

let hiddenCount = 0;
const Modal = React.memo((props:IProps) => {
  const {
    afterClose,
    bodyStyle,
    cancelText = '取消',
    centered,
    closable = true,
    closeIcon,
    destroyOnClose,
    footer,
    keyboard,
    mask = true,
    maskclosable = true,
    maskStyle,
    okText = '确认',
    title,
    visible = false,
    width = '520px',
    onCancel,
    onOk,
    children
  } = props;
  let [isHidden,setHidden] = useState<boolean>(!visible)
  let [destroyChild,setDestoryChild] = useState<boolean>(false)
  const handleClose = () => {
    hiddenModal(onCancel)
  }

  useEffect(() => {
    if(visible && destroyOnClose){
      setDestoryChild(true)
    }
  },[visible,destroyOnClose])


  const closeModal = function (event) {
    let e = event || window.event || arguments.callee.caller.arguments[0]
    if (e && e.keyCode === 27) { 
      handleClose()
    }
  }
  useEffect(() => {
    document.addEventListener('keydown',closeModal,false)
    return () => {
      document.removeEventListener('keydown',closeModal,false)
    }
  },[])

  useEffect(() => {
    if(isHidden && hiddenCount){
      hiddenCount = 0;
      afterClose && afterClose()
    }
    hiddenCount = 1;
  },[isHidden])

  useEffect(() => {
    if(!isHidden) {
      document.body.style.overflow = 'hidden'
    }
  }, [isHidden])
  
  const hiddenModal = (cb) => {
    setHidden(() => {
      cb && cb()
      return true;
    })
    if(destroyOnClose){
      setDestoryChild(true)
    }
    document.body.style.overflow = 'auto';
  }
  // 成功回调
  const handleOk = () => {
    hiddenModal(true)
  }
  return (
    <div className="xModalWrap" style={{display: isHidden ? 'none':'block'}}>
      <div className={`xModalContent${centered ?' xCentered': ''}`} style={{width}}>
        <div className="xModalHeader">
          <div className="xModalTitle">
            {title}
          </div>
        </div>
        {
          closable && 
          <span className="xModalCloseBtn">
            {closeIcon }
          </span>
        }
        <div className="xModalBody" style={bodyStyle}>
          {destroyChild ? null :children}
        </div>
        {
          footer === null ? null :
          <div className="xModalFooter">
            {
              footer ? footer:
              <div className="xFooterBtn">
                <div className="xFooterBtnCancel" onClick={handleClose}>{cancelText}</div>
                <div className="xFooterBtnOk" onClick={handleOk}>{okText}</div>
              </div>
            }
          </div>
        }
       
      </div>
      {
        mask && <div className="xModalMask" style={maskStyle} onClick={maskclosable && handleClose}></div>
      }
  </div>
  )
})

export default Modal;