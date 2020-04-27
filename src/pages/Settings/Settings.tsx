import React, { Component } from 'react';
import '../../css/main.scss';
import './Settings.scss';
import { observer } from 'mobx-react';
import { t } from '../../i18n/i18n';
import TextInput from '../../components/Input/TextBox/TextInput';
import Button from '../../components/ui/button/Button';
import ComboBox from '../../components/ui/ComboBox/ComboBox';
import SettingsStore from '../../store/settings.store';

const settingsStore = new SettingsStore();

@observer
class Settings extends Component {
    render() {
        return (
            <div className="settings">
                <div className="header">
                    <span>{t.t('page.settings.title', 'Settings')}</span>
                </div>
                {/* TODO: Translate all strings */}
                <div className="content flex-row-box">
                    <div className="left flex-column-box">
                        <div className="flex-row-box">
                            <div className="labels flex-column-box">
                                <div className="text-label flex-row-box">
                                    <span>Email</span>
                                </div>
                                <div className="text-label flex-row-box">
                                    <span>Sprache</span>
                                </div>
                                <div className="text-label flex-row-box">
                                    <span>Altes Passwort</span>
                                </div>
                                <div className="text-label flex-row-box">
                                    <span>Neues Passwort</span>
                                </div>
                            </div>
                            <div className="inputs flex-column-box">
                                <div className="input flex-row-box">
                                    <TextInput
                                        placeholder="test@test.de"
                                        style={{ height: '1.69rem', width: '20rem' }}
                                        onChange={(value) => settingsStore.setEmail(value)}
                                        className="text-input"
                                    />
                                </div>
                                <div className="input flex-row-box">
                                    <ComboBox
                                        value={settingsStore.selectedLanguage}
                                        placeholder="Sprache"
                                        data={['Deutsch', 'Englisch']}
                                        callbackValue={(value) => settingsStore.setSelectedLanguage(value)}
                                        width="20rem"
                                        height="1.69rem"
                                        className="multi-input"
                                        typingEnabled
                                    />
                                </div>
                                <div className="input flex-row-box">
                                    <TextInput
                                        placeholder="**********"
                                        style={{ height: '1.69rem', width: '20rem' }}
                                        onChange={(value) => settingsStore.setOldPassword(value)}
                                        className="text-input"
                                        type="password"
                                    />
                                </div>
                                <div className="input flex-row-box">
                                    <TextInput
                                        placeholder="**********"
                                        style={{ height: '1.69rem', width: '20rem' }}
                                        onChange={(value) => settingsStore.setNewPassword(value)}
                                        className="text-input"
                                        type="password"
                                    />
                                </div>
                            </div>
                        </div>
                        <Button
                            name="Account Daten Anfordern"
                            type="button"
                            styleType="secondary"
                            width="33rem"
                            height="2.69rem"
                            fontSize="23px"
                            className="get-account-data"
                        />
                        <Button
                            name="Account löschen"
                            type="button"
                            styleType="secondary"
                            width="33rem"
                            height="2.69rem"
                            fontSize="23px"
                            className="delete-data"
                        />
                    </div>
                </div>
                <div className="actions flex-row-box">
                    <Button
                        name="Speichern"
                        type="button"
                        styleType="primary"
                        width="15rem"
                        height="2.69rem"
                        fontSize="23px"
                        className="save"
                    />
                </div>
            </div>
        );
    }
}

export default Settings;
