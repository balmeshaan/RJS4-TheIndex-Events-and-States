import React, { Component } from "react";

class AuthorDetail extends Component {
  books = this.props.author.books.map(book => (
    <tr>
      <td>{book.title}</td>
      <td>
        {` ${this.props.author.first_name} ${this.props.author.last_name}`}
      </td>
      <td>
        <button className="btn" style={{ backgroundColor: book.color }} />
      </td>
    </tr>
  ));

  render() {
    return (
      <div className="author col-xs-10">
        <div>
          <h3>
            {this.props.author.first_name} {this.props.author.last_name}
          </h3>
          <img
            src={this.props.author.imageUrl}
            className="img-thumbnail"
            alt={` ${this.props.author.first_name} ${this.props.author.last_name}`}
          />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>{this.books}</tbody>
        </table>
      </div>
    );
  }
}
export default AuthorDetail;
