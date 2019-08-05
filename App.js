import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Login from './Components/Login/Login';
import { h, w } from './constants';

export default class App extends Component{
  state = {
      title: '',
      login: false,
      text: '',
      password: '',
      error: undefined,
      data: undefined,
      token: undefined,
  };
  Server = async () => {
      const response = await fetch("https://reqres.in/api/users/2");
    const data  = await response.json();
      this.setState({data : data.data});

  };
    Login = async () => {
        if(this.state.text == '' || this.state.password == '') {
            this.setState({
                error: 'Заполните поля Логин и Пароль',
            })
        } else {
            try {
                const response = await fetch("https://reqres.in/api/login/", {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json"
                    },
                    body:JSON.stringify({
                        email:'eve.holt@reqres.in',
                        password:'1123',

                    }),
                })
                const data = await response.json();
                if(data.token) {
                    this.setState({
                        token: data.token,
                        login: true,
                        error: undefined,
                    })
                    console.log(data);
                } else {
                    this.setState({
                        error: 'Проверьте правильность логина и/или пароля'
                    })
                }
            } catch (e) {
                throw e;
            }
        }

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
      cobsole.log('h:', h);
    return (
        <View style={styles.box}>
          <View style={styles.container}>
            <Text style={styles.text}>Твой дом в комане</Text>
            <Text style={styles.text}>{this.state.data ? this.state.data.first_name : ''}</Text>

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
            <Button style={styles.button} title={this.state.login ? 'Выйти' : 'Авторизация'}  onPress={this.Login} />
            <Button style={styles.button} title="Забыли пароль?"  onPress={this.Server} />
            <Text style={styles.textError}>{this.state.error ? this.state.error : ''}</Text>
          </View>
            <Login
                login={this.state.login}
                name={this.state.text}
            />
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
