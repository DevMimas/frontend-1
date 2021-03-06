import React from 'react';
import './Dashboard.scss';
import { Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import Query from '../../lib/api/Query';
import { Subject as SubjectModel } from '../../lib/api/model/Model';
import Subject from '../../components/Subject/Subject';

interface DashboardState {
    subjects?: SubjectModel[];
}

class dashboard extends React.Component<DashboardState> {
    constructor(props) {
        super(props);
        this.state = { subjects: [] };
        this.loadSubjects();
        this.loadFakeData();
    }

    state: DashboardState;

    /* componentDidMount() {
        this.loadSubjects();
        this.loadFakeData();
    } */

    loadFakeData() {
        this.state.subjects.push(
            { displayName: 'GERMAN' },
            { displayName: 'COMPUTERSCIENCE' },
            { displayName: 'HISTORY' },
            { displayName: 'POLITICS' },
            { displayName: 'PHYSICS' },
            { displayName: 'BIOLOGY' },
            { displayName: 'CHEMISTRY' }
        );
    }

    async loadSubjects() {
        const subjects = [];

        const result = await Query.queryGQL(gql`
            query {
                subjectById(subjectId: 0) {
                    displayName
                }
            }
        `);

        // TODO: Check graphql to fix
        // eslint-disable-next-line
        subjects.push({ displayName: result.data.subjectById.displayName });

        // refresh the state
        subjects.forEach((value) => {
            this.state.subjects.push(value);
        });
    }

    renderSubjects() {
        return this.state.subjects.map((subject, index) => {
            return (
                <Link key={index} to="/task/lecture" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Subject
                        subject={subject.displayName}
                        desciption={subject.displayName}
                        color={subject.displayName}
                        weekendtask="4/5"
                        points="213"
                        communityPoints="21.323"
                    />
                </Link>
            );
        });
    }

    render() {
        return (
            <div className="dashboard">
                <div className="subjects-content">{this.renderSubjects()}</div>
            </div>
        );
    }
}

export default dashboard;
