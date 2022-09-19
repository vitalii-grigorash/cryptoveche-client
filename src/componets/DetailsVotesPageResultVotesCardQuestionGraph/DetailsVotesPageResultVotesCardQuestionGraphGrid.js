import React, {useEffect, useState} from "react";
import './DetailsVotesPageResultVotesCardQuestionGraphRow.css';
import CardQuestionVerticalGraphGrid from "./CardQuestionVerticalGraph/CardQuestionVerticalGraphGrid";
import CardQuestionGraphNameColumnGrid from "./CardQuestionGraphNameColumn/CardQuestionGraphNameColumnGrid";
import CardQuestionHorizontalGraphGrid from "./CardQuestionHorizontalGraph/CardQuestionHorizontalGraphGrid";

const DetailsVotesPageResultVotesCardQuestionGraphGrid = (props) => {

    const {
        answersTemplateGrid
    } = props;

    const [showGraphTypeVertical, setShowGraphTypeVertical] = useState(true);
    const [showGraphTypeHorizontal, setShowGraphTypeHorizontal] = useState(false);
    const [hideChangePlaceColumns, setHideChangePlaceColumns] = useState(true);
    const getAllColumn = answersTemplateGrid.map(el => el.columns);

    function getRandom(min, max){
        return Math.floor(Math.random() * (max - min) + min)
    }

    useEffect(() => {
        if (answersTemplateGrid.length > 3 || getAllColumn > 3) {
            setShowGraphTypeHorizontal(true);
            setShowGraphTypeVertical(false)
        } else {
            setShowGraphTypeHorizontal(false)
            setShowGraphTypeVertical(true)
        }
    }, [answersTemplateGrid.length])

 console.log(getAllColumn)

    return (
        <div className={'details-votes-page-result-card-graph__wrapper'}>
            {showGraphTypeHorizontal && (
                <CardQuestionHorizontalGraphGrid/>
            )
            }
            {showGraphTypeVertical && (
                <CardQuestionVerticalGraphGrid
                    resultVote={answersTemplateGrid}
                    />
            )
            }
            <div className={'details-votes-page-result-card-graph__column-list'}>
                {
                    getAllColumn[0].map((item) => {
                        return (
                            <CardQuestionGraphNameColumnGrid
                                key={item.id}
                                nameColumn={item.value}
                                colorSquare={`rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)}`}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default DetailsVotesPageResultVotesCardQuestionGraphGrid;