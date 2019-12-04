import React from 'react';

const CommentDetail = props => {
    return(
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={ props.image } />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        { props.author }
                    </a>
                    <div className="metadata">
                        <span className="data">{ props.timeAgo }</span>
                    </div>
                    <div className="text">
                        { props.commentText }
                    </div>
                </div>
            </div>
    );
}

//makes this component available to other files in the project
export default CommentDetail;