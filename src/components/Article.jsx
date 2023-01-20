import FullArticle from "./FullArticle";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Article = ({ news }) => {
    const { id } = useParams();
    return (
        <>
            <div >
                {news.map(article => article.id.replaceAll('/', '-') === id ?
                    <FullArticle
                        key={article.id}
                        articleThumbnail={article.fields.thumbnail}
                        articleHeadline={article.fields.headline}
                        articleBodyText={(article.fields.bodyText)}
                        articleUrl={article.webUrl}
                    />
                    :
                    <Link to={'/'} />
                )}
            </div>
        </>

    );
};

export default Article
