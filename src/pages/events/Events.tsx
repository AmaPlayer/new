import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { Calendar, Trophy, MapPin, Clock, Users, ExternalLink, Star, Medal, Target, Eye, Share2 } from 'lucide-react';
import NavigationBar from '../../components/layout/NavigationBar';
import FooterNav from '../../components/layout/FooterNav';
import eventsService from '../../services/api/eventsService';
import { Event } from '../../types/models/event';
import { LazyImage } from '../../components/events/LazyImage';
import { CountdownTimer } from '../../components/events/CountdownTimer';
import { StatusBadge } from '../../components/events/StatusBadge';
import { ParticipationButton } from '../../components/events/ParticipationButton';
import './Events.css';

type TabType = 'upcoming' | 'live' | 'past';
type NewsPriority = 'breaking' | 'high' | 'medium' | 'low';

interface NewsItem {
  id: number;
  title: string;
  category: string;
  summary: string;
  time: string;
  source: string;
  priority: NewsPriority;
}

export default function Events() {
  const { currentUser, isGuest } = useAuth();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabType>('upcoming');
  const [loading, setLoading] = useState<boolean>(true);
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [liveEvents, setLiveEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);
  const [hasFirebaseEvents, setHasFirebaseEvents] = useState<boolean>(false);

  const sportsNews: NewsItem[] = [
    {
      id: 1,
      title: "Olympic Records Expected to Fall at Paris 2024",
      category: "Olympics",
      summary: "Athletes are in unprecedented form as Paris 2024 approaches, with multiple world records already broken this season.",
      time: "2 hours ago",
      source: "Olympic Channel",
      priority: "breaking"
    },
    {
      id: 2,
      title: "New Training Technologies Revolutionizing Athletic Performance",
      category: "Sports Science",
      summary: "AI-powered training analysis and virtual reality coaching are helping athletes achieve peak performance levels.",
      time: "5 hours ago",
      source: "Sports Tech Today",
      priority: "high"
    },
    {
      id: 3,
      title: "Youth Sports Participation Reaches All-Time High",
      category: "Community Sports",
      summary: "Local sports programs report a 40% increase in youth participation following successful community initiatives.",
      time: "1 day ago",
      source: "Community Sports Network",
      priority: "medium"
    },
    {
      id: 4,
      title: "Sustainability in Sports: Green Stadiums Lead the Way",
      category: "Environment",
      summary: "Major sporting venues are implementing eco-friendly technologies, reducing carbon footprint by 60%.",
      time: "2 days ago",
      source: "Green Sports Alliance",
      priority: "medium"
    }
  ];

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async (): Promise<void> => {
    try {
      setLoading(true);
      console.log('Loading events from Firebase...');
      
      // Load events from Firebase
      const [upcoming, live, completed] = await Promise.all([
        eventsService.getUpcomingEvents(),
        eventsService.getLiveEvents(),
        eventsService.getCompletedEvents()
      ]);

      console.log('Firebase events loaded:', { upcoming: upcoming.length, live: live.length, completed: completed.length });

      // Check if we have any Firebase events
      const totalFirebaseEvents = upcoming.length + live.length + completed.length;
      
      if (totalFirebaseEvents > 0) {
        // Use Firebase events
        setHasFirebaseEvents(true);
        setUpcomingEvents(upcoming);
        setLiveEvents(live);
        setPastEvents(completed);
        console.log('Using Firebase events');
      } else {
        // No events - show empty state
        setHasFirebaseEvents(false);
        setUpcomingEvents([]);
        setLiveEvents([]);
        setPastEvents([]);
        console.log('No Firebase events found, showing empty state');
      }
    } catch (error) {
      console.error('Error loading events:', error);
      // Show empty state on error
      setHasFirebaseEvents(false);
      setUpcomingEvents([]);
      setLiveEvents([]);
      setPastEvents([]);
    } finally {
      setLoading(false);
    }
  };

  const handleTitleClick = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    loadEvents();
  };

  const getEventsByTab = (): Event[] => {
    switch (activeTab) {
      case 'live':
        return liveEvents;
      case 'past':
        return pastEvents;
      default:
        return upcomingEvents;
    }
  };

  const getPriorityIcon = (priority: string): React.JSX.Element => {
    switch (priority) {
      case 'high':
        return <Star size={16} className="priority-high" />;
      case 'medium':
        return <Medal size={16} className="priority-medium" />;
      default:
        return <Target size={16} className="priority-low" />;
    }
  };

  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      'Multi-Sport': '#ff6b6b',
      'Cricket': '#4ecdc4',
      'Athletics': '#45b7d1',
      'Football': '#96ceb4',
      'Tennis': '#feca57',
      'Cycling': '#ff9ff3',
      'Olympics': '#ffd93d',
      'Sports Science': '#6c5ce7',
      'Community Sports': '#a29bfe',
      'Environment': '#00b894'
    };

    return (
      <div className="events">
        <NavigationBar
          currentUser={currentUser}
          isGuest={isGuest()}
          onTitleClick={handleTitleClick}
          title="Events"
        />
        <div className="main-content">
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <span>Loading events...</span>
          </div>
        </div>
        <FooterNav />
      </div>
    );
  }

  return (
    <div className="events">
      <NavigationBar
        currentUser={currentUser}
        isGuest={isGuest()}
        onTitleClick={handleTitleClick}
        title="Events"
      />

                </div>

                <img className="rectangle-3" alt="Rectangle" src={rectangle88} />

                <div className="text-wrapper-4">Upcoming Events</div>

                <p className="choose-your-sport">
                    Choose your sport and participate to win prize, popularity &amp; to
                    catch the eye of selecting scout.
                </p>

                <div className="frame-2">
                    <div className={`div-wrapper filter-btn ${activeFilter === 'ALL' ? 'active' : ''}`} onClick={() => handleFilterClick('ALL')}>
                        <div className="text-wrapper-5">ALL</div>
                    </div>

                    <div className={`frame-3 filter-btn ${activeFilter === 'Cricket' ? 'active' : ''}`} onClick={() => handleFilterClick('Cricket')}>
                        <div className="text-wrapper-6">Cricket</div>
                    </div>

                    <div className={`frame-3 filter-btn ${activeFilter === 'Athlete' ? 'active' : ''}`} onClick={() => handleFilterClick('Athlete')}>
                        <div className="text-wrapper-7">Athlete</div>
                    </div>

                    <div className={`frame-4 filter-btn ${activeFilter === 'Badminton' ? 'active' : ''}`} onClick={() => handleFilterClick('Badminton')}>
                        <div className="text-wrapper-8">Badminton</div>
                    </div>

                    <div className={`frame-5 filter-btn ${activeFilter === 'More' ? 'active' : ''}`} onClick={() => handleFilterClick('More')}>
                        <div className="text-wrapper-9">More</div>
                    </div>
                </div>

                <div className="overlap-2">
                    <div className="overlap-3">
                        <div className="text-wrapper-10">PUMA</div>

                        <div className="simple-icons-puma">
                            <img className="vector-9" alt="Puma Logo" src={pumaLogo} />
                        </div>
                    </div>

                    <p className="september-sunday">
                        September 9, Sunday
                        <br />
                        Morning 10:00 AM
                    </p>

                    <p className="MPL-cricket-ground">
                        MPL Cricket ground
                        <br />
                        Nangla Tashi, Kankerkheda
                        <br />
                        Meerut, Uttar Pradesh
                    </p>

                    <img className="rectangle-4" alt="Cricket Event" src={rectangle95} />

                    <div className="frame-6">
                        <div className="text-wrapper-11">Weekend Cricket Championship</div>
                    </div>

                    <img
                        className="clarity-date-line"
                        alt="Calendar Icon"
                        src={calendarIcon}
                    />

                    <div className="mdi-location">
                        <img className="vector-10" alt="Location Icon" src={locationIcon} />
                    </div>

                    <div className="overlap-4">
                        <div className="text-wrapper-12">Sponsored by</div>
                    </div>

                    <div className="frame-7">
                        <div className="frame-8">
                            <div className="game-icons-target">
                                <img className="vector-11" alt="Target Icon" src={targetIcon} />
                            </div>

                            <div className="text-wrapper-13">1st Prize</div>
                        </div>

                        <div className="frame-8">
                            <div className="game-icons-target">
                                <img className="vector-11" alt="Target Icon" src={targetIcon} />
                            </div>

                            <div className="text-wrapper-13">2nd Prize</div>
                        </div>

                        <div className="frame-8">
                            <div className="game-icons-target">
                                <img className="vector-11" alt="Target Icon" src={targetIcon} />
                            </div>

                            <div className="text-wrapper-13">3rd Prize</div>
                        </div>
                    </div>

                    <img className="rectangle-5" alt="1st Prize" src={rectangle101} />

                    <img className="rectangle-6" alt="2nd Prize" src={rectangle102} />

                    <img className="rectangle-7" alt="3rd Prize" src={rectangle103} />

                    <div className="frame-9 clickable" onClick={() => handleRegisterClick('Weekend Cricket Championship')}>
                        <div className="text-wrapper-14">Register Now</div>
                    </div>
                </div>

                <div className="overlap-5">
                    <div className="rectangle-8" />

                    <div className="text-wrapper-15">NIKE</div>

                    <p className="p">
                        September 15, Sunday
                        <br />
                        Morning 10:00 AM
                    </p>

                    <div className="bhagat-singh-ground">
                        Bhagat Singh Ground
                        <br />
                        Modipuram,Meerut
                        <br />
                        Uttar Pradesh
                    </div>

                    <img className="rectangle-9" alt="Running Event" src={rectangle96} />

                    <div className="frame-10">
                        <div className="text-wrapper-11">100 Meter Running Challenge</div>
                    </div>

                    <img
                        className="clarity-date-line-2"
                        alt="Calendar Icon"
                        src={calendarIcon}
                    />

                    <div className="vector-wrapper">
                        <img className="vector-10" alt="Location Icon" src={locationIcon} />
                    </div>

                    <div className="rectangle-10" />

                    <div className="text-wrapper-16">Sponsored by</div>

                    <div className="frame-11">
                        <div className="frame-8">
                            <div className="game-icons-target">
                                <img className="vector-11" alt="Target Icon" src={targetIcon} />
                            </div>

                            <div className="text-wrapper-13">1st Prize</div>
                        </div>

                        <div className="frame-8">
                            <div className="game-icons-target">
                                <img className="vector-11" alt="Target Icon" src={targetIcon} />
                            </div>

                            <div className="text-wrapper-13">2nd Prize</div>
                        </div>

                        <div className="frame-8">
                            <div className="game-icons-target">
                                <img className="vector-11" alt="Target Icon" src={targetIcon} />
                            </div>

                            <div className="text-wrapper-13">3rd Prize</div>
                        </div>
                    </div>

                    <img className="rectangle-11" alt="1st Prize" src={rectangle101} />

                    <img className="rectangle-12" alt="2nd Prize" src={rectangle102} />

                    <img className="rectangle-13" alt="3rd Prize" src={rectangle103} />

                    <div className="frame-12 clickable" onClick={() => handleRegisterClick('100 Meter Running Challenge')}>
                        <div className="text-wrapper-14">Register Now</div>
                    </div>

                    <div className="hugeicons-nike">
                        <img className="vector-12" alt="Nike Logo" src={nikeLogo} />
                    </div>
                </div>

                <div className="overlap-6">
                    <div className="rectangle-14-container">
                        <img className="rectangle-14-flag" alt="Background" src={rectangle104} />
                        <img className="rectangle-14" alt="Join AmaPlayer" src={rectangle105} />
                    </div>

                    <div className="text-wrapper-17">Participate</div>

                    <div className="text-wrapper-18">with AmaPlayer</div>

                    <div className="text-wrapper-19">&amp;</div>

                    <div className="text-wrapper-20">Win</div>
                </div>
            </div>
            
            <FooterNav />
        </div>

        {/* Sports News Section */}
        <div className="news-section">
          <h2 className="section-title">
            <Trophy size={24} />
            Latest Sports News
          </h2>
          <div className="news-grid">
            {sportsNews.map((news) => (
              <div key={news.id} className={`news-card ${news.priority}`}>
                <div className="news-header">
                  <div className="news-category" style={{ backgroundColor: getCategoryColor(news.category) }}>
                    {news.category}
                  </div>
                  <div className="news-time">{news.time}</div>
                </div>
                <h3 className="news-title">{news.title}</h3>
                <p className="news-summary">{news.summary}</p>
                <div className="news-footer">
                  <span className="news-source">{news.source}</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Events Section */}
        <div className="events-section">
          <h2 className="section-title">
            <Medal size={24} />
            Sports Events & Championships
          </h2>
          
          {/* Event Tabs */}
          <div className="events-tabs">
            <button 
              className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
              onClick={() => setActiveTab('upcoming')}
            >
              <Calendar size={20} />
              Upcoming ({upcomingEvents.length})
            </button>
            <button 
              className={`tab-btn ${activeTab === 'live' ? 'active' : ''}`}
              onClick={() => setActiveTab('live')}
            >
              <div className="live-indicator">
                <div className="live-dot"></div>
                Live ({liveEvents.length})
              </div>
            </button>
            <button 
              className={`tab-btn ${activeTab === 'past' ? 'active' : ''}`}
              onClick={() => setActiveTab('past')}
            >
              <Trophy size={20} />
              Past Events ({pastEvents.length})
            </button>
          </div>

          {/* Events Grid */}
          <div className="events-grid">
            {getEventsByTab().length === 0 ? (
              <div className="empty-events-state">
                <div className="empty-state-icon">
                  <Calendar size={48} />
                </div>
                <h3>No Events Available</h3>
                <p>There are currently no {activeTab} events to display. Check back later for updates!</p>
              </div>
            ) : (
              getEventsByTab().map((event) => (
              <div key={event.id} className={`event-card ${event.status} enhanced`}>
                <div className="event-image">
                  <LazyImage
                    src={event.thumbnailUrl || event.image || event.imageUrl || ''}
                    alt={event.title}
                  />
                  <div className="event-card-badges">
                    {event.isTrending && (
                      <StatusBadge type="trending" size="small" />
                    )}
                    {event.isOfficial && (
                      <StatusBadge type="official" size="small" showIcon />
                    )}
                    <StatusBadge type={event.status} size="small" />
                  </div>
                  <div className="event-priority">
                    {getPriorityIcon(event.priority)}
                  </div>
                </div>

                <div className="event-content">
                  <div className="event-header">
                    <h3 className="event-title">{event.title}</h3>
                    <div className="event-category" style={{ backgroundColor: getCategoryColor(event.category) }}>
                      {event.category}
                    </div>
                  </div>

                  {/* Sport tag if available */}
                  {event.sport && (
                    <div className="event-sport-tag">
                      <Trophy size={12} />
                      {event.sport}
                    </div>
                  )}

                  {/* Countdown Timer for Upcoming Events */}
                  {event.status === 'upcoming' && (
                    <CountdownTimer targetDate={event.date} compact />
                  )}

                  {/* Competition Status */}
                  <div className={`competition-status ${eventsService.getCompetitionStatus(event).statusClass}`}>
                    {eventsService.getCompetitionStatus(event).displayText}
                  </div>

                  <div className="event-details">
                    <div className="event-detail">
                      <Clock size={16} />
                      <span>{new Date(event.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                    <div className="event-detail">
                      <MapPin size={16} />
                      <span>{event.location}</span>
                    </div>
                    <div className="event-detail">
                      <Users size={16} />
                      <span>{event.participants || `${event.participantCount || 0} participants`}</span>
                    </div>
                  </div>

                  <p className="event-description">{event.description}</p>

                  {/* Engagement Metrics */}
                  {(event.viewCount || event.shareCount || (event.participantIds && event.participantIds.length > 0)) && (
                    <div className="event-card-metrics">
                      {event.viewCount && event.viewCount > 0 && (
                        <div className="metric-item">
                          <Eye size={14} className="metric-icon" />
                          <span className="metric-value">{event.viewCount}</span>
                        </div>
                      )}
                      {event.shareCount && event.shareCount > 0 && (
                        <div className="metric-item">
                          <Share2 size={14} className="metric-icon" />
                          <span className="metric-value">{event.shareCount}</span>
                        </div>
                      )}
                      {event.participantIds && event.participantIds.length > 0 && (
                        <div className="metric-item">
                          <Users size={14} className="metric-icon" />
                          <span className="metric-value">{event.participantIds.length} going</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Participation Button for logged-in users, regular button for guests */}
                  {currentUser && !isGuest() ? (
                    <ParticipationButton
                      eventId={event.id}
                      userId={currentUser.uid}
                      userName={currentUser.displayName || currentUser.email || 'User'}
                      userAvatar={currentUser.photoURL || undefined}
                    />
                  ) : (
                    <button className="event-btn">
                      {event.status === 'live' ? 'Watch Live' : event.status === 'upcoming' ? 'Set Reminder' : 'View Results'}
                    </button>
                  )}
                </div>
              </div>
              ))
            )}
          </div>
        </div>
      </div>
      
      <FooterNav />
    </div>
  );
}
