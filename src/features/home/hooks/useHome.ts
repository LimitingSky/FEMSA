import { useNavigation } from '@react-navigation/native';
import { ROUTES } from 'core/navigation/routes';
import { useFetchList } from '../api/hooks/useFetchList';
import { MovementItem } from '../models/components';

export const useHome = () => {
  const navigation = useNavigation();
  const {isLoading, data, total} = useFetchList();

  const goToDetail = (product: MovementItem) =>
    navigation.navigate(ROUTES.DETAIL, {product});

  return {isLoading, data, total, goToDetail};
};
