import SchoolAuth from './index';

const schoolAuth = new SchoolAuth();
schoolAuth.init(schoolAuth._data.REGION.SEOUL[1], 'B100000581');

const f1 = async () => {
    const schoolList = await schoolAuth.searchSchool(
        schoolAuth._data.REGION.SEOUL[0],
        schoolAuth._data.EDUTYPE.HIGH,
        '단국대학교'
    );
    console.log(schoolList)
}

const f2 = async () => {
    const authResult = await schoolAuth.findUser('송기태', '040522')
    console.log(authResult)
}

f1();
f2();