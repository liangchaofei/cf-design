(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/components/Icon/index.less":function(A,e,t){},"./src/components/Icon/index.tsx":function(A,e,t){"use strict";var n=t("react"),a=t.n(n),g=t("./node_modules/react-icons/fa/index.esm.js"),c=(t("./src/components/Icon/index.less"),a.a.memo((function(A){var e=A.type,t=A.size,n=A.rotation,c=A.style,s=g[e];return a.a.createElement(s,{size:t,rotation:n,style:c})})));e.a=c,"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/index.tsx"}})},"./src/components/Input/index.less":function(A,e,t){},"./src/components/Input/index.mdx":function(A,e,t){"use strict";t.r(e);var n=t("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=t("react"),g=t.n(a),c=t("./node_modules/@mdx-js/react/dist/esm.js"),s=t("./node_modules/father/node_modules/docz/dist/index.esm.js"),b=t("./node_modules/classnames/index.js"),o=t.n(b),l=(t("./src/components/Input/index.less"),g.a.memo),r=(g.a.useState,g.a.useEffect),i=l((function(A){var e=A.icon,t=A.defaultValue,n=A.id,a=A.className,c=A.type,s=void 0===c?"text":c,b=A.value,l=A.onChange,i=A.style,B=A.autoFocus,j=A.placeholder,O=void 0===j?"\u8bf7\u8f93\u5165\u5185\u5bb9":j,d=A.onIconClick,p=g.a.createRef();return r((function(){B&&p.current.focus()}),[]),g.a.createElement("div",{className:"cfInputBox"},g.a.createElement("input",{className:o()("cfInputInner",a),type:s,id:n,ref:p,style:i,placeholder:O,value:b||"undefined"===typeof b?t:"",onChange:function(A){l&&l(A.target.value)}}),e&&g.a.createElement("span",{className:"cfIconInput",onClick:function(){d&&d(p.current.value)}},e))})),B=i;"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Input",filename:"src/components/Input/index.tsx"}});var j=t("./src/components/Icon/index.tsx");t.d(e,"default",(function(){return d}));var O={};function d(A){var e=A.components,t=Object(n.a)(A,["components"]);return Object(c.b)("wrapper",Object.assign({},O,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"input"},"Input"),Object(c.b)(s.c,{__position:0,__code:"<Input />\n<br />\n<Input style={{ width: '400px', marginTop: '16px', marginBottom: '16px' }} />\n<br />\n<Input style={{ borderRadius: '4px' }} />",__scope:{props:this?this.props:t,Playground:s.c,Input:B,Icon:j.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKYGlQGZwnQ2V2g9OABHIAF030OBJEI4iCEkVRsBwAg4CwXCIMaXRSPdSRKOoz51xoeiGl0bj8PYQNJX4-UzXaMFUF0FFjlOLDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYuL3asZg7FgZ3MgAWWz2AANls9p7IsMBgIAMW9aBEnM_hnEOBEHUwGChH4JYiGoSg4EchFfPWAKaGcCAsMudgAEZXPs-RlNUqYAEE5j09gIyg8gbCgdAw1Qjk9LEWroxkdgUR0mBuGAbCtL6uB5C3GtgAa6BmuCAAyWbxkSeZKGaKampa7hNrlMBkMlAZUHadgAH4NmmsMIzaq41pm1BSurKQZCrN8zBhdVjhgMAwigKYLvazr7qq5dqwTWSCBwQLMhSK8CHGmta0YkjNxXBMPCOJHgZrRgEdEDG4d62ABqgnF0AmNyLIsnzEtcEy0EsSgZnMgrvLs9hjNM68RAiIhGeZw75DuuGLHRwXa1R9hhcFrGiJI_H-uAKCvAEKcRQ7CA8jcnzULQiXt1B8HIeh8apEBp6zC_EAhJo0SOIY6XmNY3AOKwQDdBAgwwLwt7Qfk01FRVVBPftcg4LgOBUG9eB5OD_ww4juApLe8iWPDXAsXjsxyoM1mYCSpY8hgLSsjzuAYDPMAwC2KY0P00H_b5PQBE-6KGmggc7EMjHYmoK4vEoclUCVcXJHYQB6M0AMhVADI9Lv_QxzBPtCb6ADV4gZK4UWnFJB8eQBk-MAU0VADELQANvMAEujAFDFQBO7RXLgrlQUIiECI4AB8etRAp2Gf5C57QbIt-Hvf964CuaOocAByEc16vxnL_dg_9ADePoAWBUVyyyuDqDw6hK7QP_oAdgtADw-iuMkEoYDDCahkCBG9MEH0AAbKgBZeUAGTeK5tLzDIQUCh-9YGAGj1FcYQIiBVOOrdgvd-6_3_uPQAV4GAAqlQAWgGADJHFcrAV75XXiwoeMCD6ABC3QAPAormoPYPwM58oRnkVAZhM42rcA6qwSgXBWGAA3lQAaMqADfTNRgA9tUAMAx2jUASR0VAWI2wriGPiFcJEZiLFWPQNAwAyvrT0AJDGgA6lMAJ0OgBvxScW4swd0M7UDUtjGqR4koRgjP2em9xGityKSEgyQDMmQWRjWaefkRbvXnkvBR9SRZcFaYLYBcAwFHg6XDRh3R9LtFoFgF8fSaxGIZOMiwOi9FpGmS_PqCzuGUF4b0OACyCEImIVOGq7RADv0XvC-GVcY1moF41A9gfE7BXNXPsbcVywCmCMgg2MgmoGSDXTUHxTS0DFGAC6lTUBqT0egWAuj3BpBqhGfKwS_odwaXsS5czujzSRRC_RML2LU1PDgSZMA3xw3SRjTOoLYAXKub46F5SEUNPOboSlOx2Bovpd43xEYXnYw-H0MMYN8WEprALGs-cy4V0lPkmlNSLArLWXkZlC1OV225QIXlOAArrMBRjJQ7AADaABdAVFgugED6OYKMpyEzdS6T0_q_ByBgGxhzLA4gpWSzQExV1iLrURwGl08OR44CPntdjQizoBC-R6CHbpEcORCsRSLAZA0BlxvjXDR47AAACHFzQQBSKgIUjILXxq4ANLgKbU1C2HlmuAOa80Fs9Q0roYAk3YFeXbctFbZYDVlh21NWyiF9ynANftOyMi9vjfiga-L37PwGStdg07NpDM_h9b-6BDonTnl9Agy8oAMnYOZdo47EWzMhXLMlMAMVpGPTWHW8baUVtqXxNFjBUruEjTHG1fAdAOt0Njfg6LrnbAGheilQGxrAGnvIKQb7UCw3jeOh6sYVxvnkM9Z0WBpJboXgRO2n4lAWyolbagdEGK6GTmodinEXbAX0AwQOGozQ-01Ane0RgQh2GCsxs0ObVKSE-qxqYScHY4DTn6eutBG6EJKW3B9i0mFKKgem6eHCkG5RgEdRAinN7Kd0IAck1ADwOgUrAgAYf6gCkEzWA4CGonCIaI-1NPsFvvfDI0DADTpoAG3jABLkYAMr0kHaVgI5pE0DAB_aoAcAtcFpIycCgifEvlmhwLkyg-TCl3EQC3NukqSVVIMgMxQ-Q8qKCEAQez1B8sBZgHc1LcB_Zpqrdm3N-auhAqyQyx0JHMz6WCjqgZeqVzGtNf9RFWM2u0UzAVuWE20LFdK6gAaM3uy3UWQTYAPbxbwdQ-h169psPfV4tQfDyhLYiQ6zbbGFG2Jpxo3oUCIAPgOrtk6ipGNBT5EW1cLocEYisBgLVmsLBUpwTCpwVAPjnTmg8FAU42w_sWHuyG1AYbnuIuqOaArBQe5CinBD7wsPBaOU7Bj9g7kfDMzx3DYmpNrIACYKZYHJzWKgUOywThSB4VwEYLKKC51z9gOBPIAFYPyuqyhaCbVwiq2QZxYRWU4JceTgH3LgrOPARmpwVAA7EsdXWv2A6-F0WgHBDgdoDBzACHUOdjS_YGb80mxc2EAlzgAX1v9hm5viR63qJ3Bvf2pjrAaO_AnDGDgJMGyBFY4yHzsP1vZqIEQCOwdUe5Ner7kKD7bOOc8-50sHA1ODeIvHXH4YP2jgp4abLjI5omfp5VxGTyxVCqeQAJza4F0L63RfEDqrleXkWleBDV7TyzkyquG9LCZq3vX7eC8VtR3AIPowrhWRX3rjyo-OfU8b0VRv1P29LAsnnmzRLbkrnh3-u2yOGmvZeH7kIHhFd7toNb_oKRHeFTp17-mVwBcWQAKTW414j6Z6c456844CuQd6ure7AoBQCDczjCZDApfYwAACaEY5ov-f-s-IsvQAgiuLOgoaAkmseiAJeyeDaFgQBGe7OoB2efOguOBgsKad08g5sx27WGYZ25GImV22grsdGYE5saU2wrgaQ_4iuqA12bsDAtK_A_qjISA7AdqRYfwpY5oP4ZIih9S_Ape-Q1A_AVw_Ah-JhCU6w_A5Q5A_QMwi2hhyhIAFUPUeEsA0IWA3oWh70ZIlAiQuYeQb8vsFoPwxY1QoIIAOhIAUQaAdh_AImmgZh1YFhMA8w4YKkEA8Adhcm_AAR0RIATMOAzqYRK4dqUaChcAORAAetTnnvzvEXDFkZqLxpkhUUmDgM3jgBZLUTWPUTxlaDkXkQUesKwewWobgLoJACkBIdQNIYISAIZCALQD6FkIYXar8ubgEeaLMDMPwGwfzPIEAA",mdxType:"Playground"},Object(c.b)(B,{mdxType:"Input"}),Object(c.b)("br",null),Object(c.b)(B,{style:{width:"400px",marginTop:"16px",marginBottom:"16px"},mdxType:"Input"}),Object(c.b)("br",null),Object(c.b)(B,{style:{borderRadius:"4px"},mdxType:"Input"})),Object(c.b)("h2",{id:"input\u5e26\u56fe\u6807\uff08\u641c\u7d22\uff09"},"Input\u5e26\u56fe\u6807\uff08\u641c\u7d22\uff09"),Object(c.b)(s.c,{__position:1,__code:'<Input\n  icon={<Icon type="FaSistrix" />}\n  onIconClick={v => {\n    alert(`\u8f93\u5165\u7684\u662f: ${v}`)\n  }}\n/>',__scope:{props:this?this.props:t,Playground:s.c,Input:B,Icon:j.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKYGlQGZwnQ2V2g9OABHIAF030OBJEI4iCEkVRsBwAg4CwXCIMaXRSPdSRKOoz51xoeiGl0bj8PYQNJX4-UzXaMFUF0FFjlOLDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYuL3asZg7FgZ3MgAWWz2AANls9p7IsMBgIAMW9aBEnM_hnEOBEHUwGChH4JYiGoSg4EchFfPWAKaGcCAsMudgAEZXPs-RlNUqYAEE5j09gIyg8gbCgdAw1Qjk9LEWroxkdgUR0mBuGAbCtL6uB5C3GtgAa6BmuCAAyWbxkSeZKGaKampa7hNrlMBkMlAZUHadgAH4NmmsMIzaq41pm1BSurKQZCrN8zBhdVjhgMAwigKYLvazr7qq5dqwTWSCBwQLMhSK8CHGmta0Y8IVzh2JqAGxgJOZbT5j4EBgpylF-iwfh2E3O64bh6gMdQewoFibYBo4bgOsM4HyYseIMgICNikAZPjAFNFQAQt0AejMrgAEmAVh5GKN82YseQyfJzcVykUHwch6HxqkQGnrML8QCEmjRI4hiiPCFjw1wDisEA3QQIMMC8Le0H5NNRUVVQR37XIOC4DgVBvXgeTvf8P2A7gKS3vI821BwLFw7McqDPYI8kqWPIYC0rI07gGAzzAMAtimND9NB92-T0ARPuihpoIHOwWeR3Qri8ShyVQJUSckdghcAMhVADI9FH_VZzBPtCb6ADV4gZK4CYKDvHn5wAxC0ADbzABLowBQxUATu0Vy4K5UFCIhAiOAAfHrUQKdhT-Qke0Gyeeu6XrgV2D32ADkA5n8-Z3v9gl8Abx9ACwKiuXqsArg6g8OoQuP8l6AHYLQA8PorjJBKGAwwmoZE_tOFI0C-aL0AAbKgBZeUAGTeK4sb5Vnt_Tuv8cF_0ANHqK4wgRECqcPIzdhBt3vkvXugArwMABVKgAtAMAGSOK5WBTzIV_LBlCl4C0ADwKK5qD2D8DOfKEYRFQAwQUNqTN2CsEoFwbBi9AAbyoANGVABvpgLQAe2qAGAYuRqAqY0zplcFR8QrhIk0R1HRejKGAGV9QegBIY0AHUpgBOh0AN-KZirFmDugnagakEZTH0inSgEYIz9koHcK4Nc65uIMs_aJkEkY1kHn5WWI8voEEnlABkRS2ZcCqeTF-cB35HlqXDUhNV2i0CwC-ZpNZVGVPyRYeRii0jdIsCAmAIyQjhEoEw3ocAJlIIRKgqcbTADv0fzLeGVWYU1sboexOwVzFz7HXFcsApgdIILElxqBkgl01B8U0tAxRgAujk1AalFHoFgAo9waQaoRnyq4v6DdZaDJ-d0eaexqZDJgP89irgTKjhwL0mAMsayRNZonD5sA7G0x2H8rJwK2aU12bi3YELiXyNJRGc5sSPh9DDGDZFqK5YrnTnnAukokkEv6ZMxhzC7AQppabMGvQBAMpwAFWZLzWZKHYAAbQALrMonKOPo5goxbJrDGDg9TGn9X4OQMAsTrzeHEDyuGjA0BMXNbLXVAcBr1P9keOAj5DWxMIs6AQvkeg-waQHDkCtZay1IQNUhgag2Ky7gAAQ4uaCAKRUBCkZJqiNnAeDAC4OG1NFhHjsBjXAONCak02rZl0MAobsAXOFVm7NYyBpjJramhZKDW5TgGs2pZGRG0RuRQzURl9T6kJWto_tm19LtGvh9W-6BDonRKWPMp_bzLtG7UG0FSiBpYpgN8pRq6axKxTeTQl2aLCD3YBCxgqV3A-pDnqnGbrdCxOJpSumm7KjYpJXTMaGbdDyCkFe1AsMI3doerGFcb55DPWdFgaS87vqNGFZ-JQ-sqKG2oHRBiuho5sStjbYC-gGCew1GaF2moI72iMCEOwwVSNmjjapSQn1yNTCjqxXAcc_Tl1oJXZBjRa6pLgMe0hiByFYNzYPWhwDcowCOiJ8RSpxO6EAOSagB4HWSVgQAMP9QBSBprAcBlVCAINEfasn2D70PhkH-gBp00ADbxgAlyMAGV6wDtKwFM0iH-gA_tUAOAW8CIlRLeQRPityzQ4ASUklJaSMkCe5Ri3JBlSGKHyHlRQhnjPUESy5mAhyItwHdnDXN-bC2Jq6K8mJuzHToczPpYKcrSEKpXF0Agar_pBvRuV2imYkv9WAF1tCqXuyoAGv1_aaE609cy2hA9cMINQdevaODgXqBIeUAbESlXjaxOw-x-AWgKD4dAiAD4RrhUmp8MewU-QBtXC6HBGIrAYB5ZrCwVKcEwqcFQLTZ05oPBQFONsR7FgjvutQJ67Jh7qjmiSwUVhAgpzfe8AD8mjlOzQ_YO5Hw3ksCI7hjidAEwrhJgAEwWVstjmsVBftlgnCkDwrgIwWUUAzhn7AcCeQAKwfh5VlC0XWrhFVJzyrwsP0GFQ8nAVuXBqceAjITgqAB2JYsuFfsCV5zw9z2kFvbQJ9mA33fs7DJxYHX5pNjxsIHznAbPDd7HCDrve6HreoncJd_arCsCQ78CcMYOAkxzPYEL5ZPvcs8tmogRAHbW0ZDByeinQprs07p0zxnSwcCE7V0G7tofhj3aOMeoNAeMjmlj1Tky0vPLFUKp5AAnIrtnHPreZ8QJKvI0fs0F4EEX1ucepcRnL0sAq1fa_15Lf77wHuOyjCuFZafKuPKl7p4TivRUK-E7r0sCyqflVw3DeGoHj7hWt7Zhdl4ruQgeHFxU2g1v-gpHN4VEnWOeURBmFcNnFkACk1vi_x9p_T5PzOcBXJh9D0nc3kAoBAiArhQC4BbsYAABNCMc0N_d_dPW1PocXKnQUNAbja3LPSgHPQ_CNb_KXRPf_FPdnVAtmHfCJPWVbCrDMDbLDNjWOHbPDPQA7PWNKbYVwNIf8cXVANgu2BgYFfgJ1RkJAdgA1IsP4Usc0H8MkcQopfgHPfIagfgK4fgDfLQhKdYfgcocgfoGYAbdQyQkACqHqPCWAaELAb0BQ96MkSgRIXMPIC-V2C0H4YsaoUEEAJQkAKINAEw_gZgzQHQ6sPQmAeYcMFSCAeAEw49fgNwwIkAAfHAImHwlcA1X1MQuAJIgAPUJ1T1Z1CLhgSM1Ho2iTyKTBwCrxwAsmKJrFKLoytCSJSLSPWDunkFoJkNwF0EgBSD4OoEEIIzAkMhAFoB9CyHUINQeV1zcPNFmBmH4E6PlnkCAA",mdxType:"Playground"},Object(c.b)(B,{icon:Object(c.b)(j.a,{type:"FaSistrix",mdxType:"Icon"}),onIconClick:function(A){alert("\u8f93\u5165\u7684\u662f: ".concat(A))},mdxType:"Input"})),Object(c.b)("h2",{id:"\u81ea\u52a8\u805a\u7126"},"\u81ea\u52a8\u805a\u7126"),Object(c.b)(s.c,{__position:2,__code:"<Input autoFocus />",__scope:{props:this?this.props:t,Playground:s.c,Input:B,Icon:j.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKYGlQGZwnQ2V2g9OABHIAF030OBJEI4iCEkVRsBwAg4CwXCIMaXRSPdSRKOoz51xoeiGl0bj8PYQNJX4-UzXaMFUF0FFjlOLDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYuL3asZg7FgZ3MgAWWz2AANls9p7IsMBgIAMW9aBEnM_hnEOBEHUwGChH4JYiGoSg4EchFfPWAKaGcCAsMudgAEZXPs-RlNUqYAEE5j09gIyg8gbCgdAw1Qjk9LEWroxkdgUR0mBuGAbCtL6uB5C3GtgAa6BmuCAAyWbxkSeZKGaKampa7hNrlMBkMlAZUHadgAH4NmmsMIzaq41pm1BSurKQZCrN8zBhdVjhgMAwigKYLvazr7qq5dqwTWSCBwQLMhSK8CHGmta0YkiwgiQLTjydhNxXKRQfByHofGqRAaeswvxAISaNEjiGKI8IWPDXAOKwQDdBAgwwLwt7Qfk01FRVVB2ftcg4LgOBUG9eB5MF_wRbFuApLe8jabUHAsVlsxyoM9gjySpY8hgLSsh1uAYDPMAwC2KY0P00Heb5PQBE-6KGmggc7EM4HOF0K4vEoclUCVdHJHYQB6M0AMhVADI9WJqBXTBPtCb6ADV4gZK4UWnFJ_ceQBk-MAU0VADELQANvMAEujAFDFQBO7RXLgrlQUIiECI4AB8etRAp2Eb5CY7QbIM8DnPc64FdJeFgA5MWU-bmdu_YXvAG8fQBYFRXXrYCuHUPHUc3J97wB2C0AeH0VzJCUYGGJqMjHtON7zwADZUAWXlADJvFdtPmU-CnP3Pp8AaPUVyRygUd6e52G9323de6h0AFeBgAKpUAFoBgAyRxXKwJO-VU7PwDlPPOgAQt0ADwKK5qD2D8DOfKEY4FQCfjONq3AOqsEoFwF-gAN5UAGjKgA301QYAPbVADAMVg1AElsFQFiNsK4BD4hXCRKQ8hlD0CT0AMr6kdUCAEhjQAdSmAE6HQA34qMNYWYO6atqBqQRlMfSWtKARgjP2SgdwrhOxdsIgyA9NGQRXHDKRfk4Y1hjl9AgicoAMgcY4zgixbE1kHnAEeR5PGOIft0fS7RaBYBfMEuGhCPG-IsNg3BaQYk1kXjAVJFgv4_zyJkvscEERHynDVdogB36JzmXDK7s4bUE4agew3Cdgrktn2F2K5YBTEiQQbRgjUDJCtpqD4ppaBijABdKxqA1K4PQLAHB7g0g1QjPlIRf03ZeMSfU5J3R5p7E2fMmASz2KuBMqOHAcSYBvjhuo926tpmwDqQ0nhiyLFrPWbU3QjydjsB2e8rhPCIxdO0R8PoYYwbnMuTWO6cNdYmzNpKAxLyEkhHCN_VGdgdmAupmDXoAhQU4ACr_cZ7slDsAANoAF0IUWC6AQPo5gozVJrDGDg_jAn9X4OQMA2jrzeHEEiuGjA0BMX5es1lYsBr-NFkeOAj5OXaMIs6AQvkehCwCWLDkUL1latCQNUJmqtVeMeOwAAAhxc0EAUioCFIyRlBrvEDS4Pqu1NYjWmrgOay11qRVeK6GAXV2BulYqdc6pufUBrpODc6_ehSfZTgGtGw-saMiRrtecga5zW6N1CStdgGbNrhPbh9Tu6BDonWcXHVx8D2DmXaCmg1ST9kDTuTAOZeC61wwxraxxryQ0WCkd8hajBUruBVVLNlfAdBct0No_guzPnbCbZUe5HzGnbDGsAKR8gpDDtQLDA1daHqxhXG-eQz1nRYGkuW76jQsWfiUKTKi5NqB0QYroRWbEGZM2AvoBg_MNRmi5pqOW9ojAhDsMFQDZpzWqUkJ9YDUwFasVwCrP0ttaD2wPo0Z2xi4A9sWo_RBE8jVSPfgvXKMAjqIEI-nYjuhADkmoAeB1DFYEADD_UAUgsawHAKlE4RDRH2pR9g1da4ZEnoAadNAA28YAJcjABlegvbSsBBNIknoAP7VADgFjvNRGjJkET4gMs0OA9EGKMSYsxOHEU3OsQZUJih8h5UUEIAg_HqC2YUzAFpJm4C8w7YHN1HqrVdAmVoj5jpn2Zn0sFUloTyUrhpXS_6WrGAPNCxmKYdn-rAHS2hRzznUADRy92W6obYDhrc2hTtcMT1ntevaK9unqB3uUGTESYXKbaPfch-AWgKDftAiAD4XKsU8p8HhwU-RCtXC6HBGIrAYDeacbYfeYVOCoG4c6c0HgoCnG2PNiwA35WoEVZYrt1RzR2YKF7IUU4NveF244xynYLvsHcj4byWA7twxxOgCYVwkwACYLK2Q-34n2QpJspA8K4CMFlFAw5h-wHAnkACsH4kVZQtOlq4RUgdIq8AIKcWOPJwB9lwCcEOIx_YKgAdiWJTmn7A6eo67SwVKcFltoDWzADbW2djA4sJz80mwLWECxzgJHfO9jhE51XZ9EvUTuHG_tS7WAzt-BOGMHASY4BLDx8UzXXmkWzUQIgBNRSMjHZDVQLbZYyeQ-h7Dh3CO_tM61XWo3wxZtHDw1q3XGRzRW7B7biMnliqFU8gATlp0jlHEu3eIAJWjb36zfcCH96Dm3JkPDB9DwVCPUeY_ev_t4VXHZRhXCshXhnHlM9Q7-zn1yoe_vR6WBZHAzukVOqdft6dWKLfrLGy8JXIQPDE_cbQCX_QUgi8KoD97SKIgzCuEjiyABSCXAeM8Q6h3Dx3OBXIF67fLyZAUBBECuEfuA02YAAE0IzmmXyvl3oq-jE5t4KNA6GJfu8oJ7vvdqN_g52477w6I4H6u7NJqIkzNYpYvp1IdbKxdZfp6B9YkxpTbCuBpD_jE6oBIEswMCvL8BSqMhIDsAcpFh_Cljmg_hkjEEOL8Ce75BRwkH8Ct6sEJTrD8DlDkD9AzCFb8BXD8AVQ9R4SwDQhYDeg0HvRkiUCJC5h5AtzcwWg_DFjVCgggB0EgBRBoD8GkEqB0xYHsHVicEwDzDhgqQQDwA6F4b8CKE6H8C544BYCGFwwcqqpEFwB2EgAAB6f2beiOzhNYNhmo0GminhXhSYOA4eOAFkARFgQRUGVonhDhThIA6wd08gUBFBuAugkAKQWB1AuBP6YEhkIAtAPoWQ_BHKwyXOih5oswMw_AGR8gzRQAA",mdxType:"Playground"},Object(c.b)(B,{autoFocus:!0,mdxType:"Input"})),Object(c.b)("h2",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import { Input } from 'cf-design'\n\n// \u5bfc\u5165\n<Input />\n")),Object(c.b)("h2",{id:"api\u6587\u6863"},"API\u6587\u6863"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u53c2\u6570"),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u8bf4\u660e"),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"icon"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u662f\u5426\u5e26icon"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"boolean"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"false")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"defaultValue"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u8f93\u5165\u6846\u9ed8\u8ba4\u5185\u5bb9"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u65e0")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"id"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u8f93\u5165\u6846id"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"className"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u8f93\u5165\u6846\u7684\u7c7b\u540d"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u65e0")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"style"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u8f93\u5165\u6846\u7684\u6837\u5f0f"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"object"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"placeholder"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u8f93\u5165\u6846\u7684\u5360\u4f4d\u7b26"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u65e0")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"type"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u8f93\u5165\u6846\u7c7b\u578b"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"text")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"autoFocus"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u8f93\u5165\u6846\u662f\u5426\u81ea\u52a8\u805a\u7126"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"boolean"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"false")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"value"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u8f93\u5165\u6846\u7684\u503c"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u65e0")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"onChange"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u8f93\u5165\u6846\u53d8\u5316\u65f6\u7684\u56de\u8c03"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"(event) => void"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"onIconClick"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u5f53icon\u6309\u94ae\u70b9\u51fb\u65f6\u7684\u56de\u8c03"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"() => void"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}))))))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Input/index.mdx"}}),d.isMDXComponent=!0}}]);