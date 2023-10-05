import "./Sidebar.css";

export default function Sidebar({names}){
    return (
        <>
            <ul>
                {names.map((name)=>{
                    return <li><button onClick={console.log("Clicked")}>{name}</button></li>
                })}
            </ul>
        </>
    );
}