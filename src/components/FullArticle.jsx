const FullArticle = ({ key, articleThumbnail, articleHeadline, articleBodyText, articleUrl }) => {


    return (
        <div className="article" id={key} >
            <img className="article-image" src={articleThumbnail} />
            <br></br>
            <a href={articleUrl} className="external-link">{articleUrl}</a>
            <h1 className="full-article-headline">{articleHeadline}</h1>
            <p className="article-body">{articleBodyText}</p>
        </div>
    );
};

export default FullArticle
