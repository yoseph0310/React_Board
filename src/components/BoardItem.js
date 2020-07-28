import React, {Component} from "react";
import './BoardItem.css';

class BoardItem extends Component{
    handleRemove = () => {
        const { row, onRemove } = this.props;
        onRemove(row.brdno);
    }

    handleSelectRow = () => {
        const { row, onSelectRow } = this.props;
        onSelectRow(row);
    }

    render() {
        return(
            <tr className="board-item">
                <td>{this.props.row.brdno}</td>
                <td>
                    <a onClick={this.handleSelectRow}>{this.props.row.brdtitle}</a>
                </td>
                <td>{this.props.row.brdwriter}</td>
                <td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td>
                <td><div className="remove" onClick={this.handleRemove}>&times;</div></td>
            </tr>
        );
    }
}
export default BoardItem;