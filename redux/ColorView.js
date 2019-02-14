
import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import changecolor from './action'



class ColorView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      psw: ''
    }
  }
  render() {
    const { colorName, user, password } = this.props
    const { username, psw } = this.state
    return (
      <View >
        <View style={{ backgroundColor: colorName,justifyContent:'space-evenly',  }}>
          <TouchableOpacity onPress={() => this.props.dispatch({ type: 'CHANGE_COLOR', colorName: 'blue' })}>
            <Text style={{ fontSize: 20 }}>Blue</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.dispatch({ type: 'CHANGE_COLOR', colorName: 'green' })}>
            <Text style={{ fontSize: 20 }}>Green</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <TextInput style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}
            placeholder='USERNAME'
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
          />
          <TextInput style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}
            placeholder='PASSWORD'
            value={this.state.psw}
            onChangeText={(psw) => this.setState({ psw })} />

          <TouchableOpacity onPress={() => this.props.dispatch({ type: 'SUBMIT_USER', user: username, password: psw })}>
            <Text style={{ fontSize: 20 }}>Submit</Text>
          </TouchableOpacity>

          <Text>{user}</Text>
          <Text>{password}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    colorName: state.colorName,
    user: state.user,
    password: state.password
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changebgColor: (colorName) => dispatch({ type: 'CHANGE_COLOR', colorName }),
//     // submitbguser: (user,password) => dispatch({ type: 'SUBMIT_USER', user,password })
//   }
// }

export default connect(mapStateToProps)(ColorView);