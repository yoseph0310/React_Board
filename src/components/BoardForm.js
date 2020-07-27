import React, {Component} from "react";

class BoardForm extends Component{
    state={
        brdwriter:'',
        brdtitle:''
    }

    handleSelectRow = (row) => {
        this.setState(row);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSaveData(this.state);
        this.setState({
            brdno:'',
            brdwriter:'',
            brdtitle:''
        });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input placeholder="title" name="brdtitle" value={this.state.brdtitle} onChange={this.handleChange}/>
                <input placeholder="name" name="brdwriter" value={this.state.brdwriter} onChange={this.handleChange}/>
                <button type="submit">Save</button>
            </form>
        );
    }
}

export default BoardForm;