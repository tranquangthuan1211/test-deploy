import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './route';
import styles from './App.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function App() {
    return (
        <Router>
            <div className={cx('app')}>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return <Route path={route.path} element={<Page />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
