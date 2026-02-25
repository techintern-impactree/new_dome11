import CameraView from "../../../components/CameraView/CameraView";

export default async function Page({ params }: { params: any }) {
  const { camId } = await params;
  console.log("slug", camId);
  const camItems = [
    {
      camId: "1",
      src: "/assets/current-missions/videos/drone_detector_normal.mp4",
      title: "Bulls Eye",
      tag: "Kamikaze",
      id: "KMZ-0220",
      latitude: "13.0126",
      longitude: "80.21817",
      mission: "Mission 1",
      thermalSrc: "/assets/current-missions/videos/drone_detector_thermal.mp4",
    },
    {
      camId: "2",
      src: "/assets/current-missions/videos/DFSF1.mp4",
      title: "Eagle Eye",
      tag: "Surveillance",
      id: "SRV-0018",
      latitude: "13.0150",
      longitude: "80.2200",
      mission: "Mission 2",
      thermalSrc: "/assets/current-missions/videos/DFSF1-thermal.mp4",
    },
    {
      camId: "3",
      src: "/assets/current-missions/videos/DFSF2.mp4",
      title: "Hawk Eye",
      tag: "Payload",
      id: "PAY-0729",
      latitude: "13.0175",
      longitude: "80.2225",
      mission: "Mission 1",
      thermalSrc: "/assets/current-missions/videos/DFSF2-thermal.mp4",
    },
    {
      camId: "4",
      src: "/assets/current-missions/videos/DFSF4.mp4",
      title: "Hammerhead",
      tag: "Logistics",
      id: "LOG-0154",
      latitude: "13.0200",
      longitude: "80.2250",
      mission: "Mission 2",
      thermalSrc: "/assets/current-missions/videos/DFSF4-thermal.mp4",
    },
    {
      camId: "5",
      src: "/assets/current-missions/videos/DFSF5.mp4",
      title: "MultiScan X",
      tag: "Surveillance",
      id: "HYB-0917",
      latitude: "13.0225",
      longitude: "80.2275",
      mission: "Mission 1",
      thermalSrc: "/assets/current-missions/videos/DFSF5-thermal.mp4",
    },
    {
      camId: "6",
      src: "/assets/current-missions/videos/DFSF2.mp4",
      title: "Scout Alpha",
      tag: "Surveillance",
      id: "ZO3-SRV-1201",
      latitude: "13.0250",
      longitude: "80.2300",
      mission: "Mission 1",
      thermalSrc: "/assets/current-missions/videos/DFSF2-thermal.mp4",
    },
  ];

  const selectedCam: any = camItems?.find((item: any) => item?.camId === camId);
  console.log("selectedCam", selectedCam);

  return <CameraView camData={selectedCam} />;
}
