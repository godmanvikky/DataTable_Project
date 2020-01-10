import React, { Component, Fragment } from "react";
import request from "superagent";
import debounce from "lodash.debounce";
import { Suspense, lazy } from 'react';
const DataTable = React.lazy(() => import('./DataTable'));
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      hasMore: true,
      isLoading: false,
      data: [],
      width:null
    };

    window.onscroll = debounce(() => {
      const {
        loadUsers,
        state: {
          error,
          isLoading,
          hasMore,
        },
      } = this;
      if (error || isLoading || !hasMore) return;
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        loadUsers();
      }
    }, 100);
  }

  componentWillMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    this.setState({ isLoading: true }, () => {
      request
        .get('https://jsonplaceholder.typicode.com/photos')
        .then((results) => {
          
          // Creates a massaged array of user data
          const nextUsers = results.body.map(data => ({
            title: data.title,
            url:data.url,
            albumId:data.albumId,
            thumbnailUrl:data.thumbnailUrl
          }));

          // Merges the next users into our existing users
          this.setState({
            hasMore: this.state.data.length,
            isLoading: false,
            data: [
              ...this.state.data,
              ...nextUsers,
            ],
          });
        })
        .catch((err) => {
          this.setState({
            error: err.message,
            isLoading: false,
           });
        })
    });
  }
  componentWillUnmount(){
    this.data.remove();
    this.hasMore.remove();
    console.log("Clear Everything")
  }
  render() {
    const {
      error,
      hasMore,
      isLoading,
      data,
    } = this.state;
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <DataTable data={this.state.data} width={this.state.width}></DataTable>
        </Suspense>
        {error &&
          <div style={{ color: '#900' }}>
            {error}
          </div>
        }
        {isLoading &&
          <div>Loading...</div>
        }
        {!hasMore &&
          <div> You reached the end!</div>
        }
      </div>
    );
  }
}
export default Main;