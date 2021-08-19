// import React, { useEffect, useState } from 'react'
// import './ShapesWidget.scss'
// import { useRecoilValue } from 'recoil'
// import { Grid } from '@material-ui/core'
// import { getPreviousClienteeListData } from '../../recoil/selectors/shapesSelectors'
// import { shapesObject, mapObject } from '../../model'
// import { getMapData } from '../../recoil/selectors/mapSelectors'
// import WorldMap from '../../components/WorldMap/WorldMap'
// import ClientListDetail from '../../components/ClientListDetail/ClientListDetail'
// import ClientList from '../../components/ClientList/ClientList'

// const ShapesWidget = () => {
//   const shapesData: shapesObject[] = useRecoilValue(getPreviousClientListData) as shapesObject[]
//   const mapData: mapObject = useRecoilValue(getMapData) as mapObject

//   const [selectedItem, setSelectedItem] = useState<shapesObject>(shapesData[0])

//   useEffect(() => {
//     // results
//     // console.log(`Result: ${JSON.stringify(shapesResults[0])}`)
//     // console.log(`Result: ${JSON.stringify(mapResults.mapFeatures[0])}`)
//   })
//   return (
//     <>
//       {shapesData?.length > 0 && mapData.mapFeatures.length > 0 ? (
//         <>
//           <Grid container>
//             <Grid item xs={3}>
//               <ClientList data={shapesData} setSelectedItem={setSelectedItem} />
//             </Grid>
//             <Grid item xs={8}>
//               <WorldMap mapData={mapData} shapesData={shapesData} selectedItem={selectedItem} setSelectedItem={setSelectedItem} scale={200} cx={0} cy={100} initRotation={100} rotationSpeed={0.3} />
//             </Grid>
//           </Grid>
//           <ClientListDetail selectedItem={selectedItem} data={shapesData} setSelectedItem={setSelectedItem} paddingTop={400} />
//         </>
//       ) : (
//         <>Loading!</>
//       )}
//     </>
//   )
}