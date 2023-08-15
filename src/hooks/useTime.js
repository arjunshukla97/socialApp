import React, { useState, useEffect } from 'react';
import { convertTime } from '@utils/helper';
import { useSelector } from 'react-redux';

export const useTime = date => {
	const [dt, setDt] = useState(convertTime(date));
	const { comments } = useSelector(state => state.home);

	useEffect(() => {
		let secTimer = setInterval(() => {
			setDt(convertTime(date));
		}, 1000);

		return () => clearInterval(secTimer);
	}, [comments]);
	return dt;
};
