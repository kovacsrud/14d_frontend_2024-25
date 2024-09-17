
function App(){
    return (
        React.createElement('div',{
            style:{
                backgroundColor:"black"
            },
            className:"border"
        },
        React.createElement(Box,{hatterszin:"green",felirat:"Box1",kezdo:11}),
        React.createElement(Box,{hatterszin:"yellow",felirat:"Box2",kezdo:13}),
        React.createElement(Box,{hatterszin:"red",felirat:"Box3",kezdo:16})
        )
    );
}

function Box({hatterszin,felirat,kezdo}){

    const [szamlalo,setSzamlalo]=React.useState(kezdo);

    return (
        React.createElement('div',{
            style:{
                width:"200px",
                height:"200px",
                backgroundColor:hatterszin
            },
            className:"p-2 m-5 rounded",
            onClick:()=>setSzamlalo(prev=>prev+1)
        },felirat," ",szamlalo,React.createElement(Reset,{setSzamlalo:setSzamlalo}))
    );
}

function Reset({setSzamlalo}){
    return (
        React.createElement('button',{
            className:"btn btn-primary m-2",
            onClick:(e)=>{setSzamlalo(0);e.stopPropagation()}
        },"Reset")
    );
}


ReactDOM.render(React.createElement(App),document.getElementById('app'));