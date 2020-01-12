import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import BarChart from './bar-chart';
import CpuLoadCard from './cpu-load-card';

const CURRENT_LOAD_INFORMATION = gql`
  {
    currentLoadData {
      avgLoad
      currentload
      currentload_user
      currentload_system
      currentload_nice
      currentload_idle
      currentload_irq
      raw_currentload
      cpus {
        load
        load_user
        load_system
        load_nice
        load_idle
        load_irq
        raw_load
        raw_load_user
        raw_load_system
        raw_load_nice
        raw_load_idle
        raw_load_irq
      }
    }
  }
`;

const ProcessesDashboard = () => {
  const { loading, error, data } = useQuery(CURRENT_LOAD_INFORMATION, {
    pollInterval: 2000
  });
  let [cpuLoadData, setCpuLoadData] = useState([]); 
  let [cpuThreadFull, setCpuThreadFull] = useState([]); 
  let [cpuThreadUser, setCpuThreadUser] = useState([]); 
  let [cpuThreadSystem, setCpuThreadSystem] = useState([]); 

  useEffect(() => {
    if (data) {
      let newCpuThreadFull = [];
      let newCpuThreadUser = [];
      let newCpuThreadSystem = [];
      let newLoadData = [
        { name: "Total Load", value: parseFloat(data.currentLoadData.currentload) },
        { name: "User Load", value: parseFloat(data.currentLoadData.currentload_user) },
        { name: "System Load", value: parseFloat(data.currentLoadData.currentload_system) },
      ]

      for (let i=0; i<  data.currentLoadData.cpus.length; i++) {
        let label = 'Thread ' + (i+1)
        newCpuThreadFull.push({ 
          y: parseInt(data.currentLoadData.cpus[i].load),
          x: label 
        });
        newCpuThreadUser.push({ 
          y: parseInt(data.currentLoadData.cpus[i].load_user),
          x: label 
        });
        newCpuThreadSystem.push({ 
          y: parseInt(data.currentLoadData.cpus[i].load_system),
          x: label  
        });
      }
      
      setCpuLoadData(newLoadData);
      setCpuThreadFull(newCpuThreadFull);
      setCpuThreadUser(newCpuThreadUser);
      setCpuThreadSystem(newCpuThreadSystem);
    }
  },[data]);

  if (loading) return <>Loading...</>;
  if (error) return <>`Error! ${error.message}`</>;


  return (
    <div>
      <CpuLoadCard data={cpuLoadData}/>
      <div>
        <h4>CPU Thread Utillization</h4>
      </div>
      <BarChart
        data1={cpuThreadUser}
        data2={cpuThreadSystem}
        data3={cpuThreadFull}
       />
    </div>
  );
}

export default ProcessesDashboard;
