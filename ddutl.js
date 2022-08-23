import appStore from 'store/index';

// config
import config from 'assets/config';

// utils
import { isEmpty, isArray, isObject } from 'lodash';

import { lStorage } from 'utils/storage';

// services
import DropdownService from 'services/dropdown/dropdown.service';

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

const getGeneralStatuses = async () => {
  try {
    let dd = appStore.getState().dropdownDetails;

    if (isEmpty(dd.generalStatus)) {
      let dropdownService = new DropdownService()
      let apiResponse = await dropdownService.getStatusesByCategory({ status_category: "GENERAL" })

      if (apiResponse && apiResponse.data) {
        let apiResponseData = apiResponse.data;

        if (!apiResponseData.isError) {
          let dropdownOptions = apiResponseData.data.map(value => {
            return { label: value.status_name, value: value.status_id, slug: value.status_slug }
          });
          appStore.dispatch({ type: GENERALSTATUS, payload: dropdownOptions })
        }
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getUserStatuses = async () => {
  try {
    let dd = appStore.getState().dropdownDetails;

    if (isEmpty(dd.userStatus)) {
      let dropdownService = new DropdownService()
      let apiResponse = await dropdownService.getStatusesByCategory({ status_category: "USER" })

      if (apiResponse && apiResponse.data) {
        let apiResponseData = apiResponse.data;

        if (!apiResponseData.isError) {
          let dropdownOptions = apiResponseData.data.map(value => {
            return { label: value.status_name, value: value.status_id, slug: value.status_slug }
          });
          appStore.dispatch({ type: USERSTATUS, payload: dropdownOptions })
        }
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getCollegeStatuses = async () => {
  try {
    let dd = appStore.getState().dropdownDetails;

    if (isEmpty(dd.collegeStatus)) {
      let dropdownService = new DropdownService()
      let apiResponse = await dropdownService.getStatusesByCategory({ status_category: "COLLEGE" })

      if (apiResponse && apiResponse.data) {
        let apiResponseData = apiResponse.data;

        if (!apiResponseData.isError) {
          let dropdownOptions = apiResponseData.data.map(value => {
            return { label: value.status_name, value: value.status_id, slug: value.status_slug }
          });
          appStore.dispatch({ type: COLLEGESTATUS, payload: dropdownOptions })
        }
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getTrainerStatuses = async () => {
  try {
    let dd = appStore.getState().dropdownDetails;

    if (isEmpty(dd.trainerStatus)) {
      let dropdownService = new DropdownService()
      let apiResponse = await dropdownService.getStatusesByCategory({ status_category: "TRAINER" })

      if (apiResponse && apiResponse.data) {
        let apiResponseData = apiResponse.data;

        if (!apiResponseData.isError) {
          let dropdownOptions = apiResponseData.data.map(value => {
            return { label: value.status_name, value: value.status_id, slug: value.status_slug }
          });
          appStore.dispatch({ type: TRAINERSTATUS, payload: dropdownOptions })
        }
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getProgramStatuses = async () => {
  try {
    let dd = appStore.getState().dropdownDetails;

    if (isEmpty(dd.programStatus)) {
      if (isArray(config.programStatusOptions)) {
        let dropdownOptions = config.programStatusOptions.map(value => {
          return { label: value.label, value: value.value }
        });
        appStore.dispatch({ type: PROGRAMSTATUS, payload: dropdownOptions })
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}
const getProgramStatusDropDown = async () => {
  try {
    let dd = appStore.getState().dropdownDetails;

    if (isEmpty(dd.programReportStatus)) {
      if (isArray(config.programStatusDropdown)) {
        let dropdownOptions = config.programStatusDropdown.map(value => {
          return { label: value.label, value: value.value }
        });
        appStore.dispatch({ type: PROGRAMREPORTSTATUS, payload: dropdownOptions })
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getStatuses = async () => {
  try {
    let dd = appStore.getState().dropdownDetails;

    if (isEmpty(dd.status)) {
      let dropdownService = new DropdownService()
      let apiResponse = await dropdownService.getStatuses()

      if (apiResponse && apiResponse.data) {
        let apiResponseData = apiResponse.data;

        if (!apiResponseData.isError) {
          let dropdownOptions = apiResponseData.data.map(value => {
            return { label: value.status_name, value: value.status_id, slug: value.status_slug }
          });
          appStore.dispatch({ type: STATUS, payload: dropdownOptions })
        }
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getCountries = async () => {
  try {
    let dd = appStore.getState().dropdownDetails;

    if (isEmpty(dd.country)) {
      let dropdownService = new DropdownService()
      let apiResponse = await dropdownService.getCountries()

      if (apiResponse && apiResponse.data) {
        let apiResponseData = apiResponse.data;

        if (!apiResponseData.isError) {
          let dropdownOptions = apiResponseData.data.map(value => {
            return { label: value.country_name, value: value.country_id, slug: value.country_slug }
          });
          appStore.dispatch({ type: COUNTRY, payload: dropdownOptions })
        }
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getZones = async () => {
  try {
    let dd = appStore.getState().dropdownDetails;

    if (isEmpty(dd.zone)) {
      let dropdownService = new DropdownService()
      let apiResponse = await dropdownService.getZones()

      if (apiResponse && apiResponse.data) {
        let apiResponseData = apiResponse.data;
        apiResponseData.results.sort(function (x, y) {
          let nameOne = x.name.toUpperCase(),
          nameTwo = y.name.toUpperCase();
          return nameOne == nameTwo ? 0 : nameOne > nameTwo ? 1 : -1;
        });

        if (Array.isArray(apiResponseData.results)) {
          let dropdownOptions = apiResponseData.results.map(value => {
            return {
              label: value.name ? value.name.trim() : value.name,
              value: value.id,
              completeName: value.complete_name ? value.complete_name.trim() : value.complete_name
            }
          });
          appStore.dispatch({ type: ZONE, payload: dropdownOptions })
        }
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getUnits = async () => {
  try {
    let dd = appStore.getState().dropdownDetails;

    if (isEmpty(dd.unit)) {
      let dropdownService = new DropdownService()
      let apiResponse = await dropdownService.getUnits()

      if (apiResponse && apiResponse.data) {
        let apiResponseData = apiResponse.data;

        if (!apiResponseData.isError) {
          let dropdownOptions = apiResponseData.data.map(value => {
            return { label: value.unit_name, value: value.unit_id, slug: value.unit_slug }
          });
          appStore.dispatch({ type: UNIT, payload: dropdownOptions })
        }
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getDisciplines = async () => {
  try {
    let dd = appStore.getState().dropdownDetails;

    if (isEmpty(dd.discipline)) {
      let dropdownService = new DropdownService()
      let apiResponse = await dropdownService.getDisciplines()

      if (apiResponse && apiResponse.data) {
        let apiResponseData = apiResponse.data;

        if (!apiResponseData.isError) {
          let dropdownOptions = apiResponseData.data.map(value => {
            return { label: value.discipline_name, value: value.discipline_id, slug: value.discipline_slug }
          });
          appStore.dispatch({ type: DISCIPLINE, payload: dropdownOptions })
        }
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getLevels = async () => {
  try {
    let dd = appStore.getState().dropdownDetails;

    if (isEmpty(dd.level)) {
      let dropdownService = new DropdownService()
      let apiResponse = await dropdownService.getLevels()

      if (apiResponse && apiResponse.data) {
        let apiResponseData = apiResponse.data;

        if (!apiResponseData.isError) {
          let dropdownOptions = apiResponseData.data.map(value => {
            return { label: value.level_name, value: value.level_id, slug: value.level_slug }
          });
          appStore.dispatch({ type: LEVEL, payload: dropdownOptions })
        }
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getModuleTypes = async () => {
  try {
    let dd = appStore.getState().dropdownDetails;

    if (isEmpty(dd.moduleType)) {
      let dropdownService = new DropdownService()
      let apiResponse = await dropdownService.getModuleTypes()

      if (apiResponse && apiResponse.data) {
        let apiResponseData = apiResponse.data;

        if (!apiResponseData.isError) {
          let dropdownOptions = apiResponseData.data.map(value => {
            return { label: value.module_type_name, value: value.module_type_id, slug: value.module_type_slug }
          });
          appStore.dispatch({ type: MODULETYPE, payload: dropdownOptions })
        }
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getProgramTypes = async () => {
  try {
    let dd = appStore.getState().dropdownDetails;

    if (isEmpty(dd.programType)) {
      let dropdownService = new DropdownService()
      let apiResponse = await dropdownService.getProgramTypes()

      if (apiResponse && apiResponse.data) {
        let apiResponseData = apiResponse.data;

        if (!apiResponseData.isError) {
          let dropdownOptions = apiResponseData.data.map(value => {
            return { label: value.program_type_name, value: value.program_type_id, slug: value.program_type_slug }
          });
          appStore.dispatch({ type: PROGRAMTYPE, payload: dropdownOptions })
        }
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getLanguages = async () => {
  try {
    let dd = appStore.getState().dropdownDetails;

    if (isEmpty(dd.language)) {
      let dropdownService = new DropdownService()
      let apiResponse = await dropdownService.getLanguages()

      if (apiResponse && apiResponse.data) {
        let apiResponseData = apiResponse.data;

        if (!apiResponseData.isError) {
          let dropdownOptions = apiResponseData.data.map(value => {
            return { label: value.language_name, value: value.language_id, slug: value.language_slug }
          });
          appStore.dispatch({ type: LANGUAGE, payload: dropdownOptions })
        }
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getAssetCategories = async () => {
  try {
    let dd = appStore.getState().dropdownDetails;

    if (isEmpty(dd.assetCategory)) {
      let dropdownService = new DropdownService()
      let apiResponse = await dropdownService.getAssetCategories()

      if (apiResponse && apiResponse.data) {
        let apiResponseData = apiResponse.data;

        if (!apiResponseData.isError) {
          let dropdownOptions = apiResponseData.data.map(value => {
            return { label: value.label, value: value.asset_category_id, slug: value.slug }
          });
          appStore.dispatch({ type: ASSETCATEGORRY, payload: dropdownOptions })
        }
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getAgeGroups = async () => {
  try {
    let dd = appStore.getState().dropdownDetails;

    if (isEmpty(dd.ageGroup)) {
      let dropdownService = new DropdownService()
      let apiResponse = await dropdownService.getAgeGroups()

      if (apiResponse && apiResponse.data) {
        let apiResponseData = apiResponse.data;

        if (!apiResponseData.isError) {
          let dropdownOptions = apiResponseData.data.map(value => {
            return { label: value.age_group_name, value: value.age_group_id, slug: value.age_group_slug }
          });
          appStore.dispatch({ type: AGEGROUP, payload: dropdownOptions })
        }
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getUserRoles = async () => {
  try {
    appStore.dispatch({ type: USERROLE, payload: [] })

    let userDetails = lStorage.get('authInfo');

    if (userDetails && userDetails.role_priority) {
      let dropdownService = new DropdownService()
      let apiResponse = await dropdownService.getUserRoles({ priority: userDetails.role_priority })

      if (apiResponse && apiResponse.data) {
        let apiResponseData = apiResponse.data;

        if (!apiResponseData.isError) {
          let dropdownOptions = apiResponseData.data.map(value => {
            return { label: value.label, value: value.role_id, slug: value.slug }
          });
          appStore.dispatch({ type: USERROLE, payload: dropdownOptions })
        }
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getTrainers = async (payload) => {
  try {
    let dropdownService = new DropdownService()
    let apiResponse = await dropdownService.getTrainers(payload)

    if (apiResponse && apiResponse.data) {
      let apiResponseData = apiResponse.data;
      if (!apiResponseData.isError && apiResponseData.data) {
        let rows = [], dropdownOptions;
        if (isArray(apiResponseData.data))
          rows = apiResponseData.data;
        else if (isObject(apiResponseData.data))
          rows = [apiResponseData.data];
        dropdownOptions = rows.map(value => {
          let dropdownOption = {
            label: value.name || "",
            value: value.user_id,
            email: value.email_address || ""
          }
          if (dropdownOption.email)
            dropdownOption.label = dropdownOption.label + " (" + dropdownOption.email + ")";
          return dropdownOption;
        });
        appStore.dispatch({ type: TRAINER, payload: dropdownOptions })
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getAvailableVolunteersForPOC = async (payload) => {
  try {
    appStore.dispatch({ type: COLLEGEPOC, payload: [] })

    let userDetails = lStorage.get('authInfo');

    if (userDetails && userDetails.role_priority) {
      let dropdownService = new DropdownService()
      let apiResponse = await dropdownService.getVolunteersForPOC(payload)

      if (apiResponse && apiResponse.data) {
        let apiResponseData = apiResponse.data;
        if (!apiResponseData.isError && apiResponseData.data) {
          let rows = [], dropdownOptions;
          if (isArray(apiResponseData.data))
            rows = apiResponseData.data;
          else if (isObject(apiResponseData.data))
            rows = [apiResponseData.data];
          dropdownOptions = rows.map(value => ({
            label: value.name || "",
            value: value.user_id,
            city: value.city || "",
            state: value.state || "",
            zone: value.zone || "",
            // role: value.role.label || "" ,
            role: (value.user_type === 'T' || value.secondary_user_type === 'T') ? "Trainer" : value.role.label
          }));
          appStore.dispatch({ type: COLLEGEPOC, payload: dropdownOptions })
        }
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getModuleDropdown = async () => {
  let dd = appStore.getState().dropdownDetails;

  if (isEmpty(dd.discipline)) {
    let dropdownService = new DropdownService()
    let apiResponse = await dropdownService.getModuleList()
    if (apiResponse && apiResponse.data) {
      let apiResponseData = apiResponse.data;

      if (!apiResponseData.isError) {
        let dropdownOptions = apiResponseData.data.map(value => {
          return { label: value.module_name, value: value.module_id }
        });
        appStore.dispatch({ type: MODULELIST, payload: dropdownOptions })
      }
    }
  }
}

const getUserRoleForRegister = async () => {

  let dropdownService = new DropdownService()
  let apiResponse = await dropdownService.getUserRoleList({ priority: 2 })
  if (apiResponse && apiResponse.data) {
    let apiResponseData = apiResponse.data;
    if (!apiResponseData.isError) {
      let dropdownOptions = apiResponseData.data.map(value => {
        return { label: value.label, value: value.role_id, slug: value.slug }
      });
      appStore.dispatch({ type: USERROLELIST, payload: dropdownOptions })
    }
  }
}

const getSessionModuleDropdown = async (programID) => {
  try {
    appStore.dispatch({ type: SESSIONMODULE, payload: [] })

    let dropdownService = new DropdownService()
    let apiResponse = await dropdownService.getAvailableModulesForProgram({ program_id: programID });
    if (apiResponse && apiResponse.data) {
      let apiResponseData = apiResponse.data;

      if (!apiResponseData.isError) {
        let dropdownOptions = apiResponseData.data.map(value => {
          return {
            label: value.module_name,
            value: value.module_id,
            discipline: (value.disciplines && value.disciplines.discipline_name) ? value.disciplines.discipline_name : "-",
            level: (value.levels && value.levels.level_name) ? value.levels.level_name : "-",
            programType: (value.program_types && value.program_types.program_type_name) ? value.program_types.program_type_name : "-"
          }
        });
        appStore.dispatch({ type: SESSIONMODULE, payload: dropdownOptions })
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}
const getFontFamilyList = async () => {
  try {
    let dd = appStore.getState().dropdownDetails;
    if (isEmpty(dd.fontFamily)) {
      if (isArray(config.fontFamilyValues)) {
        let dropdownOptions = config.fontFamilyValues.map(value => {
          return { label: value.label, value: value.value }
        });
        appStore.dispatch({ type: FONTFAMILY, payload: dropdownOptions })
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getCertLevelsList = async () => {
  try {
    let dd = appStore.getState().dropdownDetails;
    if (isEmpty(dd.certificateLevel)) {
      let dropdownService = new DropdownService()
      let apiResponse = await dropdownService.getProgramTypes()
      let dropdownOption = {
        program_type_id: "",
        program_type_name: "",
        program_type_slug: ""
      }
      if (apiResponse && apiResponse.data) {
        let apiResponseData = apiResponse.data;
        if (!apiResponseData.isError) {
          dropdownOption.program_type_id = apiResponseData.data.length + 1;
          dropdownOption.program_type_name = "Others";
          dropdownOption.program_type_slug = "others";
          apiResponseData.data.push(dropdownOption);
          let dropdownOptions = apiResponseData.data.map(value => {
            // return { label: value.level_name, value: value.level_name, slug: value.level_slug }
            return { label: value.program_type_name, value: value.program_type_name, slug: value.program_type_slug }
          });
          appStore.dispatch({ type: CERTIFICATELEVEL, payload: dropdownOptions })
        }
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getFaqCategoryDropdown = async (userType) => {
  try {
    appStore.dispatch({ type: FAQCATEGORY, payload: [] })

    let dropdownService = new DropdownService()
    let apiResponse = await dropdownService.getFaqCategoryList(userType);
    if (apiResponse && apiResponse.data) {
      let apiResponseData = apiResponse.data;
      if (!apiResponseData.isError) {
        let dropdownOptions = apiResponseData.data.map(value => {
          return { label: value.category, value: value.faq_category_id }
        });
        appStore.dispatch({ type: FAQCATEGORY, payload: dropdownOptions })
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getBatches = async () => {
  try {
    appStore.dispatch({ type: BATCH, payload: [] });

    let dropdownService = new DropdownService();
    let apiResponse = await dropdownService.getBatches()

    if (apiResponse && apiResponse.data && !apiResponse.data.isError) {
      let apiResponseData = apiResponse.data.data;

      if (!apiResponseData.isError) {
        let dropdownOptions = apiResponseData.map(value => {
          return { label: value.batch_name, value: value.batch_id, slug: value.batch_slug }
        });
        appStore.dispatch({ type: BATCH, payload: dropdownOptions });
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getDurationTimingsVal = async () => {
  try {
    let dd = appStore.getState().dropdownDetails;
    if (isEmpty(dd.durationTiming)) {
      if (isArray(config.durationTimingValues)) {
        let dropdownOptions = config.durationTimingValues.map(value => {
          return { label: value.label, value: value.value }
        });
        appStore.dispatch({ type: DURATIONTIMING, payload: dropdownOptions })
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getTrainerSearchOption = async () => {
  try {
    let dd = appStore.getState().dropdownDetails;

    if (isEmpty(dd.trainerSearchOption)) {
      if (isArray(config.trainerSearchOption)) {
        let dropdownOptions = config.trainerSearchOption.map(value => {
          return { label: value.label, value: value.value }
        });
        appStore.dispatch({ type: TRAINERFILTER, payload: dropdownOptions })
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getParticipantConfigDropDown = async () => {
  try {
    let dd = appStore.getState().dropdownDetails;

    if (isEmpty(dd.participantConfigType)) {
      if (isArray(config.participantConfigDropdown)) {
        let dropdownOptions = config.participantConfigDropdown.map(value => {
          return { label: value.label, value: value.value }
        });
        appStore.dispatch({ type: PARTICIPANTCONFIGTYPE, payload: dropdownOptions })
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getArtifactTypeDropDown = async () => {
  try {
    let dd = appStore.getState().dropdownDetails;

    if (isEmpty(dd.artifactType)) {
      if (isArray(config.artifactTypeDropdown)) {
        let dropdownOptions = config.artifactTypeDropdown.map(value => {
          return { label: value.label, value: value.value }
        });
        appStore.dispatch({ type: ARTIFACTTYPE, payload: dropdownOptions })
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const getColleges = async () => {
  try {
    let dropdownService = new DropdownService()
    let apiResponse = await dropdownService.getColleges()

    if (apiResponse && apiResponse.data) {
      let apiResponseData = apiResponse.data;
      if (!apiResponseData.isError && apiResponseData.data) {
        let rows = [], dropdownOptions;
        if (isArray(apiResponseData.data))
          rows = apiResponseData.data;
        else if (isObject(apiResponseData.data))
          rows = [apiResponseData.data];
        dropdownOptions = rows.map(value => {
          let dropdownOption = {
            label: value.label || "",
            value: value.college_id,
            slug: value.slug || ""
          }
          return dropdownOption;
        });
        appStore.dispatch({ type: COLLEGES, payload: dropdownOptions })
      }
    }
  }
  catch {
    console.log("Something went wrong.");
  }
}

const clearDropdown = () => {
  appStore.dispatch({ type: CLEAR })
}

export const dropdown = {
  status: getStatuses,
  country: getCountries,
  zone: getZones,
  unit: getUnits,
  discipline: getDisciplines,
  level: getLevels,
  moduleType: getModuleTypes,
  programType: getProgramTypes,
  language: getLanguages,
  assetCategory: getAssetCategories,
  ageGroup: getAgeGroups,
  generalStatus: getGeneralStatuses,
  userStatus: getUserStatuses,
  collegeStatus: getCollegeStatuses,
  trainerStatus: getTrainerStatuses,
  programStatus: getProgramStatuses,
  clear: clearDropdown,
  roles: getUserRoles,
  trainer: getTrainers,
  collegePOC: getAvailableVolunteersForPOC,
  moduleList: getModuleDropdown,
  userRoleList: getUserRoleForRegister,
  sessionModule: getSessionModuleDropdown,
  programReportStatus: getProgramStatusDropDown,
  fontFamily: getFontFamilyList,
  faqCategoryList: getFaqCategoryDropdown,
  batch: getBatches,
  durationTiming:getDurationTimingsVal,
  certificateLevel: getCertLevelsList,
  trainerSearchOption: getTrainerSearchOption,
  participantConfigType: getParticipantConfigDropDown,
  artifactType: getArtifactTypeDropDown,
  colleges: getColleges,
}
