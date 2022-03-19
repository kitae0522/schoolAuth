import findUser from './core/findUser';
import searchSchool from './core/searchSchool';
import { findUserType, searchSchoolType, edutypeType, regionType } from './types';
import Data from './data';

class SchoolAuth {

  private _init: boolean;
  private _authURL: string;
  private _schoolCode: string;

  public _data: { EDUTYPE: edutypeType, REGION: regionType };

  constructor() {
    this._init = false;
    this._authURL = '';
    this._schoolCode = '';
    this._data = Data;
  }

  private _prepare() {
    if (!this._init) {
      throw new Error('초기화가 진행되지 않았습니다.');
    }
  }

  public init(authURL: string, schoolCode: string): void {
    this._init = true;
    this._authURL = authURL;
    this._schoolCode = schoolCode;
  }

  public searchSchool(locationType: string, schoolType: string, schoolName: string): Promise<searchSchoolType> {
    return searchSchool(locationType, schoolType, schoolName);
  }

  public findUser(userName: string, userBirthday: string): Promise<findUserType> {
    this._prepare();
    return findUser(this._authURL, this._schoolCode, userName, userBirthday);
  }
}

export default SchoolAuth;
