export default function Button({action}){
    return (
        <>
        {/* click krne pr ticket action bss trigger ho jaye isske alawa kuch nahi  */}
        <button onClick={action}>buy New Ticket</button>
        </>
    );
}


// ticket generate krne ka mtalb hai state re render kr rahi hai 
// buynew ticket krne ke baad  onclick event produce hone ke baad wo action ko trigger 
// krti hai and action as props pass kiya gaya hai  jo ki lottery ke ek function se attacked hai  yani uske DEFINATION 
// se attached hai and wo work krne ke baad apneek upper ek upper ko chage krparha ha hai 


