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
  const {day} = getters;
  const {setDay} = setters
  const months = ['2018-01-01', '2018-01-02', '2018-01-03', '2018-01-04', '2018-01-05', '2018-01-06', '2018-01-07',
    '2018-01-08', '2018-01-09', '2018-01-10', '2018-01-11', '2018-01-12', '2019-01-01', '2019-01-02',
    '2019-01-03', '2019-01-04', '2019-01-05', '2019-01-06', '2019-01-07', '2019-01-08', '2019-01-09',
    '2019-01-10', '2019-01-11', '2019-01-12', '2020-01-01', '2020-01-02', '2020-01-03', '2020-01-04',
    '2020-01-05', '2020-01-06', '2020-01-07', '2020-01-08', '2020-01-09', '2020-01-10', '2020-01-11',
    '2020-01-12', '2021-01-01', '2021-01-02', '2021-01-03', '2021-01-04', '2021-01-05', '2021-01-06',
    '2021-01-07', '2021-01-08', '2021-01-09', '2021-01-10', '2021-01-11', '2021-01-12', '2022-01-01',
    '2022-01-02', '2022-01-03', '2022-01-04', '2022-01-05'];

  return (
    <>
      <Box sx={{ position: 'absolute', top: 20, left: 20 }}>
        <Box sx={sx.label}>Time</Box>
        <Slider
          min={0}
          max={52}
          step={1}
          sx={{ width: '175px', display: 'inline-block' }}
          value={day}
          onChange={(e) => setDay(parseFloat(e.target.value))}
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
          {months[day]}
        </Badge>
        <Box sx={{ ...sx.label, mt: [4] }}>
          <Link href='https://github.com/carbonplan/maps'>CODE ON Github</Link>
        </Box>
      </Box>
    </>
  )
}

export default ParameterControls
