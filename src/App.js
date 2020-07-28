import React, {Component} from 'react';
import styled from "styled-components";
import BoardForm from "./components/BoardForm";
import BoardItem from "./components/BoardItem";
import './App.css'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:linear-gradient(
      to right,
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.7) 70%,
      rgba(20, 20, 20, 1)
    ),
    url(https://source.unsplash.com/random/1920x1080);
  background-size: cover;
`;

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
        <Container>
            <div>
                <p className="title" align="center">
                    <b>간단한 게시판 만들기</b>
                </p>
                <BoardForm onSaveData={this.handleSaveData} ref={this.child}/>
                <p>
                    <table className="board-table" border="1">
                        <tbody>
                        <tr align="center">
                            <td width="50"><b>번호</b></td>
                            <td width="500"><b>제목</b></td>
                            <td width="100"><b>글쓴이</b></td>
                            <td width="100"><b>날짜</b></td>
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
        </Container>
    );
  }
}

export default App;
