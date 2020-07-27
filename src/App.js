import React, {Component} from 'react';
import BoardForm from "./components/BoardForm";
import BoardItem from "./components/BoardItem";
import './App.css'

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
        brdwriter: '서요셉',
        brdtitle: '리액트 게시판 연습',
        brddate: new Date()
      },
      {
        brdno: 2,
        brdwriter: '서요셉',
        brdtitle: 'CSS 숙달하기',
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
        <p className="title" align="center">
          간단한 게시판 만들기
        </p>
        <BoardForm onSaveData={this.handleSaveData} ref={this.child}/>
        <p>
          <table className="board-table" border="1">
            <tbody>
            <tr align="center">
              <td width="50">번호</td>
              <td width="500">제목</td>
              <td width="100">글쓴이</td>
              <td width="100">날짜</td>
            </tr>
            {
              boards.map(row=>
                  (<BoardItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow}/>)
              )
            }
            </tbody>
          </table>
        </p>
      </div>
    );
  }
}

export default App;
