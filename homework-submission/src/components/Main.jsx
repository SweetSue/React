import React, { Component } from 'react';
import PostData from './TasksList.json';

class Main extends Component {
  state = {
    list: [
      { do: 'Get out of bed', date: 'Wed Sep 13 2017' },
      { do: 'Brush teeth', date: 'Thu Sep 14 2017' },
      { do: 'Eat breakfast', date: 'Fri Sep 15 2017' },
    ],
    tasks: ['id', 'description', 'deadline'],
  };

  render() {
    const {} = this.state;
    return (
      <div key={1}>
        <h2>Static List</h2>
        <ul>
          {this.state.list.map(std => (
            <li>
              {std.do}, {std.date}
            </li>
          ))}
        </ul>
        <h2>Dynamic List</h2>
        <ol>
          {PostData.map((postDetail, index) => {
            return (
              <li key={postDetail.id} className={postDetail.done === true ? 'done' : ''}>
                <span class="big">{postDetail.description}</span>
                <br />
                Deadline: {postDetail.deadline}
                <br />
                Status: {JSON.stringify(postDetail.done)}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default Main;
