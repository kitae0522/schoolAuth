import axios from 'axios';
import { searchSchoolType } from '../types';

const searchSchoolAPIHandle = (locationType: string, schoolType: string, schoolName: string): string => (
    'https://hcs.eduro.go.kr/v2/searchSchool?' +
    `lctnScCode=${locationType}&` +
    `schulCrseScCode=${schoolType}&` +
    `orgName=${schoolName}&` +
    'loginType=school'
)

const searchSchool = async (locationType: string, schoolType: string, schoolName: string):
    Promise<searchSchoolType> => {

    if (!schoolName)
        throw new Error('필수 옵션이 비어있습니다.');

    try {
        const response = await axios.get(searchSchoolAPIHandle(locationType, schoolType, encodeURI(schoolName)));
        const schoolList = response.data?.schulList.map((item: any) => {
            return {
                schoolCode: item?.orgCode,
                schoolName: item?.kraOrgNm,
                authURL: item?.atptOfcdcConctUrl
            }
        });
        if (schoolList.length) {
            return {
                isError: false,
                message: '데이터를 로드하는데 성공했습니다.',
                schoolList
            };
        }
        return {
            isError: true,
            message: '데이터를 로드하는데 실패했습니다.',
        }
    } catch (err) {
        return {
            isError: true,
            message: '인증 요청을 보냈지만, 서버가 응답하지 않습니다.',
            err
        };
    }
}

export default searchSchool;