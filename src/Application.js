import { Routes, Route } from 'react-router-dom';

import { Navigation, NavigationLink } from './Navigation';
import { Page } from './Page';

function Application() {
  return (
    <main className="h-screen">
      <h1 className="text-3xl font-bold bg-indigo-300 p-4 border-b-2 border-indigo-400">
        Hello world!
      </h1>
      <div className="grid grid-cols-12 grid-rows-1 gap-4 h-full">
        <Navigation>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/one">IAM</NavigationLink>
          <NavigationLink to="/two">Routing</NavigationLink>
        </Navigation>
        <section className="col-span-9 p-4">
          <Routes>
            <Route path="/:id" element={<Page />} />
          </Routes>
        </section>
      </div>
    </main>
  );
}

export default Application;
