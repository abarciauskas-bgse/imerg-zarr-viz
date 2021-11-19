const fs = require('fs.promises')
const zarr = require('zarr-js')(fs.readFile)

zarr.openGroup('data/gpmimerg.zarr/', (err, data) => {
    console.log(err)
    console.log(data['0/precipitation']())
})