import React, {useEffect, useState} from "react";
import './DetailsVotesPageResultVotesCardQuestionGraphRow.css';
import CardQuestionGraphNameColumn from "./CardQuestionGraphNameColumn/CardQuestionGraphNameColumn";
import CardQuestionHorizontalGraph from "./CardQuestionHorizontalGraph/CardQuestionHorizontalGraph";
import CardQuestionVerticalGraphRow from "./CardQuestionVerticalGraph/CardQuestionVerticalGraphRow";

const DetailsVotesPageResultVotesCardQuestionGraphRow = (props) => {

    const {
        answersTemplateRow,
        numInvalid
    } = props;

    const [showGraphTypeVertical, setShowGraphTypeVertical] = useState(true)
    const [showGraphTypeHorizontal, setShowGraphTypeHorizontal] = useState(false)
    const getAllColumn = answersTemplateRow.map(el => el.columns)

    useEffect(() => {
        if(answersTemplateRow !== undefined) {
            setShowGraphTypeHorizontal(true);
            setShowGraphTypeVertical(false)
        } else {
            setShowGraphTypeHorizontal(false)
            setShowGraphTypeVertical(true)
        }
    }, [answersTemplateRow])

    useEffect(() => {
        if (answersTemplateRow.length > 3 || getAllColumn > 3) {
            setShowGraphTypeHorizontal(true);
            setShowGraphTypeVertical(false)
        } else {
            setShowGraphTypeHorizontal(false)
            setShowGraphTypeVertical(true)
        }
    }, [answersTemplateRow.length])

    console.log(answersTemplateRow)

    return (
            <div className={'details-votes-page-result-card-graph__wrapper'}>
                {showGraphTypeHorizontal && (
                    <CardQuestionHorizontalGraph/>
                )
                }
                {showGraphTypeVertical && (
                    <CardQuestionVerticalGraphRow
                        numInvalid = {numInvalid}/>
                    )
                }
                <div className={'details-votes-page-result-card-graph__column-list'}>
                    {
                        answersTemplateRow.map((item, i) => {
                            return (
                                <CardQuestionGraphNameColumn
                                    key={i}
                                    nameColumn={item.title}
                                    colorSquare={'blue'}/>
                            )
                        })
                    }
                    <CardQuestionGraphNameColumn nameColumn={'Недействительные бюллетени'} colorSquare={'blue'}/>
                </div>
            </div>
    )
}
export default DetailsVotesPageResultVotesCardQuestionGraphRow;