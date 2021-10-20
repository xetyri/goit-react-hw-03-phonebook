import { Component } from "react";
import s from './ContactForm.module.css'
import PropTypes from "prop-types";

class ContactForm extends Component{

    state = {
        name: '',
        number: '',
    };
    
    handleChange = e => {  
        const { name, value } = e.target;
        this.setState({[name]: value });
        // const { name, value } = event.target;
        // const id = shortid.generate();
        // this.setState((prev) => ({id, ...prev, [name]: value }));
        // console.log(this.state);
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({name:"",number:""});
    };

    render() {

        const {name, number } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className={s.elem}>
                <label>
                    <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    value={name}
                    onChange={this.handleChange}
                    required
                    />
                </label>
                <label>
                    <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={this.handleChange}
                    placeholder="Enter number"
                    pattern="38[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
                    title="Номер может состоять только из цифр. Например 380956665557."
                    required
                    />
                </label>
                <button type="submit">Save</button>
            </form> 
        )
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
}

export default ContactForm;