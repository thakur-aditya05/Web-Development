export default function Price({oldPrice, newPrice }){
    let oldStyle={
        textDecorationLine:"line-through",
    }
    let newStyle={
        fontWeight:"bold",
    }
    let styles={
        backgroundColor:"#e0c367",
        height:"1.89rem",
        
        borderBottomLeftRadius:"0.9rem",
        borderBottomRightRadius:"0.9rem"
    }
    return (
        <div style={styles}>
            <span style={oldStyle}>{oldPrice}</span> &nbsp;&nbsp;
            <span style={newStyle}>{newPrice}</span>
        </div>
    );
}