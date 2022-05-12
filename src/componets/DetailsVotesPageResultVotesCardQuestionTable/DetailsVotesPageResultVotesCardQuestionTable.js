import React from "react";
import './DetailsVotesPageResultVotesCardQuestionTable.css';

const DetailsVotesPageResultVotesCardQuestionTable = ({hiddenTable}) => {

    return (

        <div className={'details-votes-page-result-card-table__wrapper'} hidden={hiddenTable}>
            <table className={'details-votes-page-result-card-table__table'}>
                <tbody>
                <tr>
                    <th>Вариант ответа</th>
                    <th>Результат</th>
                </tr>
                <tr>
                    <td>Да</td>
                    <td>240</td>
                </tr>
                <tr>
                    <td>Нет</td>
                    <td>96</td>
                </tr>
                <tr>
                    <td>Дайте подумать</td>
                    <td>48</td>
                </tr>
                <tr>
                    <td>Согласен частично</td>
                    <td>72</td>
                </tr>
                <tr>
                    <td>Недействительные бюллетени</td>
                    <td>24</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
export default DetailsVotesPageResultVotesCardQuestionTable;
