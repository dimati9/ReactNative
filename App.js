import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Search from './Components/Search/Search';
import Login from './Components/Login/Login';

export default class App extends Component{
  state = {
      title: '',
      login: false,
      text: '',
      password: '',
      error: undefined,
      data: undefined,
  }
  Server = async () => {
    let res = await axios.get("https://reqres.in/api/users/2");
    let { data } = res.data;
    this.setState({ data: data });

  }
  Click = () => {
    if(this.state.text == '' || this.state.password == '') {
      this.setState({
        error: 'Заполните поля Логин и Пароль',
      })
    } else if(this.state.text.toLowerCase() == 'test' && this.state.password.toLowerCase() == '123456') {
      this.setState({
        login: this.state.login ? false : true,
        error: undefined,
      })
    }
    else {
      this.setState({
        error: 'Ошибка авторизации',

      })
    }
  };

  render() {
    return (
        <View style={styles.box}>
          <View style={styles.container}>
            <Text style={styles.text}>Твой дом в комане</Text>
            <Text style={styles.text}>{this.state.data}</Text>

          </View>
          <View style={styles.main}>
            <TextInput
                style={styles.login}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                placeholder="Логин"
                placeholderTextColor="#000"
            />
            <TextInput
                style={styles.login}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                placeholder="Пароль"
                placeholderTextColor="#000"
            />
            <Button style={styles.button} title={this.state.login ? 'Выйти' : 'Авторизация'}  onPress={this.Click} />
            <Button style={styles.button} title="Забыли пароль?"  onPress={this.Server} />
            <Text style={styles.textError}>{this.state.error ? this.state.error : ''}</Text>
          </View>
            <Login login={this.state.login}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'space-around',
  },
  main: {
    flex: 11,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#30d0fe',
    height: 80,
    justifyContent: 'center',
    paddingTop: 60,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',

  },
  login: {
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    minWidth: 160,
    minHeight: 50,
    borderWidth: 1,
    borderColor: '#000'
  },
  text : {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  textError : {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
  }
});
