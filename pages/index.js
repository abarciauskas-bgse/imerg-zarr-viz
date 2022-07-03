import { useState } from 'react'
import { Map, Raster, Line } from '@carbonplan/maps'
import ParameterControls from './components/parameter-controls'
import RegionControls from './components/region-controls'
import { useColormap } from '@carbonplan/colormaps'

const Index = () => {
  const colormap = useColormap('warm')
  const [day, setDay] = useState(1)
  const [displayCog, setCogDisplay] = useState(false)
  const getters = { displayCog, day }
  const setters = {
    setCogDisplay,
    setDay
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
          clim={[1, 0]}
          display={true}
          opacity={1}
          mode={'texture'}
          selector={{ day }}
          source={'https://ndpyramid-zarrs.s3.us-west-2.amazonaws.com/smap-soil-moisture-daily.zarr'}
          variable={'soil_moisture'}
        />
        <RegionControls
          day={day}
        />        
        <ParameterControls getters={getters} setters={setters} />       
      </Map>
    </div>
  )
}

export default Index
