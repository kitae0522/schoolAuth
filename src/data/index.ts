import { edutypeType, regionType } from '../types'

const DATA: { EDUTYPE: edutypeType, REGION: regionType } = {
    /* 교육기관 유형 */
    EDUTYPE: {
        KINDERGARTEN: '1',
        ELEMENTARY: '2',
        MIDDLE: '3',
        HIGH: '4',
        SPECIAL: '5'
    },
    /* 관할 교육청 URL */
    REGION: {
        SEOUL: ['01', 'senhcs.eduro.go.kr'],
        BUSAN: ['02', 'penhcs.eduro.go.kr'],
        DAEGU: ['03', 'dgehcs.eduro.go.kr'],
        INCHEON: ['04', 'icehcs.eduro.go.kr'],
        GWANGJU: ['05', 'genhcs.eduro.go.kr'],
        DAEJEON: ['06', 'djehcs.eduro.go.kr'],
        ULSAN: ['07', 'usehcs.eduro.go.kr'],
        SEJONG: ['08', 'sjehcs.eduro.go.kr'],
        GYEONGGI: ['10', 'goehcs.eduro.go.kr'],
        KANGWON: ['11', 'kwehcs.eduro.go.kr'],
        CHUNGBUK: ['12', 'cbehcs.eduro.go.kr'],
        CHUNGNAM: ['13', 'cnehcs.eduro.go.kr'],
        JEONBUK: ['14', 'jbehcs.eduro.go.kr'],
        JEONNAM: ['15', 'jnehcs.eduro.go.kr'],
        GYEONGBUK: ['16', 'gbehcs.eduro.go.kr'],
        GYEONGNAM: ['17', 'gnehcs.eduro.go.kr'],
        JEJU: ['18', 'jjehcs.eduro.go.kr']
    },
}

export default DATA;