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
  const {day} = getters || {day: 0};
  const {setDay} = setters || { setDay: null }
  const months = ['2018-01-01', '2018-02-01', '2018-03-01', '2018-04-01', '2018-05-01', '2018-06-01', '2018-07-01',
  '2018-08-01', '2018-09-01', '2018-10-01', '2018-11-01', '2018-12-01', '2019-01-01', '2019-02-01',
  '2019-03-01', '2019-04-01', '2019-05-01', '2019-06-01', '2019-07-01', '2019-08-01', '2019-09-01',
  '2019-10-01', '2019-11-01', '2019-12-01', '2020-01-01', '2020-02-01', '2020-03-01', '2020-04-01',
  '2020-05-01', '2020-06-01', '2020-07-01', '2020-08-01', '2020-09-01', '2020-10-01', '2020-11-01',
  '2020-12-01', '2021-01-01', '2021-02-01', '2021-03-01', '2021-04-01', '2021-05-01', '2021-06-01',
  '2021-07-01', '2021-08-01', '2021-09-01', '2021-10-01', '2021-11-01', '2021-12-01', '2022-01-01',
  '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'];

  return (
    <>
      <Box sx={{ position: 'absolute', top: 70, left: 20 }}>
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
          <Link href='https://github.com/abarciauskas-bgse/simple-zarr-demos'>CODE ON Github</Link>
          <br />
          <Link href='https://github.com/carbonplan/maps'>Based on @carbonplan/maps</Link>
        </Box>
      </Box>
    </>
  )
}

export default ParameterControls
