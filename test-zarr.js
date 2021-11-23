const fs = require('fs.promises')
const regl = require('regl')
const zarr = require('zarr-js')(fs.readFile)
const carbonplanMaps = require('@carbonplan/maps/dst/index')
console.log(carbonplanMaps.Tile)
const source = 'data/gpmimerg-monthly.zarr/';

const getPyramidMetadata = (metadata) => {
    const kwargs = metadata.metadata['.zattrs'].multiscales[0].metadata.kwargs
    const maxZoom = kwargs.levels - 1
    const levels = Array(maxZoom + 1)
    .fill()
    .map((_, i) => i)
    const tileSize = kwargs.pixels_per_tile
    return { levels, maxZoom, tileSize }
}  

const loader = async (src, type, cb) => {
  let response
  try {
    response = await request(src)
  } catch (err) {
    return cb(new Error('error evaluating fetching function'))
  }
  if (response && Buffer.isBuffer(response)) {
    return cb(null, response)
  } else {
    if (response && response.status && response.status === 200) {
      let body
      if (type === 'text') {
        body = await response.text()
      } else if (type === 'arraybuffer') {
        body = await response.arrayBuffer()
      } else {
        return cb(new Error('unsupported file format'))
      }
      if (!body) {
        return cb(new Error('failed to parse data'))
      } else {
        return cb(null, body)
      }
    } else {
      return cb(new Error('resource not found'))
    }
  }
}

const getChunk = function (k, cb) {
  const key = k.join('.')
  if (!keys.includes(key))
    return cb(new Error('chunk ' + key + ' not found', null))
  loader(path + '/' + key, 'arraybuffer', (err, res) => {
    if (err) return cb(err)
    const chunk = parseChunk(res, metadata)
    cb(null, chunk)
  })
}

// createTiles https://github.com/carbonplan/maps/blob/2ea2142a555c4d4d24a76970a231e33351fb0076/src/tiles.js#L99
zarr.openGroup(source, (err, loaders, metadata) => {
    initialize = () => regl.texture(emptyTexture)
    const { levels, maxZoom, tileSize } = getPyramidMetadata(metadata);
    this.loaders = {};
    //console.log( { levels, maxZoom, tileSize } );
    variable = 'precipitation'
    selector = { time: 1 }
    // loaders = {0: ƒ getChunk() {}, 1: ƒ getChunk() {}, 2: ƒ getCh…}
    this.coordinates = {}
    
    this.dimensions = metadata.metadata[`${levels[0]}/${variable}/.zattrs`][
        '_ARRAY_DIMENSIONS'
    ]
    //console.log(this.dimensions)
    this.shape = metadata.metadata[`${levels[0]}/${variable}/.zarray`]['shape']
    //console.log(this.shape)
    this.chunks = metadata.metadata[`${levels[0]}/${variable}/.zarray`]['chunks']
    //console.log(this.chunks)
    this.coordinates = {
      time: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    };

    // Promise.all(
    //     // Object.keys(selector).map(
    //     //   // key will be 'time'
    //     //   (key) =>
    //     //     new Promise((innerResolve) => {
    //     //       loaders[`${levels[0]}/${key}`]([0], (err, chunk) => {
    //     //         const coordinates = Array.from(chunk.data)
    //     //         this.coordinates[key] = coordinates
    //     //         innerResolve()
    //     //       })
    //     //     })
    //     // )
    //   ).then(() => {
        const stuff = levels.forEach((z) => {
          // const loader = loaders[z + '/' + variable]
          const loader = getChunk
          this.loaders[z] = loader;
          Array(Math.pow(2, z))
            .fill(0)
            .map((_, x) => {
              Array(Math.pow(2, z))
                .fill(0)
                .map((_, y) => {
                  const key = [x, y, z].join(',')
                  this.tiles[key] = new Tile({
                    key,
                    loader,
                    shape: this.shape,
                    chunks: this.chunks,
                    dimensions: this.dimensions,
                    coordinates: this.coordinates,
                    bands: this.bands,
                    initializeBuffer: initialize,
                  })
                })
            })
        })
        console.log(stuff)
    // })    
})