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
  const { time } = getters
  const {
    setTime,
  } = setters


  return (
    <>
      <Box sx={{ position: 'absolute', top: 20, left: 20 }}>
        <Box sx={sx.label}>Time</Box>
        <Slider
          min={1}
          max={12}
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
          <Link href='https://github.com/carbonplan/maps'>CODE ON Github</Link>
        </Box>
      </Box>
    </>
  )
}

export default ParameterControls
