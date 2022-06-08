import React from "react";
import './DetailsVotesPageResultVotesCardQuestionTable.css';
import CardQuestionCellsTable from "./CardQuestionCellsTable/CardQuestionCellsTable";

const DetailsVotesPageResultVotesCardQuestionTable = () => {



    return (
            <div className={'details-votes-page-result-card-table__wrapper'}>
                <table className={'details-votes-page-result-card-table__table'}>
                    <tbody>
                        <tr>
                            <th>Вариант ответа</th>
                            <th>Результат</th>
                        </tr>
                        <CardQuestionCellsTable varinantAnswer={'Да'} result={'240'}/>
                        <CardQuestionCellsTable varinantAnswer={'Нет'} result={'96'}/>
                        <CardQuestionCellsTable varinantAnswer={'Дайте подумать'} result={'48'}/>
                        <CardQuestionCellsTable varinantAnswer={'Согласен частично'} result={'72'}/>
                        <CardQuestionCellsTable varinantAnswer={'Недействительные бюллетени'} result={'24'}/>
                    </tbody>
                </table>
            </div>
    )
}
export default DetailsVotesPageResultVotesCardQuestionTable;
