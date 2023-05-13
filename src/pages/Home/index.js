import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Nav from '../../nav/index';
import Row from '../../Row/index';
import Banner from '../../banner/index';
import requests from '../../requests/requests';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('home')}>
            <Nav />
            <Banner />
            <div>
                <Row key={1} title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
                <Row key={2} title="Trending Now" fetchUrl={requests.fetchTrending} />
                <Row key={3} title="Top Rated" fetchUrl={requests.fetchTopRated} />
                <Row key={4} title="Action Movies" fetchUrl={requests.fetchActionMovies} />
                <Row key={5} title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
                <Row key={6} title="Documents Movies" fetchUrl={requests.fetchDocumentaries} />
                <Row key={7} title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
                <Row key={8} title="Top Rated" fetchUrl={requests.fetchTopRated} />
            </div>
        </div>
    );
}

export default Home;
