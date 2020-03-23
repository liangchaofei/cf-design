import React from 'react';
import './index.less';

interface IProps{
    themeColor: string; //进度条颜色
    percent: number; // 进度值百分比
    autoHidden: boolean; //是否进度到100%时自动消失
    hiddenText: boolean; // 是否隐藏进度条文本
    width: string | number; // 进度条宽度
    textColor: string;  // 进度文本颜色
    statusScope: number[]; //状态阈值,分别设置不同进度范围的进度条颜色,最大允许设置3个值, 为一个二维数组
}

// 升序排序
let sortArr = (arr:any[]) => arr.sort((a,b) => a[0] - b[0])

// 检测值所对应的进度条颜色状态
function checkStatus(scope:any[], val:number, defaultColor:string) {
  val = +val
  // 从小到大排序
  sortArr(scope)

  if(scope.length === 1) {
    return val < scope[0][0] ? scope[0][1] : defaultColor
  }else if(scope.length === 2) {
    return val < scope[0][0] ? scope[0][1]
      : scope[0][0] < val && val < scope[1][0] ? scope[1][1]
        : defaultColor
  }else if(scope.length === 3) {
    return val < scope[0][0] ? scope[0][1]
      : scope[0][0] < val && val < scope[1][0] ? scope[1][1]
        : scope[1][0] < val && val < scope[2][0] ? scope[2][1]
          : defaultColor
  }
}

const Progress = React.memo((props: IProps) => {
    const {
        themeColor='blue',
        percent,
        autoHidden,
        hiddenText = false,
        width = '100px',
        textColor,
        statusScope
     } = props;
    return (
        autoHidden && percent ===100 ?null:
        <div className="cfProcessBox">
            <div className="cfProcessBar" style={{width:typeof width === 'number' ? width + 'px' : width}}>
                <div className="cfProcessBarTwo" style={{width:`${percent}%`,backgroundColor: statusScope && statusScope.length ? checkStatus(statusScope, percent, themeColor) : themeColor}}></div>
            </div>
            {
                !hiddenText && 
                <span className="cfProcessNum" style={{color:textColor}}>{percent}%</span>
            }
    
        </div>
    )
})

export default Progress;