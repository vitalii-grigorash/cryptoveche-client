import React, {useEffect, useState} from "react";
import './DetailsVotesPageResultVotesCardQuestionGraphRow.css';
import CardQuestionVerticalGraphGrid from "./CardQuestionVerticalGraph/CardQuestionVerticalGraphGrid";
import CardQuestionGraphNameColumnGrid from "./CardQuestionGraphNameColumn/CardQuestionGraphNameColumnGrid";
import CardQuestionHorizontalGraphGrid from "./CardQuestionHorizontalGraph/CardQuestionHorizontalGraphGrid";

const DetailsVotesPageResultVotesCardQuestionGraphGrid = (props) => {

    const {
        answersTemplateGrid
    } = props;

    const [showGraphTypeVertical, setShowGraphTypeVertical] = useState(true)
    const [showGraphTypeHorizontal, setShowGraphTypeHorizontal] = useState(false)
    const [hideChangePlaceColumns, setHideChangePlaceColumns] = useState(true)
    const getAllColumn = answersTemplateGrid.map(el => el.columns)


    useEffect(() => {
        if (answersTemplateGrid.length > 3 || getAllColumn > 3) {
            setShowGraphTypeHorizontal(true);
            setShowGraphTypeVertical(false)
        } else {
            setShowGraphTypeHorizontal(false)
            setShowGraphTypeVertical(true)
        }
    }, [answersTemplateGrid.length])

    return (
        <div className={'details-votes-page-result-card-graph__wrapper'}>
            {showGraphTypeHorizontal && (
                <CardQuestionHorizontalGraphGrid/>
            )
            }
            {showGraphTypeVertical && (
                <CardQuestionVerticalGraphGrid
                    />
            )
            }
            <div className={'details-votes-page-result-card-graph__column-list'}>
                {
                    answersTemplateGrid.map((item, i) => {
                        return (
                            <CardQuestionGraphNameColumnGrid
                                key={i}
                                nameColumn={item.title}
                                colorSquare={'blue'}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default DetailsVotesPageResultVotesCardQuestionGraphGrid;