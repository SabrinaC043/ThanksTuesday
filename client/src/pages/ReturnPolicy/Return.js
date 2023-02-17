import 'Return.css';



class ReturnPolicy extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState.apply({ value: e.target.value });
    }
    handleSubmit(e) {
        alert("Your request has been submitted:" + this.state.value);
        e.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Full Name:
                    <input
                        type="text"
                        name="name"
                        value={this.state.value}
                        onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>

        );
    }
};

root.render(<ReturnPolicy />)