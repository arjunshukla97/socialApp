import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Input } from '@components/Input';
import colors from '@constants/colors';
import { Button } from '@components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@redux/action/auth';
import Text from '@components/Text';
import { styles } from './styles';
import { EMAIL_REGEX } from '@constants/regex';

const Login = () => {
	const dispatch = useDispatch();
	const { authLoading } = useSelector(state => state.auth);
	const [states, setStates] = useState({
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState({
		email: '',
		password: '',
	});

	const changeValue = (key, val) => {
		setStates({ ...states, [key]: val });
	};

	const changeError = (key, val) => {
		setErrors({ ...errors, [key]: val });
	};
	const _login = () => {
		dispatch(login({ user: states }));
	};

	const onEmailChange = text => {
		let email = text.trim();
		if (email == '') {
			changeError('email', '');
		} else {
			if (!EMAIL_REGEX?.test(email)) {
				changeError('email', 'Please enter a valid Email Address.');
			} else {
				changeError('email', '');
			}
		}
		changeValue('email', email);
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={{ flex: 1 }}>
				<Text style={styles.hi}>Hi!</Text>
				<Text style={styles.header}>
					Let's login to make the most out of our app features!
				</Text>
				<Input
					label={'Email'}
					value={states?.email}
					onChangeText={onEmailChange}
					placeholder={'Ex- john.doe@mail.com'}
					error={errors?.email}
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
