export default function Price({ oldPrice, newPrice }){
    
    let oldStyles={
        fontWeight:"bold",
    };
    let newStyles={
        textDecoration:"line-through",
    };
    let styles={
        backgroundColor:"lightBlue",
        height:"30px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"15px",
    };

    return (
        <div style={styles}>
        <span style={newStyles}> {oldPrice } </span>
        &nbsp;&nbsp;
        <span style={oldStyles}> {newPrice } </span>
        </div>
    );
}