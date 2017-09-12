import serviceCaller from 'factories/serviceCaller';

const {commonPostMultiplePart, commonPutMultiplePart, commonGet, commonPut, commonDelete} = serviceCaller;

export default {
  addMod(formBody){
    const data = commonPostMultiplePart('yugioh_poc/add_mod', formBody);
    return data;
  },
  getModList(){
    const data = commonGet('yugioh_poc/mod_list');
    return data;
  }
  // getAll(){
  //   const data = commonGet('mangas_reading/get_all');
  //   return data;
  // },
  // quickUpdate(url){
  //   const data = commonPut('mangas_reading/quick_update', url);
  //   return data;
  // },
  // edit(formBody){
  //   const data = commonPutMultiplePart('mangas_reading/update', formBody);
  //   return data;
  // },
  // delete(id){
  //   const data = commonDelete('mangas_reading/remove/' + id);
  //   return data;
  // },
  // search(query){
  //   const data = commonGet('mangas_reading/search', null, query);
  //   return data;
  // },
  // sort(query){
  //   const data = commonGet('mangas_reading/sort', null, query);
  //   return data;
  // }
}