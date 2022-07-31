import { Box } from 'theme-ui'
import { useCallback } from 'react'
import { Slider, Badge, Toggle, Select, Link } from '@carbonplan/components'
import { colormaps } from '@carbonplan/colormaps'

const sx = {
  label: {
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    fontSize: [1, 1, 1, 2],
    mt: [3],
  },
}

const CLIM_RANGES = {
  tavg: { max: 30, min: -20 },
  prec: { max: 300, min: 0 },
}

const DEFAULT_COLORMAPS = {
  tavg: 'warm',
  prec: 'cool',
}

const ParameterControls = ({ getters, setters }) => {
  const {time} = getters || {time: 0};
  const {setTime} = setters || { setTime: null }


  return (
    <>
      <Box sx={{ position: 'absolute', top: 70, left: 20 }}>
        <Box sx={sx.label}>Month</Box>
        <Slider
          min={0}
          max={11}
          step={1}
          sx={{ width: '175px', display: 'inline-block' }}
          value={time}
          onChange={(e) => setTime(parseFloat(e.target.value))}
        />
        <Badge
          sx={{
            bg: 'primary',
            color: 'background',
            display: 'inline-block',
            position: 'relative',
            left: [3],
            top: [1],
          }}
        >
          {time.toFixed(0)}
        </Badge>
        <Box sx={{ ...sx.label, mt: [4] }}>
          <Link href='https://github.com/abarciauskas-bgse/simple-zarr-demos'>CODE ON Github</Link>
          <br />
          <Link href='https://github.com/carbonplan/maps'>Based on @carbonplan/maps</Link>
        </Box>
      </Box>
    </>
  )
}

export default ParameterControls
