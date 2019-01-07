import React from "react";
export default class ValidationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      age: 0,
      e_mail: "",
      fullnameError: "",
      ageError: "",
      e_mailError: ""
    };
  }
  handleChange(event) {
    switch (event.target.id) {
      case "fullname":
        this.setState({ fullname: event.target.value });
        let regex = /\b[^\d\W]+\b/g;
        event.target.value.match(regex)
          ? this.setState({ fullnameError: "" })
          : this.setState({ fullnameError: "Invalid name" });
        break;
      case "age":
        this.setState({ age: event.target.value });
        event.target.value >= 18
          ? this.setState({ ageError: "" })
          : this.setState({ ageError: "Invalid age" });
        break;
      case "e-mail":
        this.setState({ e_mail: event.target.value });
        let regexE = /\S+@\S+\.\S+/;
        event.target.value.match(regexE)
          ? this.setState({ e_mailError: "" })
          : this.setState({ e_mailError: "Invalid e-mail" });
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <div>
        <form id="validationField">
          <section>
            <label className="error" for="errorName">
              {this.state.fullnameError}
            </label>
          </section>
          <label for="fullname">Fullname</label>
          <input
            class="inp1"
            id="fullname"
            type="text"
            placeholder="Fullname"
            value={this.state.fullname}
            onChange={this.handleChange.bind(this)}
          />
          <br />
          <br />
          <section>
            <label class="error" for="errorAge">
              {this.state.ageError}
            </label>
          </section>
          <label for="age">Age</label>
          <input
            class="inp2"
            id="age"
            type="number"
            placeholder="age"
            value={this.state.age}
            onChange={this.handleChange.bind(this)}
          />
          <br />
          <br />
          <section>
            <label class="error" for="errorE_mail">
              {this.state.e_mailError}
            </label>
          </section>
          <label for="e-mail">E-mail</label>
          <input
            class="inp3"
            id="e-mail"
            type="text"
            placeholder="e-mail"
            value={this.state.e_mail}
            onChange={this.handleChange.bind(this)}
          />
        </form>
      </div>
    );
  }
}
