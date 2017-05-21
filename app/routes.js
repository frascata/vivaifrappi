// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/chi-siamo',
      name: 'about',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/About/reducer'),
          import('containers/About/sagas'),
          import('containers/About'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('about', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/vivaio',
      name: 'nurseryPlant',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/NurseryPlant/reducer'),
          import('containers/NurseryPlant/sagas'),
          import('containers/NurseryPlant'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('nurseryPlant', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/contatti',
      name: 'contacts',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Contacts/reducer'),
          import('containers/Contacts/sagas'),
          import('containers/Contacts'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('contacts', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/servizi/produzione',
      name: 'production',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Production/reducer'),
          import('containers/Production/sagas'),
          import('containers/Production'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('production', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/servizi/manutenzione',
      name: 'mainteinance',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Mainteinance/reducer'),
          import('containers/Mainteinance/sagas'),
          import('containers/Mainteinance'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('mainteinance', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/servizi/progettazione',
      name: 'planning',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Planning/reducer'),
          import('containers/Planning/sagas'),
          import('containers/Planning'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('planning', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/servizi/realizzazione',
      name: 'realization',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Realization/reducer'),
          import('containers/Realization/sagas'),
          import('containers/Realization'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('realization', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
