# use the following to make your markers: 
## https://stackoverflow.com/questions/21397608/put-markers-to-a-map-generated-with-topojson-and-d3-js


## Displaying Places

## As with the country polygons, the populated places are a feature collection, so we can again convert from TopoJSON to GeoJSON and use d3.geo.path to render:

## svg.append("path")
     .datum(topojson.feature(uk, uk.objects.places))
    .attr("d", path)
    .attr("class", "place");
## This will draw a small circle for each city. We can adjust the radius by setting path.pointRadius, and assign styles via CSS. But we also want labels, so we need a data join to create text elements. By computing the transform property by projecting the place’s coordinates, we translate the labels into the desired position:

## svg.selectAll(".place-label")
    .data(topojson.feature(uk, uk.objects.places).features)
  .enter().append("text")
    .attr("class", "place-label")
    .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
    .attr("dy", ".35em")
    .text(function(d) { return d.properties.name; });
## Labeling a map well can be challenging, especially if you want to position labels automatically. We’ve mostly ignored the problem for our simple map, though it helps that we earlier filtered labels by SCALERANK. A convenient trick is to use right-aligned labels on the left side of the map, and left-aligned labels on the right side of the map, here using 1°W as the threshold:

## svg.selectAll(".place-label")
    .attr("x", function(d) { return d.geometry.coordinates[0] > -1 ? 6 : -6; })
    .style("text-anchor", function(d) { return d.geometry.coordinates[0] > -1 ? "start" : "end"; });
## As you can see below, this works reasonably well, though there remain a few overlapping labels (e.g., Nottingham, Coventry). If you’re so inclined, you can fix these by special-casing alternate alignment, or you could simply remove the offending labels. You could even try simulated annealing or force-directed layout, but I’ll leave automatic label placement for another day!#3



In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Sightings
