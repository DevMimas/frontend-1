import React, { Component } from 'react';
import './Task.scss';
import { Award } from 'react-feather';
import colorData from '../../lib/Colors';
import { Translation } from '../../i18n/i18n';
import IconText from '../../components/IconText/IconText';
import DifficultyLabel from '../../components/Task/Difficulty/DifficultyLabel/DifficultyLabel';

class Task extends Component {
    render() {
        const { name } = this.props;
        const { difficulty } = this.props;
        const { description } = this.props;
        const { questions } = this.props;
        const { rightQuestions } = this.props;
        const color = colorData.difficultyColor[difficulty];
        const backgroundColor = color !== undefined ? color.backgroundColor : '#ffffff';
        const borderColor = color !== undefined ? color.borderColor : '#000000';

        return (
            <div className="task">
                <div className="task-head">
                    <span>{name}</span>
                    <div className="task-head-elements">
                        <div className="task-element">
                            <span>{questions}</span>
                            <span>{Translation.t('taskList.questions')}</span>
                        </div>
                        <IconText text={rightQuestions} fontColor="#3A506B" class="task-element">
                            <Award color="#3A506B" />
                        </IconText>
                        <DifficultyLabel level={difficulty} />
                    </div>
                </div>
                <div className="task-bottom">
                    <span>{description}</span>
                </div>
            </div>
        );
    }
}

export default Task;
