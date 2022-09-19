import React, {useEffect, useState} from "react";
import './DetailsVotesPageResultVotesCardQuestionGraphRow.css';
import CardQuestionVerticalGraphGrid from "./CardQuestionVerticalGraph/CardQuestionVerticalGraphGrid";
import CardQuestionGraphNameColumnGrid from "./CardQuestionGraphNameColumn/CardQuestionGraphNameColumnGrid";
import CardQuestionHorizontalGraphGrid from "./CardQuestionHorizontalGraph/CardQuestionHorizontalGraphGrid";
import CardQuestionHorizontalGraphColumnGrid
    from "./CardQuestionHorizontalGraphColumn/CardQuestionHorizontalGraphColumnGrid";

const DetailsVotesPageResultVotesCardQuestionGraphGrid = (props) => {

    const {
        answersTemplateGrid
    } = props;

    const [showGraphTypeVertical, setShowGraphTypeVertical] = useState(true);
    const [showGraphTypeHorizontal, setShowGraphTypeHorizontal] = useState(false);
    const [hideChangePlaceColumns, setHideChangePlaceColumns] = useState(true);
    const [showChangePlaceColumns, setShowChangePlaceColumns] = useState(false)
    const getAllColumn = answersTemplateGrid.map(el => el.columns);
    const resultWithColor = answersTemplateGrid.map(function (item) {
        return {...item, color: `rgb(${getRandomColor(0, 255)}, ${getRandomColor(0, 255)}, ${getRandomColor(0, 255)})`}
    })

    function getRandomColor(min, max){
        return Math.floor(Math.random() * (max - min) + min)
    }

    useEffect(() => {
        if (answersTemplateGrid.length > 3 || getAllColumn > 3) {
            setShowGraphTypeHorizontal(true);
            setShowGraphTypeVertical(false)
            setShowChangePlaceColumns(true)
            setHideChangePlaceColumns(false)
        } else {
            setShowGraphTypeHorizontal(false)
            setShowGraphTypeVertical(true)
            setShowChangePlaceColumns(false)
            setHideChangePlaceColumns(true)
        }
    }, [answersTemplateGrid.length])

    return (
        <div className={'details-votes-page-result-card-graph__wrapper'}>
            {showGraphTypeHorizontal && (
                <CardQuestionHorizontalGraphGrid
                    resultVote={resultWithColor}/>
            )
            }
            {showGraphTypeVertical && (
                <CardQuestionVerticalGraphGrid
                    resultVote={answersTemplateGrid}
                    />
            )
            }
            <div className={'details-votes-page-result-card-graph__column-list'}>
                {hideChangePlaceColumns && (
                    getAllColumn[0].map((item) => {
                        return (
                            <CardQuestionGraphNameColumnGrid
                                key={item.id}
                                nameColumn={item.value}
                                colorSquare={`rgb(${getRandomColor(0, 255)}, ${getRandomColor(0, 255)}, ${getRandomColor(0, 255)}`}/>
                        )
                    })
                )}
                {
                    showChangePlaceColumns && (
                        resultWithColor.map((el => {
                            return (
                                <CardQuestionGraphNameColumnGrid
                                    key={el.id}
                                    nameColumn={el.title}
                                    colorSquare={el.color}
                                />
                            )
                        }))

                    )}
            </div>
        </div>
    )
}
export default DetailsVotesPageResultVotesCardQuestionGraphGrid;