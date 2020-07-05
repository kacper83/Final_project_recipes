import React, {Component} from "react";
import '../../scss/partials/_contact.scss';

class Contact extends Component {
    state = {
        value: ""
    };

    handleSubmit = (e) => {
      e.preventDefault();
      this.setState({
          value: ""
      })
    };

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    };

    render() {
        return (
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <h1>Kontakt</h1>
                    <p>Jeśli chcesz dowiedzieć się czegoś na temat diety bezmlecznej lub urządzenia Thermomix to napisz do mnie używając poniższego formularza.</p>
                    <textarea value={this.state.value} onChange={this.handleChange} placeholder="Wpisz wiadomość..."></textarea>
                    <button>Wyślij</button>
                </form>
            </div>
        );
    }
}
export default Contact;