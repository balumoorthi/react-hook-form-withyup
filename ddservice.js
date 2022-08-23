
import { ax, axSRCMGatsby, axCityAutoComplete } from 'services/base';

export default class DropdownService {

  getStatusesByCategory(params) {
    return ax.get('dropdown/statuses/getstatusandcategory', { params: params })
  }

  getStatuses(params) {
    return ax.get('dropdown/statuses', { params: params })
  }

  getCountries(params) {
    return ax.get('dropdown/countries', { params: params })
  }

  getZones() {
    return axSRCMGatsby.get('groups/zone/all.json')
  }

  getUnits(params) {
    return ax.get('dropdown/units', { params: params })
  }

  getDisciplines(params) {
    return ax.get('dropdown/disciplines', { params: params })
  }

  getLevels(params) {
    return ax.get('dropdown/levels', { params: params })
  }

  getModuleTypes(params) {
    return ax.get('dropdown/moduletypes', { params: params })
  }

  getProgramTypes(params) {
    return ax.get('dropdown/programtypes', { params: params })
  }

  getLanguages(params) {
    return ax.get('dropdown/languages', { params: params })
  }

  getAssetCategories(params) {
    return ax.get('dropdown/assetcategories', { params: params })
  }

  getAgeGroups(params) {
    return ax.get('dropdown/agegroups', { params: params })
  }
  getUserRoles(params) {
    return ax.get('listrole', { params: params })
  }

  getTrainers(payload) {
    return ax.post('trainerSearchList', payload)
  }

  getVolunteersForPOC(payload) {
    return ax.post('user/volunteers', payload);
  }

  getModuleList(params) {
    return ax.get('dropdown/modules', { params: params })
  }

  getCityDetails(params) {
    return axCityAutoComplete.get('gplaces', { params: params })
  }

  getUserRoleList(params) {
    return ax.get(`listrole?priority=${params.priority}`)
  }

  getAvailableModulesForProgram(payload) {
    return ax.post(`listskippedmodules`, payload)
  }
  getFontFamily(params) {
    return ax.get('dropdown/getFontFamily', { params: params })
  }

  getFaqCategoryList(params) {
    if (params.user_type === "CS")
      return ax.get(`listactivefaqcategory`, { params: params })
    else
      return ax.get(`listactivefaqcategory`)
  }

  getBatches() {
    return ax.get(`dropdown/batches`);
  }

  getCachedCitySuggestions(payload) {
    return axSRCMGatsby.get(`cities/${payload}.json`)
  }

  getColleges() {
    return ax.get(`dropdown/collegeslist`);
  }
}
