import{r as m,V as i,j as a,x as h,c as l}from"./index-DLu291oi.js";import{b as p}from"./index-KjJ5Dpjy.js";import{A as n}from"./AdminLayout-Dm0OODdp.js";import{T as f}from"./Table-BNT2Hw6K.js";import{a as u}from"./Menu-CI0hXIeC.js";import{A as N}from"./Avatar-DIds3tWp.js";import"./Box--JEoGVwv.js";import"./Modal-CuAh2ZEk.js";import"./Typography-BYTqXvty.js";import"./ExitToApp-D9IhrFMs.js";import"./Container-Bb2g7vx9.js";import"./TextField-DU2Yq45b.js";import"./isMuiElement-BLZikN05.js";import"./Menu-wfcDCIto.js";import"./Tooltip-D3jhxpGK.js";import"./Toolbar-DLNi20jQ.js";import"./MenuItem-DcKZufX6.js";import"./Button-CO1hZCK-.js";import"./InputAdornment-BNHTmPj3.js";import"./CircularProgress-DXbiuRRF.js";const c=[{field:"id",headerName:"ID",headerClassName:"table-header",width:200},{field:"avatar",headerName:"Avatar",headerClassName:"table-header",width:150,renderCell:e=>a.jsx(N,{alt:e.row.name,src:e.row.avatar})},{field:"name",headerName:"Name",headerClassName:"table-header",width:200},{field:"username",headerName:"Username",headerClassName:"table-header",width:200},{field:"friends",headerName:"Friends",headerClassName:"table-header",width:150},{field:"groups",headerName:"Groups",headerClassName:"table-header",width:200}],M=()=>{const{loading:e,data:r,error:t}=p(`${l}/api/v1/admin/users`,"dashboard-users");u([{isError:t,error:t}]);const[o,d]=m.useState([]);return m.useEffect(()=>{r&&d(r.users.map(s=>({...s,id:s._id,avatar:i(s.avatar,50)})))},[r]),a.jsx(n,{children:e?a.jsx(h,{height:"100vh"}):a.jsx(f,{heading:"All Users",columns:c,rows:o})})};export{M as default};
