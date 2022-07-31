# Simple IMERG Zarr Demo

Built from [https://github.com/carbonplan/simple-map-demo](https://github.com/carbonplan/simple-map-demo) demo of using the [`@carbonplan/maps`](https://github.com/carbonplan/maps) library. 

Prequisites: nvm, npm, pip

# Steps

1. Create the Zarr and ndpyramid using notebooks/create-zarr-with-pangeo-forge.ipynb
3. Run an http server for the Zarr (assuming local storage)
4. Run the next.js app to visualize the Zarr

![IMERG Zarr](imerg-zarr.png)

## Step 3: Run an http server for the Zarr (assuming local storage)

```bash
cd data
# if you haven't installed the server already
# $ npm install http-server -g
http-server -p 8000 --cors
```

## Step 4: Run the next.js app to visualize the Zarr

Open a new terminal.

```bash
nvm use 12
npm i
npm run dev
```

# Todos

* Create the Zarr from the original NetCDF? (but if we're doing this for comparison with COGs, maybe this step we _should_ go from COG to Zarr 🤔).
* Look into additional features (time series generation)


## Experimental: Visualizing COGs with @carbonplan/maps

It was of interest to visualize COGs using the same library as visualizing Zarr, to see datasets of both underlying format in one map viewer.

To do this, I generated a COG using [veda-data-pipelines: GPM IMERG example](https://github.com/NASA-IMPACT/veda-data-pipelines/tree/ab/updates-for-imerg/docker/hdf5-to-cog#gpm-imerg-example) and changes to @carbonplan/maps detailed here: https://github.com/carbonplan/maps/pull/41
