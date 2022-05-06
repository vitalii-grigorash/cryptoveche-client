import React from "react";
import './DetailsVotesPageResultVotesCardQuestionTable.css';

const DetailsVotesPageResultVotesCardQuestionTable = () => {

    return (

        <div className={'details-votes-page-result-card-table__wrapper'}>
            <table className={'table'}>
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
            </table>
        </div>
    )
}
export default DetailsVotesPageResultVotesCardQuestionTable;
