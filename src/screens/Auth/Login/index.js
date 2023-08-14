import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Input } from '@components/Input';
import colors from '@constants/colors';
import { heightPixel } from '@utils/helper';
import { Button } from '@components/Button';

const Login = () => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
			<View style={{ flex: 1 }}>
				<Input label={'Email'} placeholder={'Ex- john.doe@mail.com'} />
				<Input
					label={'Password'}
					placeholder={'Enter password'}
					isSecure={true}
				/>
			</View>
			<Button title={'Login'} />
		</SafeAreaView>
	);
};

export default Login;
