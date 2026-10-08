import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function StoryCard({ story }) {
  return (
    <article className="story-card">
      <Link to={`/stories/${story.slug}`} className="story-card__media" tabIndex={-1} aria-hidden="true">
        <img src={story.image} alt="" loading="lazy" />
        {story.isSample && <span className="sample-tag">Illustrative</span>}
      </Link>
      <div className="story-card__body">
        <span className="story-card__category">{story.category}</span>
        <h3><Link to={`/stories/${story.slug}`}>{story.title}</Link></h3>
        <p>{story.excerpt}</p>
        <Link to={`/stories/${story.slug}`} className="text-link" aria-label={`Read more: ${story.title}`}>
          Read More <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
