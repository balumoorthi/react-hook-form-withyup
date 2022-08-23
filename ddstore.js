import {
  STATUS,
  COUNTRY,
  ZONE,
  UNIT,
  DISCIPLINE,
  LEVEL,
  MODULETYPE,
  PROGRAMTYPE,
  LANGUAGE,
  ASSETCATEGORRY,
  AGEGROUP,
  GENERALSTATUS,
  USERSTATUS,
  COLLEGESTATUS,
  TRAINERSTATUS,
  PROGRAMSTATUS,
  CLEAR,
  USERROLE,
  TRAINER,
  COLLEGEPOC,
  MODULELIST,
  USERROLELIST,
  SESSIONMODULE,
  PROGRAMREPORTSTATUS,
  FONTFAMILY,
  FAQCATEGORY,
  BATCH,
  DURATIONTIMING,
  CERTIFICATELEVEL,
  TRAINERFILTER,
  PARTICIPANTCONFIGTYPE,
  ARTIFACTTYPE,
  COLLEGES
} from 'store/actions/type/dropdown';

const initialState = {
  status: [],
  country: [],
  zone: [],
  unit: [],
  discipline: [],
  level: [],
  moduleType: [],
  programType: [],
  language: [],
  assetCategory: [],
  ageGroup: [],
  generalStatus: [],
  userStatus: [],
  collegeStatus: [],
  trainerStatus: [],
  programStatus: [],
  roles: [],
  trainer: [],
  volunteerUsers: [],
  moduleList: [],
  userRoleList: [],
  sessionModule: [],
  programReportStatus: [],
  fontFamily: [],
  faqCategoryList: [],
  batch: [],
  durationTiming:[],
  certificateLevel: [],
  trainerSearchOption:[],
  participantConfigStatType: [],
  artifactType: [],
  colleges: []
};

const dropdownDetails = (state = initialState, action) => {
  switch (action.type) {
    case STATUS:
      return {
        ...state, status: action.payload
      };
    case COUNTRY:
      return {
        ...state, country: action.payload
      };
    case ZONE:
      return {
        ...state, zone: action.payload
      };
    case UNIT:
      return {
        ...state, unit: action.payload
      };
    case DISCIPLINE:
      return {
        ...state, discipline: action.payload
      };
    case LEVEL:
      return {
        ...state, level: action.payload
      };
    case MODULETYPE:
      return {
        ...state, moduleType: action.payload
      };
    case PROGRAMTYPE:
      return {
        ...state, programType: action.payload
      };
    case LANGUAGE:
      return {
        ...state, language: action.payload
      };
    case ASSETCATEGORRY:
      return {
        ...state, assetCategory: action.payload
      };
    case AGEGROUP:
      return {
        ...state, ageGroup: action.payload
      };
    case GENERALSTATUS:
      return {
        ...state, generalStatus: action.payload
      };
    case USERSTATUS:
      return {
        ...state, userStatus: action.payload
      };
    case COLLEGESTATUS:
      return {
        ...state, collegeStatus: action.payload
      };
    case TRAINERSTATUS:
      return {
        ...state, trainerStatus: action.payload
      };
    case PROGRAMSTATUS:
      return {
        ...state, programStatus: action.payload
      };
    case PROGRAMREPORTSTATUS:
      return {
        ...state, programReportStatus: action.payload
      };
    case TRAINERFILTER:
      return {
        ...state, trainerSearchOption: action.payload
      };
    case PARTICIPANTCONFIGTYPE:
      return {
        ...state, participantConfigType: action.payload
      };
    case ARTIFACTTYPE:
        return {
          ...state, artifactType: action.payload
        };
    case USERROLE:
      return {
        ...state, roles: action.payload
      };
    case TRAINER:
      return {
        ...state, trainer: action.payload
      };
    case COLLEGEPOC:
      return {
        ...state, volunteerUsers: action.payload
      };
    case MODULELIST:
      return {
        ...state, moduleList: action.payload
      };
    case USERROLELIST:
      return {
        ...state, userRoleList: action.payload
      };
    case SESSIONMODULE:
      return {
        ...state, sessionModule: action.payload
      };
    case FONTFAMILY:
      return {
        ...state, fontFamily: action.payload
      };
    case CERTIFICATELEVEL:
      return {
        ...state, certificateLevel: action.payload
      };
    case FAQCATEGORY:
      return {
        ...state, faqCategoryList: action.payload
      };
    case BATCH:
      return {
        ...state, batch: action.payload
      };
    case DURATIONTIMING:
      return {
        ...state, durationTiming: action.payload
      };
    case CLEAR:
      return {
        ...state, ...initialState
      };
    case COLLEGES:
        return {
          ...state, colleges: action.payload
        };
    default:
      return { ...state };
  }
};

export {
  dropdownDetails
}
