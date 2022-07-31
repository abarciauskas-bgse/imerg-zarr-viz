import { useState } from 'react'
import { Map, Raster, Line } from '@carbonplan/maps'
import RegionControls from './components/region-controls'
import ParameterControls from './components/parameter-controls'
import { useColormap } from '@carbonplan/colormaps'

const Index = () => {
  const colormap = useColormap('warm')
  const [time, setTime] = useState(0)
  const getters = { time }
  const setters = {
    setTime
  }
  
  return (
    <div style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }}>
      <h1 style={{position: 'absolute', top: 0, left: 20}}>GPM IMERG Preceiptation</h1>
      <br />
      <h2 style={{position: 'absolute', top: 40, left: 20}}>1st day of each month from June 1, 2000 to June 1, 2001</h2>
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
          source={'https://ndpyramid-zarrs.s3.us-west-2.amazonaws.com/gpmimerg-monthly.zarr'}
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
