import React, {Component} from "react";
import './BoardForm.css'

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
            <form className="form" onSubmit={this.handleSubmit}>
                <input placeholder="제  목" name="brdtitle" value={this.state.brdtitle} onChange={this.handleChange}/>
                <input placeholder="글쓴이" name="brdwriter" value={this.state.brdwriter} onChange={this.handleChange}/>
                <button className="save-button" type="submit">저장</button>
            </form>
        );
    }
}

export default BoardForm;