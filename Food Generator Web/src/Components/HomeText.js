import React, { Component } from 'react';
import './HomeText.css'
import { Link } from "react-router-dom";
class HomeText extends Component {
  render() {
    return (
      <div className="centerBox">      
        <div className="categoryWrapper">
          <p>Receipts</p>
              <Link to="/view-all">
          <button>
            <span>
              <span>
              <span data-attr-span="Let's Go">
             Create Your Receipt 
                </span>
              </span>
            </span>
          </button>
          </Link>
        </div>
      </div>
    )
  }
}
export default HomeText;