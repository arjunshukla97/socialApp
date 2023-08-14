import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Input } from '@components/Input';
import colors from '@constants/colors';
import { Button } from '@components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@redux/action/auth';
import Text from '@components/Text';
import { styles } from './styles';

const Login = () => {
	const dispatch = useDispatch();
	const { authLoading } = useSelector(state => state.auth);
	const [states, setStates] = useState({
		email: '',
		password: '',
	});

	const changeValue = (key, val) => {
		setStates({ ...states, [key]: val });
	};

	const _login = () => {
		dispatch(login({ user: states }));
	};
	return (
		<SafeAreaView style={styles.container}>
			<View style={{ flex: 1 }}>
				<Text style={styles.hi}>Hi!</Text>
				<Text style={styles.header}>
					Let's sign-in to make the most out of our app features!
				</Text>
				<Input
					label={'Email'}
					value={states?.email}
					onChangeText={text => changeValue('email', text)}
					placeholder={'Ex- john.doe@mail.com'}
				/>
				<Input
					label={'Password'}
					value={states?.password}
					onChangeText={text => changeValue('password', text)}
					placeholder={'Enter password'}
					isSecure={true}
				/>
			</View>
			<Button
				title={'Login'}
				onPress={_login}
				disabled={!states.email || !states.password ? true : false}
				loading={authLoading}
			/>
		</SafeAreaView>
	);
};

export default Login;
