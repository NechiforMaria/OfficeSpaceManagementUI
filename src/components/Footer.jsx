import React from "react";
import "./Footer.css";

export class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <span>
          <p display="inline">Number: 0372 092 201</p>
          <p>Address: Strada Universitatii 15-17</p>
        </span>

        <p>&copy; All rights reserved. Website developed by No More Bugs team.</p>
      </footer>
    );
  }
}
export default Footer;
