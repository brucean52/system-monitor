const { gql } = require('apollo-server-koa');

const typeDefs = gql`
  type Query {
    systemData: System
    biosData: Bios,
    baseboardData: Baseboard,
    chassisData: Chassis,
    currentLoadData: CurrentLoad,
    processesData: Processes,
    processLoadByName(name: String): ProcessLoad,
  }
  # System
  type System {
    manufacturer: String
    model: String
    version: String
    serial: String
    uuid: String
    sku: String
  }
  type Bios {
    vendor: String
    version: String
    releaseDate: String
    revision: String
  }
  type Baseboard {
    manufacturer: String
    model: String
    version: String
    serial: String
    assetTag: String
  }
  type Chassis {
    manufacturer: String
    model: String
    version: String
    serial: String
    assetTag: String
    sku: String
  }
  # Processes/ Services
  type CurrentLoad {
    avgLoad: String
    currentload: String
    currentload_user: String
    currentload_system: String
    currentload_nice: String
    currentload_idle: String
    currentload_irq: String
    raw_currentload: String
    cpus: [CpuLoad] 
  }
  type CpuLoad {
    load: String
    load_user: String
    load_system: String
    load_nice: String
    load_idle: String
    load_irq: String
    raw_load: String
    raw_load_user: String
    raw_load_system: String
    raw_load_nice: String
    raw_load_idle: String
    raw_load_irq: String
  }
  type Processes {
    all: String
    running: String
    blocked: String
    sleeping: String
    unknown: String 
    list: [ProcessList]
  }
  type ProcessList {
    pid: String
    parentPid: String
    name: String
    pcpu: String
    pcpuu: String 
    pcpus: String 
    pmem: String
    priority: String
    mem_vsz: String
    mem_rss: String
    nice: String 
    started: String 
    state: String
    tty: String
    user: String
    command: String 
    params: String 
    path: String 
  }

  type ProcessLoad {
    proc: String
    pid: String
    pids: String
    cpu: String
    mem: String
  }
`;

module.exports = typeDefs;