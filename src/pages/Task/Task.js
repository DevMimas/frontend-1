import React, { Component } from 'react';
import './Task.scss';
import colorData from '../../lib/Colors';
import Award from '../../components/icons/award.icon';
import { Translation } from '../../i18n/i18n';
import AwardIcon from '../../components/icons/award.icon';
import IconText from '../../components/IconText/IconText';
import DifficultyLabel from '../../components/DifficultyLabel/DifficultyLabel';

class Task extends React.Component {
    render() {
        const name = this.props.name;
        const difficulty = this.props.difficulty;
        const description = this.props.description;
        const questions = this.props.questions;
        const rightQuestions = this.props.rightQuestions;
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
                            <Award stroke="#3A506B" />
                        </IconText>
                        <DifficultyLabel level={difficulty}></DifficultyLabel>
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
