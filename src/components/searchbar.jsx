import React from 'react';
import searchLogo from '../images/search.png';

const SearchBar = () => {
    return (
        <React.Fragment>
            <div style={{position:"relative",height:"40px", width:"55%",margin:"15px",left:"40%"}}>
                <div style={{float:"left",height:"100%",width:"10%"}}>
                    <span class="searchbar btn" style={{height:"100%",width:"100%",borderTopLeftRadius:"30px",borderBottomLeftRadius:"30px",backgroundColor:"black"}}><p style={{color:'white'}}>ALL</p></span>
                </div>
                <div style={{float:"left",height:"100%",width:"80%"}}>
                    <input class="searchbar" type='text' placeholder="Looking for something?" style={{height:"100%",border:'0px',backgroundColor:"#ecf0f1",width:"100%",paddingLeft:'15px'}}/>
                </div>
                <div style={{float:"left",height:"100%",width:"10%"}}>
                    <span  class="searchbar btn" style={{height:"100%",width:"100%",borderTopRightRadius:"30px",borderBottomRightRadius:"30px",backgroundColor:"#16a085",backgroundImage:`url(${searchLogo})`,backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}></span>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default SearchBar;