import { combineProviders } from 'react-combine-provider';
import HeaderIndexer from './headerIndex';
import AccountState from './accountinfo';

const StateProviders = combineProviders([
    HeaderIndexer.Provider,
    AccountState.Provider
]);
export default StateProviders;
