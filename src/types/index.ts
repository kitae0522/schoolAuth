export interface edutypeType {
    KINDERGARTEN: string,
    ELEMENTARY: string,
    MIDDLE: string,
    HIGH: string,
    SPECIAL: string
}

export interface regionType {
    SEOUL: [string, string],
    INCHEON: [string, string],
    BUSAN: [string, string],
    GWANGJU: [string, string],
    DAEJEON: [string, string],
    DAEGU: [string, string],
    SEJONG: [string, string],
    ULSAN: [string, string],
    GYEONGGI: [string, string],
    KANGWON: [string, string],
    CHUNGBUK: [string, string],
    CHUNGNAM: [string, string],
    GYEONGBUK: [string, string],
    GYEONGNAM: [string, string],
    JEONBUK: [string, string],
    JEONNAM: [string, string],
    JEJU: [string, string]
}

export interface searchSchoolType {
    isError: boolean,
    message: string,
    schoolList?: Array<{
        schoolCode: string,
        schoolName: string,
        authURL: string
    }>,
    err?: unknown
}

export interface findUserType {
    isError: boolean,
    message: string,
    userName?: string,
    userBirthday?: string,
    err?: unknown
}