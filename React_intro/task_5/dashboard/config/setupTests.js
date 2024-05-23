import { configure } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-18';

configure({ adapter: new EnzymeAdapter() });
