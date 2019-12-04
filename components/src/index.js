import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    commentText="Thank you guys!"
                    image={ faker.image.avatar() }
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 2:00AM"
                    commentText="Yeah, nice hair!"
                    image={ faker.image.avatar() }
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Yesterday at 5:00PM"
                    commentText="Did you get a haircut Sam?"
                    image={ faker.image.avatar() }
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));