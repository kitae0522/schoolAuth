import axios from 'axios';
import RSA_ENC from './cryptoHandle'; // 암호화 
import { findUserType } from '../types'; // 필수요소 확인

const findUserAPIHandle = (authURL: string): string => (`https://${authURL}/v2/findUser`) 

const findUser = async (authURL: string, schoolCode: string, userName: string, userBirthday: string):
    Promise<findUserType> => {

    if (!authURL || !schoolCode || !userName || !userBirthday)
        throw new Error('필수 옵션이 비어있습니다.'); // 입력값 4개 중 하나라도 존재하지 않을 경우 에러 뱉기

    try {
        await axios.post(findUserAPIHandle(authURL),
            JSON.stringify({
                name: RSA_ENC(userName), // 이름 RSA 암호화해서 넣어두기
                birthday: RSA_ENC(userBirthday), // 생일도
                loginType: 'school',
                orgCode: schoolCode
            }), // 를 JSON화해두기
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
