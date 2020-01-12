const si = require('systeminformation');

const resolvers = {
  Query: {
    systemData: async () => {
      try {
        return await si.system();
      } catch (e) {
          console.log(e)
      }
    },
    biosData: async () => {
      try {
        let test = await si.bios();
        console.log('bios', test);
        return await si.bios();
      } catch (e) {
          console.log(e)
      }
    },
    baseboardData: async () => {
      try {
        return await si.baseboard();
      } catch (e) {
          console.log(e)
      }
    },
    chassisData: async () => {
      try {
        return await si.chassis();
      } catch (e) {
          console.log(e)
      }
    },
    currentLoadData: async () => {
      try {
        return await si.currentLoad();
      } catch (e) {
          console.log(e)
      }

    },
    processesData: async () => {
      try {
        return await si.processes();
      } catch (e) {
          console.log(e)
      }
    },
    processLoadByName: async ( _, { name }) => {
      try {
        return await si.processLoad(name);
      } catch (e) {
          console.log(e)
      }
    },
  },
};

module.exports = resolvers;