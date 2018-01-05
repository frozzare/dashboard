import Dashboard from '../components/dashboard';
import Widgets from '../widgets';
import config from '../config/dashboard.json';

export default () => (
  <Dashboard>
    {
      config.widgets.map(w => {
        const Widget = Widgets[w.widget.toLowerCase()];
        return Widget ? <Widget {...w.props} /> : null;
      })
    }
  </Dashboard>
);
