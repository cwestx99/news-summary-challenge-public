import Headlines from "./Headlines";

const HomePage = ({ news }) => {
    return (
        <>
            <div className="homepage">
                {news.map(article => (
                    <Headlines
                        key={article.id}
                        route={article.id.replaceAll('/', '-')}
                        articleThumbnail={article.fields.thumbnail}
                        articleHeadline={article.fields.headline}
                    />
                ))}
                <a href='#' className="return-to-top">Return to the top</a>
            </div>
        </>
    );
};

export default HomePage