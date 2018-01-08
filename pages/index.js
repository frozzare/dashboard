import Dashboard from '../components/dashboard';
import config from '../config/dashboard.json';

export default () => (
  <Dashboard>
    {
      config.widgets.map(w => {
        const Widget = require('../widgets/' + w.widget.toLowerCase()).default;
        return Widget ? <Widget {...w.props} /> : null;
      })
    }
  </Dashboard>
);
