import React, { Component } from 'react';
import Navbar from './components/navbar';
import $ from 'jquery';
import NavbarImage from './components/navbarImage';
import Header from './components/header';
import SearchBar from './components/searchbar';
import RecyclerView from './components/recyclerView';
import lists from '../src/services/menu.json'

class App extends Component {

    state = {

    }

    componentDidMount() {
        $(document).ready(function(){
            $(window).scroll(function(){
                var scroll = $(window).scrollTop();
                if (scroll > 300) {
                  $(".navbar-expand-sm").css("background" , "#bdc3c7");
                }
                else if(scroll <= 300){
                    $(".navbar-expand-sm").css("background" , "#f1f2f6");  	
                }
            })
        })    
    }
    
    render() { 
        return (
            <div>
                <Header />
                <SearchBar />
                <div style={{position:'relative',backgroundColor:'#FFFFFF',width:'100%'}}>
                    <RecyclerView title="Salad" classId="1"/>
                    <RecyclerView title="Appetizer" classId="2"/>
                    <RecyclerView title="Main Course" classId="3"/>
                    <RecyclerView title="American" classId="4"/>
                </div>
            </div>
        );
    }
}
 
export default App;
