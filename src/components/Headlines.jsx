
import { Link } from 'react-router-dom';

const Headlines = ({ key, route, articleThumbnail, articleHeadline }) => {

    return (
        <div className="article-summary" id={key} data-testid="headlines">
            <Link to={`/article/${route}`}>
                <img className='article-thumbnail' src={articleThumbnail} />
                <h1 className='article-headline'>{articleHeadline}</h1>
            </Link>
        </div>
    );
};

export default Headlines