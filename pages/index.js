import { useState } from 'react'
import { Map, Raster, Line } from '@carbonplan/maps'
import RegionControls from './components/region-controls'
import ParameterControls from './components/parameter-controls'
import { useColormap } from '@carbonplan/colormaps'

const Index = () => {
  const colormap = useColormap('warm')
  const [time, setTime] = useState(1)
  const [displayCog, setCogDisplay] = useState(false)
  const getters = { displayCog, time }
  const setters = {
    setCogDisplay,
    setTime
  }
  
  return (
    <div style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }}>
      <Map zoom={2} center={[0, 0]} debug={false}>
        <Line
          color={'white'}
          source={'https://storage.googleapis.com/carbonplan-share/maps-demo/land'}
          variable={'land'}
        />
        <Raster
          colormap={colormap}
          clim={[0, 1]}
          display={true}
          opacity={1}
          mode={'texture'}
          selector={{ time }}
          source={'http://localhost:8000/gpmimerg-monthly.zarr'}
          variable={'precipitation'}
        />
        <RegionControls
          time={time}
        /> 
        <ParameterControls getters={getters} setters={setters} />       
      </Map>
    </div>
  )
}

export default Index
