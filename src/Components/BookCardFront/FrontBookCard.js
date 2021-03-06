import React, { Component } from "react";
import "./FrontBookCard.css";
import BackBookCard from "../BookCardBack/BackBookCard";
import SpineHamburgerMenu from "../SpineHamburgerMenu/SpineHamburgerMenu";

class FrontBookCard extends Component {
  state = {
    toggleMenu: false,
  };

  exitListMenuHandler = (e) => {
    // Updates the home page with newly selected books
    // and closes closes menu
    e.preventDefault();
    this.setState((state) => {
      return { toggleMenu: (state.toggleMenu = false) };
    }, this.props.update);
  };

  hamburgerMenuBtn = (e) => {
    // Opens menu to select new shelfs
    e.preventDefault();
    this.setState((state) => {
      return { toggleMenu: (state.toggleMenu = true) };
    });
  };

  render() {
    return (
      <div>
        <div className="Card-container-front">
          {
            // Toggles the front and back cards when clicking on the hamburger menu
            // and exit button. Also when clicking on the exit button on the back card
            // the exit button updates the home page with the newly selected books
            this.state.toggleMenu === false ? (
              <div className="Card-container-front">
                <div className="Spine">
                  <SpineHamburgerMenu
                    hamburgerMenuBtn={this.hamburgerMenuBtn}
                  />
                  <p className="Book-title">{this.props.book.title}</p>
                  <p className="Author">By: {this.props.book.authors}</p>
                </div>
                <div className="Book-Image_Container">
                  <img
                    className="Book-front-img"
                    src={this.props.book.imageLinks.thumbnail}
                    alt="Logo"
                  />
                </div>
              </div>
            ) : (
              <React.Fragment>
                <BackBookCard
                  exitListMenuHandler={this.exitListMenuHandler}
                  book={this.props.book}
                />
              </React.Fragment>
            )
          }
        </div>
        <br />
      </div>
    );
  }
}

export default FrontBookCard;
