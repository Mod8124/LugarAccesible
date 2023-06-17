import { MapView } from '../components/map/MapView';
import { ErrorAccessLocation } from '../ui/ErrorAccessLocation';
import { usePlacesStore } from '../hooks/usePlacesStore';
import { useActionsPlaces } from '../hooks/useActionsPlaces';
import { useSelector } from 'react-redux';
import Feedback from '../components/Feedback';
import { Header } from '../components/Header';
import { Filter } from '../components/Filter';
import { Edit } from '../components/Edit';
import { ModalIntroduction } from '../components/ModalIntroduction';
import DetailPlace from '../components/DetailPlace/DetailPlace';
import { Helmet } from 'react-helmet';

const Homepage = () => {
  const { deniedLocation } = usePlacesStore();
  const { isIntroductionActive } = useSelector((state) => state.guide);
  useActionsPlaces();

  return (
    <>
      <Header />
      <Helmet title='LugarAccesible' />
      <Filter />
      <MapView />
      {deniedLocation && <ErrorAccessLocation />}
      <Edit />
      <DetailPlace />
      {isIntroductionActive && <ModalIntroduction />}
      <Feedback />
    </>
  );
};

export default Homepage;
