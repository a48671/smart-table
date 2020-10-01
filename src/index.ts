import { RootComponent } from './components/root-component';
import { Table } from './components/table';
import { Formula } from './components/formula';
import { Header } from './components/header';
import { Toolbar } from './components/toolbar';
import './scss/index.scss';

const rootComponent = new RootComponent('#root', {
  components: [Header, Toolbar, Formula, Table]
});

rootComponent.render();
