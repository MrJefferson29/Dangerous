import React from 'react';
import { Link } from 'react-router-dom';

const Story = ({ story }) => {
    const editDate = (createdAt) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        const d = new Date(createdAt);
        var datestring = d.getDate() + " " + monthNames[d.getMonth()] + " ," + d.getFullYear();
        return datestring;
    };

    const truncateContent = (content) => {
        if (content) {
            const trimmedString = content.substr(0, 73);
            return trimmedString;
        }
        return ''; // Return an empty string if content is undefined
    };

    const truncateTitle = (title) => {
        if (title) {
            const trimmedString = title.substr(0, 69);
            return trimmedString;
        }
        return ''; // Return an empty string if title is undefined
    };
    
    return (
        <div className="story-card">
            <Link to={`/story/${story.slug}`} className="story-link">
                <img className="story-image" src={`/storyImages/${story.image}`} alt={story.content} />
                <div className="story-content-wrapper">
                    <h5 className="story-title">
                        {story.content}
                    </h5>
                    <p className="story-text">{story.status}</p>
                    <p className="story-createdAt" style={{fontFamily: 'Gaqire', fontWeight: '600'}}>#{story.title}</p>
                </div>
            </Link>
        </div>
    );
};

export default Story;
