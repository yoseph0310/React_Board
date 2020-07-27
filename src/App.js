import React, {Component} from 'react';
import BoardForm from "./components/BoardForm";
import BoardItem from "./components/BoardItem";

class App extends Component{
  constructor(props){
    super(props);
    this.child=React.createRef();
  }
  state={
    maxNo: 3,
    boards:[
      {
        brdno: 1,
        brdwriter: 'Seo yoseph',
        brdtitle: 'If you intend to live then you die',
        brddate: new Date()
      },
      {
        brdno: 2,
        brdwriter: 'So SiNo',
        brdtitle: 'Founder for tow countries',
        brddate: new Date()
      }
    ]
  }

  handleSaveData = (data) => {
    let boards = this.state.boards;
    if (data.brdno === null || data.brdno==='' || data.brdno === undefined) {
      this. setState({
        maxNo: this.state.maxNo+1,
        boards: this.state.boards.concat({ brdno: this.state.maxNo++, brddate:new Date(),
          brdwriter: data.brdwriter, brdtitle: data.brdtitle})
      });
    } else {
      this.setState({
        boards: boards.map(row => data.brdno === row.brdno ? {...data}: row)
      })
    }
  }

  handleRemove = (brdno) => {
    this.setState({
      boards: this.state.boards.filter(row => row.brdno !== brdno)
    })
  }

  handleSelectRow = (row) => {
    this.child.current.handleSelectRow(row);
  }

  render() {
    const { boards } = this.state;
    return(
      <div>
        <BoardForm onSaveData={this.handleSaveData} ref={this.child}/>
        <table border="1">
          <tbody>
          <tr align="center">
            <td width="50">No</td>
            <td width="300">Title</td>
            <td width="100">Name</td>
            <td width="100">Date</td>
          </tr>
          {
            boards.map(row=>
                (<BoardItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow}/>)
            )
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
