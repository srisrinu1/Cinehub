import React from 'react';
import Pagination from '@material-ui/lab/Pagination';



const CustomPagination = (props) => {
    // setTimeout(()=>{
    //     const handlePageChange=(page)=>{
    //         props.setPage(page);
    //         window.scroll(0,0);
    //     }  
    // },0);
    const handlePageChange=(page)=>{
        props.setPage(page);
        window.scroll(0,0);
    }
    return(<div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop:10
    }}>
    
      <Pagination count={props.numOfPages} onClick={(e)=>props.setPage(e.target.textContent)}
          hideNextButton
          hidePrevButton
          color="primary"
      />
    
     </div>)
     ;
};

export default CustomPagination;