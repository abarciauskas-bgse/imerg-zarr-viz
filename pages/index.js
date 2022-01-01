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
          source={'http://localhost:8000/gpmimerg.zarr'}
          variable={'precipitation'}
        />
        <Raster
          colormap={colormap}
          clim={[0, 1]}
          display={displayCog}
          opacity={1}
          mode={'texture'}
          type={'cog'}
          source={ 'https://ds-data-projects.s3.amazonaws.com/smce-eis/3B-MO.MS.MRG.3IMERG.20200501-S000000-E235959.05.V06B.HDF5.tif' }
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
