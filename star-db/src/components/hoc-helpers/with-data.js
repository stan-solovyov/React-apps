import React, { Component } from 'react';
import Spinner from '../spinner';

const withData = (View, getData) => {
    return class extends Component {
      state = { data: null };
  
      async componentDidMount() {
        const items = await getData();
        this.setState({ data: items });
      }
  
      render() {
        const { data } = this.state;
        if (!data) {
          return <Spinner />;
        }
        return <View {...this.props} data={data}></View>
      }
    }
  }

  export default withData;