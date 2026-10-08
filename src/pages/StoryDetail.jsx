import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Info, Heart } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import StoryCard from '../components/StoryCard';
import Button from '../components/Button';
import NotFound from './NotFound';
import stories from '../data/stories';

export default function StoryDetail() {
  const { slug } = useParams();
  const story = stories.find((s) => s.slug === slug);
  if (!story) return <NotFound />;

  const related = stories.filter((s) => s.slug !== slug).slice(0, 2);

  return (
    <>
      <PageHeader title={story.title} text={story.category} image={story.image} crumb="Story" />

      <article className="section">
        <div className="container article">
          <Link to="/stories" className="text-link back-link"><ArrowLeft size={16} aria-hidden="true" /> All Stories</Link>
          {story.isSample && (
            <p className="notice" role="note">
              <Info size={18} aria-hidden="true" />
              This is an illustrative story describing the type of work we undertake. It does not describe specific individuals.
            </p>
          )}
          <img className="article__image" src={story.image} alt="" />
          <span className="story-card__category">{story.category}</span>
          {story.body.map((para) => <p key={para}>{para}</p>)}
          <div className="article__cta">
            <p><strong>Want to help create stories like this?</strong></p>
            <Button to="/donate" variant="primary" icon={Heart}>Support Our Work</Button>
          </div>
        </div>
      </article>

      <section className="section section--tint" aria-labelledby="more-title">
        <div className="container">
          <h2 id="more-title" className="section-title__heading">More Stories</h2>
          <div className="card-grid card-grid--2">
            {related.map((s) => <StoryCard key={s.slug} story={s} />)}
          </div>
        </div>
      </section>
    </>
  );
}
