import {observable} from "mobx";

class SubjectTaskStore {
    @observable currentQuestion = 4;
    @observable maxQuestion = 10;
}

export default SubjectTaskStore;