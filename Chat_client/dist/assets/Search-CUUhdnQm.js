import{r,f,aX as x,u as j,j as s,S as g,aY as I,Y as F}from"./index-DLu291oi.js";import{b as T}from"./Menu-CI0hXIeC.js";import{U}from"./UserItem-C42tBIlI.js";import{D as y,a as A}from"./DialogTitle-Bm_JYwat.js";import{T as C}from"./TextField-DU2Yq45b.js";import{I as D}from"./InputAdornment-BNHTmPj3.js";import{S as L}from"./AppLayout-D5sPzP3i.js";import{c as q}from"./Menu-wfcDCIto.js";import"./Modal-CuAh2ZEk.js";import"./Typography-BYTqXvty.js";import"./ListItem-Do_Y8ozV.js";import"./isMuiElement-BLZikN05.js";import"./Avatar-DIds3tWp.js";import"./Box--JEoGVwv.js";import"./Delete-CS-KR33e.js";import"./ExitToApp-D9IhrFMs.js";import"./AvatarCard-DRlPtZyT.js";import"./Toolbar-DLNi20jQ.js";import"./Notifications-BXqnMxMN.js";import"./Tooltip-D3jhxpGK.js";const V=()=>{const[t,o]=r.useState(""),[a,n]=r.useState([]),{isSearch:i}=f(e=>e.misc),[c]=x(),[m,d]=T(I),p=j(),u=e=>{o(e.target.value)};r.useEffect(()=>{const e=setTimeout(()=>{c(t).then(({data:S})=>n(S.users))},800);return()=>{clearTimeout(e)}},[t]);const l=async e=>{await m("Sending friend request...",{userId:e})},h=()=>p(F(!1));return s.jsx(y,{open:i,onClose:h,children:s.jsxs(g,{p:"2rem",direction:"column",width:"25rem",children:[s.jsx(A,{textAlign:"center",children:"Find People"}),s.jsx(C,{variant:"outlined",value:t,onChange:u,size:"small",InputProps:{startAdornment:s.jsx(D,{position:"start",children:s.jsx(L,{})})}}),s.jsx(q,{children:a.map(e=>s.jsx(U,{user:e,handler:l,handlerIsLoading:d},e._id))})]})})};export{V as default};
