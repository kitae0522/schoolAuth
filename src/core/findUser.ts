import axios from 'axios';
import RSA_ENC from './cryptoHandle';
import { findUserType } from '../types';

const findUserAPIHandle = (authURL: string): string => (`https://${authURL}/v2/findUser?`)

const findUser = async (authURL: string, schoolCode: string, userName: string, userBirthday: string):
    Promise<findUserType> => {

    if (!authURL || !schoolCode || !userName || !userBirthday)
        throw new Error('필수 옵션이 비어있습니다.');

    try {
        await axios.post(findUserAPIHandle(authURL),
            JSON.stringify({
                name: RSA_ENC(userName),
                birthday: RSA_ENC(userBirthday),
                loginType: 'school',
                orgCode: schoolCode
            }),
            { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
        return {
            isError: false,
            message: '학생 인증에 성공했습니다.',
            userName, userBirthday
        };
    } catch {
        return {
            isError: true,
            message: '학생 인증에 실패했습니다.',
            userName, userBirthday
        };
    }
}

export default findUser;