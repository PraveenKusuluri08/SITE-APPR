// import store from "../store/index/store";

// export default class MetaInfo {
//   constructor() {
//     this.names = store.getState().firestore.ordered.names[0];
//     this.clients = store.getState().firestore.ordered.clients_meta_info[0];
//   }

//   clientIdToProperty = (id, property) => {
//     try {
//       return this.clients[id][property];
//     } catch (error) {
//       return id;
//     }
//   };

//   clientIdToName = (id) => {
//     try {
//       return this.clients[id].businessDisplayName;
//     } catch (error) {
//       console.error(error);
//       return id;
//     }
//   };

//   emailToName = (id) => {
//     const names = this.names;
//     try {
//       if (names[id]) return names[id].name;
//       throw new Error("ID Not Found");
//     } catch (error) {
//       console.error(error);
//       return id;
//     }
//   };

//   getEmployeeKey(id, key) {
//     const names = this.names;
//     try {
//       return names[id][key];
//     } catch (error) {
//       return id;
//     }
//   }

//   getCategory = (id) => {
//     const names = this.names;
//     try {
//       return names[id].category;
//     } catch (error) {
//       console.error(error);
//       return id;
//     }
//   };

//   checkSupervisor = (id) => {
//     const names = this.names;
//     try {
//       return names[id].isSupervisor ? true : false;
//     } catch (error) {
//       return false;
//     }
//   };
//   checkDesignation = (id) => {
//     const names = this.names;
//     try {
//       if (names[id].designation === "User") return "Employee";
//       return names[id].designation;
//     } catch (error) {
//       return "";
//     }
//   };

//   getGender = (id) => {
//     const names = this.names;
//     try {
//       return names[id].gender;
//     } catch (error) {
//       return "";
//     }
//   };

//   getImage = (id) => {
//     const names = this.names;
//     let url = "";
//     try {
//       url = names[id].photoURL;
//     } catch (error) {
//       url = "";
//     }

//     return url;
//   };
// }
