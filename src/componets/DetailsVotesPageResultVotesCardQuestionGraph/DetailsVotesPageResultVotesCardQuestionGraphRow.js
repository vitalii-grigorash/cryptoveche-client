import React, {useEffect, useState} from "react";
import './DetailsVotesPageResultVotesCardQuestionGraphRow.css';
import CardQuestionGraphNameColumnRow from "./CardQuestionGraphNameColumn/CardQuestionGraphNameColumnRow";
import CardQuestionHorizontalGraphRow from "./CardQuestionHorizontalGraph/CardQuestionHorizontalGraphRow";
import CardQuestionVerticalGraphRow from "./CardQuestionVerticalGraph/CardQuestionVerticalGraphRow";

const DetailsVotesPageResultVotesCardQuestionGraphRow = (props) => {

    const {
        answersTemplateRow,
        numInvalid
    } = props;

    const [showGraphTypeVertical, setShowGraphTypeVertical] = useState(true)
    const [showGraphTypeHorizontal, setShowGraphTypeHorizontal] = useState(false)
    const resultWithColor = answersTemplateRow.map(function (item) {
        return {...item, color: `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`}
    })

    function getRandom(min, max){
        return Math.floor(Math.random() * (max - min) + min)
    }

    useEffect(() => {
        if (answersTemplateRow.length > 3) {
            setShowGraphTypeHorizontal(true);
            setShowGraphTypeVertical(false)
        } else {
            setShowGraphTypeHorizontal(false)
            setShowGraphTypeVertical(true)
        }
    }, [answersTemplateRow.length])

    return (
            <div className={'details-votes-page-result-card-graph__wrapper'}>
                {showGraphTypeHorizontal && (
                    <CardQuestionHorizontalGraphRow
                        resultVote={resultWithColor}
                        numInvalid = {numInvalid}
                    />
                )
                }
                {showGraphTypeVertical && (
                    <CardQuestionVerticalGraphRow
                        resultVote={resultWithColor}
                        numInvalid = {numInvalid}
                    />
                    )
                }
                <div className={'details-votes-page-result-card-graph__column-list'}>
                    {
                        resultWithColor.map((item, i) => {
                            return (
                                <CardQuestionGraphNameColumnRow
                                    key={i}
                                    nameColumn={item.title}
                                    colorSquare={item.color}/>
                            )
                        })
                    }
                    <CardQuestionGraphNameColumnRow nameColumn={'Недействительные бюллетени'} colorSquare={'#9FA1A8'}/>
                </div>
            </div>
    )
}
export default DetailsVotesPageResultVotesCardQuestionGraphRow;