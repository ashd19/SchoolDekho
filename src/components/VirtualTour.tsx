// "use client";
// import { GoogleMap, LoadScript, StreetViewPanorama } from "@react-google-maps/api";

// const containerStyle = {
//   width: "100%",
//   height: "600px",
// };

// const center = {
//   lat: 40.748817, // Example: Empire State Building
//   lng: -73.985428,
// };

// export default function VirtualTour() {
//   return (
//     <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
//       <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
//         <StreetViewPanorama
//           position={center}
//           visible={true}
//           options={{
//             pov: { heading: 100, pitch: 0 },
//             zoom: 1,
//           }}
//         />
//       </GoogleMap>
//     </LoadScript>
//   );
// }
