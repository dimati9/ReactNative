import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { Login, List} from './Components'
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
      list: undefined,
  };
  getList = async () => {
      const response = await fetch("https://reqres.in/api/unknown");
      const data  = await response.json();
      this.setState({list : data.data});
  }
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
      console.log('h:', h);
      console.log('w:', w);
      const { box , container, text, main, login, button, textError } = styles;
    return (
        <View style={box}>
          <View style={container}>
            <Text style={text}>Твой дом в комане</Text>
            <Text style={text}>{this.state.data ? this.state.data.first_name : ''}</Text>

          </View>

            {this.state.list == undefined &&
          <View style={main}>
            <TextInput
                style={login}
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
            <Button style={button} title={this.state.login ? 'Выйти' : 'Авторизация'}  onPress={this.Login} />
            <Button style={button} title="Забыли пароль?"  onPress={this.Server} />
            <Button style={button} title="Получить список"  onPress={this.getList} />
            <Text style={textError}>{this.state.error ? this.state.error : ''}</Text>
          </View> }
            <Login
                login={this.state.login}
                name={this.state.text}
            />
            {this.state.list != undefined && <ScrollView>
              {this.state.list.map(item => (
                  <List
                      data = {item} key = {item.id}
                  />
                  ))}
           </ScrollView> }
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