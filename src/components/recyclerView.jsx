import React, { Component } from 'react';
import back from '../images/arrow2.png'
import next from '../images/arrow.png'
import $ from 'jquery';
import lists from '../services/menu.json'

class RecyclerView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter : 0,
            className : "recycler-list-"+`${this.props.classId}`,
            list : []
        }
        this.setParam = this.setParam.bind(this);
        this.getParam = this.getParam.bind(this);
    }

    setParam(counter) {
        this.setState({
            counter : counter 
        })
    }

    componentDidMount() {
        const y = this.props.classId;
        switch(y){
            case '1' : this.getSalad(); break;
            case '2' : this.getAppetizer(); break;
            case '3' : this.getMainCourse(); break;
            case '4' : this.getAmerican(); break;
        }
    }
    
    getSalad() {
        let l = lists;
        let list = [];
        l.map(i => {
            if(i.menuType.title == "Salad"){
                list.push(i);
            }
        })
        this.setState({
            list
        })
    }

    getMainCourse() {
        let l = lists;
        let list = [];
        l.map(i => {
            if(i.courseType.title == "Main Course"){
                list.push(i);
            }
        })
        this.setState({
            list
        })
    }

    getAppetizer() {
        let l = lists;
        let list = [];
        l.map(i => {
            if(i.courseType.title == "Appetizer"){
                list.push(i);
            }
        })
        this.setState({
            list
        })
    }

    getAmerican() {
        let l = lists;
        let list = [];
        l.map(i => {
            if(i.cuisineType.title == "American"){
                list.push(i);
            }
        })
        this.setState({
            list
        })
    }

    getParam() {
        return this.state.counter
    }

    render() { 
        const handleNext = () => {
            let step = ($("#postImage").width()+23)*3;
            let count = this.state.counter;
            let s = '.'+`${this.state.className}`;
            if($(s).prop("scrollWidth")-count>500)
                count += step;
            console.log(count);
            this.setState({
                counter : count
            })
            $(`${s}`).animate({scrollLeft : count},1000);
            console.log($(s).prop("scrollWidth"));
        }
    
        const handleBack = () => {
            let step = ($("#postImage").width()+23)*3;
            let count = this.state.counter;
            let s = '.'+`${this.state.className}`;
            if (count>700)
                count -= step;
            console.log(count);
            this.setState({
                counter : count
            })
            $(`${s}`).animate({scrollLeft : count},1000);
            console.log($(s).prop("scrollWidth"));
        }
        return (
            <React.Fragment>
                {this.state.list.length ? (
                    <React.Fragment>
                        <p style={{paddingLeft:"60px",paddingTop:'20px',fontSize:"20px",fontWeight:"bold"}}>{this.props.title}</p>
                        <hr style={{height:"2px",border:"none",backgroundColor:"#bdc3c7",margin:"0px 4% -20px"}} />
                        <div>
                            <img id="nackButton" onClick={() => handleBack()} class="arrow-button" style={{position:'relative',borderRadius:"20px",top:"128px",left:'40px',backgroundColor:"#34634E",padding:"4px"}} src={back}/>
                            <img id="nextButton" onClick={() => handleNext()} class="arrow-button" style={{position:'relative',float:"right",borderRadius:"20px",top:"128px",right:"20px",backgroundColor:"#34634E",padding:"4px"}} src={next}/>
                            <div class={this.state.className} style={{"overflow-x": "auto","white-space" : "nowrap",margin: "0px 40px",overflow : "hidden"}}>
        
                                {
                                    this.state.list.map(i => 
                                        <div style={{margin:"0px 0px 0px 20px",height:"330px",display: "inline-block",width: "30%"}}>
                                            <div style={{width:'100%',height:"70%"}}>
                                                <img id="postImage" src={i.image} style={{width:"100%",height:"100%",borderRadius:"5px",cursor:'pointer'}} />
                                            </div>
                                            <p style={{color:'black',paddingLeft:"10px",marginTop:"6px",marginBottom:"-1px",fontSize:"16px",fontWeight:"bold"}}>{i.title}</p>
                                            <p style={{paddingLeft:"10px"}}>
                                                <span style={{color:"#096E2D",fontWeight:"bold",paddingRight:"10px",fontSize:"14px",cursor:'pointer'}}>{i.menuType.title}</span>
                                                <span style={{color:"#535c68",fontWeight:"bold",fontSize:"14px",cursor:'pointer'}}>{i.cuisineType.title}</span>
                                            </p>
                                            <p style={{marginTop:"-16px",paddingLeft:"10px"}}>
                                                <span className="text-center" style={{backgroundColor:'#ecf0f1',color:"black",paddingRight:"5px",marginRight:"8px",fontWeight:"500",fontSize:"15px"}}>
                                                    <i class="fa fa-clock-o" aria-hidden="true" style={{marginRight:'5px'}}></i>
                                                    {i.preparation+"Mins"}
                                                </span>
                                                <span style={{backgroundColor:'#b2bec3',color:"black",fontWeight:"bold",fontWeight:"500",fontSize:"15px"}}>
                                                    <i class="fa fa-usd" aria-hidden="true" style={{marginRight:'5px'}}></i>
                                                    {i.price}
                                                </span>
                                                <span className="text-center" style={{float:"right",paddingRight:"13px",backgroundColor:'#ecf0f1',color:"#096E2D",fontWeight:"bold",fontWeight:"500",fontSize:"15px"}}>
                                                    Free Pickup
                                                </span>
                                            </p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </React.Fragment>
                ) : (
                    null
                )}
            </React.Fragment>
        );
    }
}
 
export default RecyclerView;