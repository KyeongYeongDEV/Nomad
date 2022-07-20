import reactRouterDom from "react-router-dom";
import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <div className="header">
            <h1>
                <Link to ='/'>토익 영어단어(고급)</Link>
            </h1>
            <div className="menu">
                <a href="#x" className = "link">
                    단어추가
                </a>
                <a href ="#x" className="link">
                    Day 추가 
                </a>
            </div>
        </div>
    );
}