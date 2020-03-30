import React, { Component } from 'react';
import './LandingPage.scss';
import { Redirect, Route } from 'react-router-dom';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import Landing_Image from '../../assets/Picture/landingpage-teaching.svg';
import Modal from 'react-animated-modal';
import Query from '../../lib/api/Query';
import { gql } from 'apollo-boost';
import { Translation } from '../../i18n/i18n';

class LandingPage extends Component {
    state = { showModal: false, redirect: false };

    login() {
        Query.mutationGQL(
            gql`
                mutation {
                    authenticate(userAuth: { passwordHash: "Test", key: "Max" }) {
                        result
                    }
                    jwt {
                        token
                        status
                    }
                }
            `
        ).then((response) => {
            console.log(response.data);
        });
    }

    render() {
        return (
            <div className="landing">
                <div className="main">
                    {(() => {
                        if (this.state.redirect) {
                            this.setState({ redirect: false });

                            return <Redirect exact to={this.state.redirect} />;
                        }
                    })()}

                    {/*TODO Route zurück auf /login /register*/}
                    <Route
                        exact
                        path={['/dashboard', '/dashboard']}
                        render={() => {
                            if (!this.state.showModal && !this.state.redirect) {
                                this.setState({ showModal: true });
                            }
                        }}
                    />

                    <Modal
                        visible={this.state.showModal}
                        closemodal={() => {
                            console.log('close modal');
                            this.setState({ showModal: false, redirect: '/' });
                        }}
                        type="fadeIn">
                        {/*TODO Route zurück auf /login /register*/}
                        <Route exact path="/dashboard" component={Login} />
                        <Route exact path="/dashboard" component={Register} />
                    </Modal>

                    <div className="content">
                        <div className="image-landigpage">
                            <img className="landigpage-img" src={Landing_Image} alt="landigpage-teaching image" />
                        </div>
                        <div className="text-content">
                            <h2
                                dangerouslySetInnerHTML={{
                                    __html: Translation.t('landingPage.title'),
                                }}
                            />
                            <h4
                                dangerouslySetInnerHTML={{
                                    __html: Translation.t('landingPage.description'),
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;