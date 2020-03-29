import React, {Component} from "react";
import './PageHeader.scss';

class PageHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { mainTitle } = this.props;
        const { secondaryTitle } = this.props;

        console.log(mainTitle)
        console.log(secondaryTitle)
        return (
            <div className="page-header">
                <div className="page-titles">
                     <span className="page-main-title">
                        {mainTitle}
                     </span>
                    {secondaryTitle &&
                        <span className="page-secondary-title">
                             {secondaryTitle}
                        </span>
                    }
                </div>
            </div>
        );
    }

}

export default PageHeader;